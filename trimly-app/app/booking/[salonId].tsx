import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, View, Linking } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CalendarPicker from "../../components/CalendarPicker";
import TimePicker from "../../components/TimePicker";
import { Tag } from "../../components/ui/Chip";
import RatingStars from "../../components/ui/RatingStars";
import { CAL_DAYS } from "../../constants/data";
import { useApp } from "../../context/AppContext";
import { createBooking, getSalon } from "../../services/api";

const STEPS = ["Service", "Date & Time", "Review"];

export default function Booking() {
  const { salonId, barberId, serviceIndex, serviceIndices, staffSelections } =
    useLocalSearchParams<{
      salonId: string;
      barberId?: string;
      serviceIndex?: string;
      serviceIndices?: string;
      staffSelections?: string;
    }>();

  const insets = useSafeAreaInsets();
  const { addBooking, user } = useApp();
  const ADMIN_WHATSAPP = "628112318778";

  const [salon, setSalon] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [step, setStep] = useState(0);
  const [selectedServices, setSelectedServices] = useState<number[]>(() => {
    if (serviceIndices) {
      return String(serviceIndices)
        .split(",")
        .map(Number)
        .filter((n) => !Number.isNaN(n));
    }

    if (serviceIndex) {
      return [Number(serviceIndex)];
    }

    return [];
  });
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.getDate();
  });

  const [time, setTime] = useState("");
  const selectedDate = new Date();
  selectedDate.setDate(date);
  const [selectedStaff, setSelectedStaff] = useState<{
    hair: number | null;
    massage: number | null;
    nail: number | null;
  }>(() => {
    if (!staffSelections) {
      return {
        hair: null,
        massage: null,
        nail: null,
      };
    }

    try {
      return JSON.parse(String(staffSelections));
    } catch {
      return {
        hair: null,
        massage: null,
        nail: null,
      };
    }
  });

  // =========================
  // GET SALON FROM API
  // =========================
  useEffect(() => {
    if (!salonId) return;

    console.log("BOOKING: getting salon", salonId);

    getSalon(salonId)
      .then((data) => {
        console.log("BOOKING SALON FROM API:", data);
        setSalon(data);
      })
      .catch((error) => {
        console.error("BOOKING API ERROR:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [salonId]);

  // =========================
  // LOADING
  // =========================
  if (loading) {
    return (
      <View className="flex-1 bg-bg items-center justify-center">
        <Text className="text-gray-400 font-poppins-medium">
          Loading booking...
        </Text>
      </View>
    );
  }

  // =========================
  // SALON NOT FOUND
  // =========================
  if (!salon) {
    return (
      <View className="flex-1 bg-bg items-center justify-center px-6">
        <Text className="text-gray-500 font-poppins-medium text-center">
          Salon not found
        </Text>

        <Pressable
          onPress={() => router.back()}
          className="mt-4 bg-primary-600 px-5 py-3 rounded-2xl"
        >
          <Text className="text-white font-poppins-semibold">Go Back</Text>
        </Pressable>
      </View>
    );
  }

  console.log("SALON DATA:", salon);

  // =========================
  // API DATA
  // =========================
  const services = salon.services ?? [];
  const barbers = salon.hairstylists ?? [];

  console.log("SERVICES DATA:", services);
  console.log("STAFF DATA:", barbers);

  const selectedBarber =
    barbers.find((b: any) => b.id === Number(barberId)) ?? barbers[0] ?? null;

  const barber = selectedBarber ?? {
    id: null,
    name: "Any Hairstylist",
    specialty: "Available stylist",
    rating: 0,
    reviews: 0,
    experience: "",
    image: salon.image,
  };

  const selectedServiceItems = selectedServices
    .map((index) => services[index])
    .filter(Boolean);

  const totalPrice = selectedServiceItems.reduce(
    (total: number, item: any) => total + Number(item.price),
    0,
  );

  const totalDuration = selectedServiceItems.reduce(
    (total: number, item: any) => {
      const minutes = parseInt(item.duration) || 0;
      return total + minutes;
    },
    0,
  );

  const dow = CAL_DAYS.find((c) => c.d === date)?.w ?? "Sat";

  const canContinue = selectedServices.length > 0 && !(step === 1 && !time);

  const toggleService = (index: number) => {
    setSelectedServices((current) => {
      if (current.includes(index)) {
        return current.filter((i) => i !== index);
      }

      return [...current, index];
    });
  };

  // =========================
  // NEXT / CONFIRM
  // =========================
  const handleNext = async () => {
    if (step < 2) {
      setStep(step + 1);
      return;
    }

    if (selectedServiceItems.length === 0) {
      return;
    }

    try {
      const token = await AsyncStorage.getItem("auth_token");

      if (!token) {
        throw new Error("User belum login");
      }

      const result = await createBooking(
        {
          salon_id: salon.id,

          // Tetap dikirim untuk compatibility dengan struktur booking lama
          hairstylist_id: barber.id ?? null,

          // Staff yang dipilih berdasarkan kategori service
          staff_selections: selectedStaff,

          booking_date: `${selectedDate.getFullYear()}-${String(
            selectedDate.getMonth() + 1
          ).padStart(2, "0")}-${String(date).padStart(2, "0")}`,

          booking_time: time,

          service_ids: selectedServiceItems.map((service: any) => service.id),
        },
        token
      );

      const booking = result.booking;
  
        const message = `Halo saya ingin mengonfirmasi booking.

        Booking ID: #${booking.id}
        Nama: ${user.name}
        Service: ${selectedServiceItems
          .map((service: any) => service.name)
          .join(", ")}
        Hairstylist: ${barber.name}
        Tanggal: ${selectedDate.toLocaleDateString("id-ID", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
        Jam: ${time}
        Total: Rp ${totalPrice.toLocaleString("id-ID")}

        Mohon dikonfirmasi. Terima kasih.`;

        const whatsappUrl = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(
          message
        )}`;

        await Linking.openURL(whatsappUrl);

      await Linking.openURL(whatsappUrl);

      console.log("BOOKING CREATED:", result);

      console.log("BOOKING CREATED:", result);

      router.replace({
        pathname: "/booking-success",
        params: {
          bookingId: String(booking.id),
          salonId: String(salon.id),
          salonName: salon.name,
          salonAddress: salon.address,
          salonImage: salon.image,
          barberName: barber.name,
          service: selectedServiceItems
            .map((service: any) => service.name)
            .join(", "),
          date: `${date} ${dow}`,
          time: time,
          price: totalPrice.toLocaleString("id-ID"),
        },
      });
    } catch (error) {
      console.error("BOOKING ERROR:", error);
    }
  };

  return (
    <View className="flex-1 bg-bg">
      {/* =========================
          HEADER
      ========================= */}
      <View
        className="bg-white px-5 pb-4 border-b border-gray-100"
        style={{ paddingTop: insets.top + 8 }}
      >
        <View className="flex-row items-center gap-3 mb-4">
          <Pressable
            onPress={() => (step === 0 ? router.back() : setStep(step - 1))}
            className="w-10 h-10 bg-gray-100 rounded-2xl items-center justify-center"
          >
            <Ionicons name="chevron-back" size={18} color="#374151" />
          </Pressable>

          <View className="flex-1">
            <Text className="font-poppins-bold text-gray-900 text-base">
              Book Appointment
            </Text>

            <Text className="text-xs text-gray-400 mt-0.5">
              Step {step + 1} of {STEPS.length}
            </Text>
          </View>
        </View>

        {/* Progress */}
        <View className="flex-row gap-1.5">
          {STEPS.map((s, i) => (
            <View key={s} className="flex-1 gap-1">
              <View className="h-1 rounded-full bg-gray-100 overflow-hidden">
                <View
                  className={`h-full bg-primary-600 rounded-full ${
                    i <= step ? "w-full" : "w-0"
                  }`}
                />
              </View>

              <Text
                className={`text-[10px] font-poppins-medium ${
                  i === step
                    ? "text-primary-600"
                    : i < step
                      ? "text-gray-500"
                      : "text-gray-300"
                }`}
              >
                {s}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* =========================
          BARBER SUMMARY
      ========================= */}
      <View className="mx-5 mt-4">
        <View className="bg-white rounded-2xl p-3.5 flex-row items-center gap-3 shadow-sm border border-gray-50">
          <Image
            source={{
              uri: barber.image || salon.image,
            }}
            className="w-12 h-12 rounded-xl bg-blue-100"
            resizeMode="cover"
          />

          <View className="flex-1 min-w-0">
            <Text className="font-poppins-semibold text-gray-800 text-sm">
              {barber.name}
            </Text>

            <Text className="text-xs text-gray-400">{salon.name}</Text>
          </View>

          <Pressable
            onPress={() =>
              router.push({
                pathname: `/salon/${salon.id}`,
                params: {
                  tab: "barbers",
                  serviceIndices: selectedServices.join(","),
                },
              })
            }
          >
            <Text className="text-primary-600 text-xs font-poppins-semibold">
              Change
            </Text>
          </Pressable>
        </View>
      </View>

      {/* =========================
          CONTENT
      ========================= */}
      <ScrollView
        className="flex-1 px-5 pt-4"
        contentContainerStyle={{
          paddingBottom: 24,
        }}
      >
        {/* =========================
            STEP 1 - SERVICE
        ========================= */}
        {step === 0 && (
          <View className="gap-3">
            <Text className="font-poppins-bold text-gray-900 text-sm">
              Choose Service
            </Text>

            {services.map((s: any, i: number) => (
              <Pressable
                key={s.id ?? s.name}
                onPress={() => toggleService(i)}
                className={`rounded-2xl p-4 flex-row items-center justify-between border-2 ${
                  selectedServices.includes(i)
                    ? "border-primary-600 bg-blue-50/80"
                    : "border-transparent bg-white shadow-sm"
                }`}
              >
                <View className="flex-1 min-w-0 mr-3">
                  <View className="flex-row items-center gap-2">
                    <Text className="font-poppins-semibold text-gray-800 text-sm">
                      {s.name}
                    </Text>

                    {s.popular && <Tag label="Popular" />}
                  </View>

                  <View className="flex-row items-center gap-1.5 mt-1">
                    <Ionicons name="time-outline" size={10} color="#9CA3AF" />

                    <Text className="text-xs text-gray-400">{s.duration}</Text>
                  </View>
                </View>

                <View className="flex-row items-center gap-3">
                  <Text className="font-poppins-bold text-primary-600">
                    Rp {Number(s.price).toLocaleString("id-ID")}
                  </Text>

                  <View
                    className={`w-6 h-6 rounded-full border-2 items-center justify-center ${
                      selectedServices.includes(i)
                        ? "border-primary-600 bg-primary-600"
                        : "border-gray-300"
                    }`}
                  >
                    {selectedServices.includes(i) && (
                      <Ionicons name="checkmark" size={12} color="#fff" />
                    )}
                  </View>
                </View>
              </Pressable>
            ))}

            {services.length === 0 && (
              <View className="bg-white rounded-2xl p-6 items-center">
                <Text className="text-gray-400 text-sm">
                  No services available
                </Text>
              </View>
            )}
          </View>
        )}

        {/* =========================
            STEP 2 - DATE & TIME
        ========================= */}
        {step === 1 && (
          <View className="gap-5">
            <View>
              <Text className="font-poppins-bold text-gray-900 text-sm mb-3">
                Select Date ·{" "}
                <Text className="text-gray-400 font-poppins-medium text-xs">
                  {selectedDate.toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </Text>
              </Text>

              <CalendarPicker selected={date} onSelect={setDate} />
            </View>

            <View>
              <Text className="font-poppins-bold text-gray-900 text-sm mb-3">
                Select Time
              </Text>

              <TimePicker
                selected={time}
                onSelect={setTime}
                openingTime={salon.opening_time}
                closingTime={salon.closing_hour}
              />
            </View>
          </View>
        )}

        {/* =========================
            STEP 3 - REVIEW
        ========================= */}
        {step === 2 && (
          <View className="gap-4">
            <Text className="font-poppins-bold text-gray-900 text-sm">
              Review Booking
            </Text>

            <View className="bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden">
              {/* Salon */}
              <View className="flex-row items-center gap-3 p-4 bg-blue-50/60 border-b border-blue-100/50">
                <Image
                  source={{
                    uri: salon.image,
                  }}
                  className="w-12 h-12 rounded-xl bg-blue-100"
                  resizeMode="cover"
                />

                <View>
                  <Text className="font-poppins-bold text-gray-800 text-sm">
                    {salon.name}
                  </Text>

                  <View className="flex-row items-center gap-1 mt-0.5">
                    <RatingStars value={Number(salon.rating)} size={10} />

                    <Text className="text-[10px] text-gray-400">
                      ({salon.reviews})
                    </Text>
                  </View>
                </View>
              </View>

              {/* Booking information */}
              {[
                {
                  icon: "person-outline",
                  label: "Hairstylist",
                  value: barber.name,
                },
                {
                  icon: "cut-outline",
                  label: "Service",
                  value:
                    selectedServiceItems.length > 0
                      ? selectedServiceItems.map((s: any) => s.name).join(", ")
                      : "Select a service",
                },
                {
                  icon: "calendar-outline",
                  label: "Date",
                  value: selectedDate.toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  }),
                },
                {
                  icon: "time-outline",
                  label: "Time",
                  value: time || "Select a time",
                },
                {
                  icon: "hourglass-outline",
                  label: "Duration",
                  value: totalDuration > 0 ? `${totalDuration} min` : "0 min",
                },
              ].map(({ icon, label, value }) => (
                <View
                  key={label}
                  className="flex-row items-center gap-3 px-4 py-3 border-b border-gray-50"
                >
                  <View className="w-8 h-8 bg-blue-50 rounded-xl items-center justify-center">
                    <Ionicons name={icon as any} size={13} color="#2563EB" />
                  </View>

                  <View className="flex-1">
                    <Text className="text-[10px] text-gray-400 font-poppins-medium">
                      {label}
                    </Text>

                    <Text className="text-sm font-poppins-semibold text-gray-800 mt-0.5">
                      {value}
                    </Text>
                  </View>
                </View>
              ))}

              {/* Total */}
              <View className="px-4 py-3.5 bg-primary-600 flex-row items-center justify-between">
                <Text className="text-white/80 text-sm font-poppins-medium">
                  Total
                </Text>

                <Text className="text-white text-xl font-poppins-bold">
                  Rp {totalPrice.toLocaleString("id-ID")}
                </Text>
              </View>
            </View>

            <View className="bg-amber-50 border border-amber-200 rounded-2xl p-3.5 flex-row items-start gap-2.5">
              <Ionicons
                name="alert-circle"
                size={15}
                color="#F59E0B"
                style={{ marginTop: 2 }}
              />

              <Text className="text-xs text-amber-700 flex-1 font-inter">
                Free cancellation up to 2 hours before your appointment.
              </Text>
            </View>
          </View>
        )}
      </ScrollView>

      {/* =========================
          FOOTER
      ========================= */}
      <View className="px-5 pb-6 pt-3 bg-white border-t border-gray-100">
        {selectedServiceItems.length > 0 && (
          <View className="mb-3">
            <View className="flex-row items-center justify-between">
              <View className="flex-1 mr-3">
                <Text className="text-[11px] text-gray-400" numberOfLines={1}>
                  {selectedServiceItems.map((s: any) => s.name).join(" + ")}
                </Text>

                <Text className="font-poppins-bold text-gray-900 text-base">
                  Rp {totalPrice.toLocaleString("id-ID")}
                </Text>
              </View>

              <Text className="text-xs text-gray-400 bg-gray-100 px-2.5 py-1.5 rounded-full">
                {totalDuration} min
              </Text>
            </View>
          </View>
        )}

        <Pressable
          disabled={!canContinue}
          onPress={handleNext}
          className={`rounded-2xl py-4 flex-row items-center justify-center gap-2 shadow-lg ${
            canContinue ? "bg-primary-600" : "bg-gray-200"
          }`}
        >
          <Text
            className={`font-poppins-bold text-sm ${
              canContinue ? "text-white" : "text-gray-400"
            }`}
          >
            {step < 2 ? "Continue" : "Confirm Booking"}
          </Text>

          <Ionicons
            name="arrow-forward"
            size={16}
            color={canContinue ? "#fff" : "#9CA3AF"}
          />
        </Pressable>
      </View>
    </View>
  );
}
