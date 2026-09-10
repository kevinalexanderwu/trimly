import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BarberCard from "../../components/BarberCard";
import { Tag } from "../../components/ui/Chip";
import RatingStars from "../../components/ui/RatingStars";
import {
  addFavoriteApi,
  getFavoritesApi,
  getSalon,
  removeFavoriteApi,
} from "../../services/api";

const TABS = ["services", "barbers", "info"] as const;

export default function SalonDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const insets = useSafeAreaInsets();
  const [tab, setTab] = useState<(typeof TABS)[number]>("services");

  const [salon, setSalon] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [fav, setFav] = useState(false);
  const barbers = salon?.hairstylists ?? [];
  const services = salon?.services ?? [];

  useEffect(() => {
    if (!id) return;

    const loadSalon = async () => {
      try {
        const data = await getSalon(id);

        console.log("SALON DETAIL FROM API:", data);
        setSalon(data);

        const token = await AsyncStorage.getItem("auth_token");

        if (token) {
          const favorites = await getFavoritesApi(token);

          const exists = favorites.some(
            (favorite: any) => Number(favorite.salon_id) === Number(data.id),
          );

          setFav(exists);
        }
      } catch (error) {
        console.error("SALON DETAIL ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    loadSalon();
  }, [id]);

  if (loading) {
    return (
      <View className="flex-1 bg-bg items-center justify-center">
        <Text className="text-gray-400 font-inter">Loading salon...</Text>
      </View>
    );
  }

  if (!salon) {
    return (
      <View className="flex-1 bg-bg items-center justify-center px-6">
        <Text className="text-gray-500 font-poppins-medium text-center">
          Salon not found
        </Text>
      </View>
    );
  }

  const handleToggleFavorite = async () => {
    console.log("❤️ HEART CLICKED");

    if (!salon) {
      console.log("❌ SALON IS NULL");
      return;
    }

    try {
      const token = await AsyncStorage.getItem("auth_token");

      console.log("SALON:", salon.id, salon.name);
      console.log("TOKEN EXISTS:", !!token);

      if (!token) {
        console.log("❌ NO TOKEN");
        alert("Please login first.");
        return;
      }

      if (fav) {
        console.log("REMOVE FAVORITE:", salon.id);

        await removeFavoriteApi(token, salon.id);
        setFav(false);
      } else {
        console.log("ADD FAVORITE:", salon.id);

        await addFavoriteApi(token, salon.id);
        setFav(true);
      }
    } catch (error) {
      console.error("❌ FAVORITE ERROR:", error);
    }
  };

  return (
    <View className="flex-1 bg-bg">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Banner */}
        <View className="relative h-60">
          <Image
            source={{ uri: salon.image }}
            className="w-full h-full bg-blue-100"
            resizeMode="cover"
          />
          <View className="absolute inset-0 bg-black/25" />
          <Pressable
            onPress={() => router.back()}
            style={{ top: insets.top + 8 }}
            className="absolute left-4 w-10 h-10 bg-black/30 rounded-full items-center justify-center"
          >
            <Ionicons name="chevron-back" size={20} color="#fff" />
          </Pressable>

          <Pressable
            onPress={handleToggleFavorite}
            style={{
              position: "absolute",
              top: 60,
              right: 20,
              width: 50,
              height: 50,
              zIndex: 99999,
              elevation: 999,
              backgroundColor: "rgba(0,0,0,0.5)",
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons
              name={fav ? "heart" : "heart-outline"}
              size={22}
              color={fav ? "#EF4444" : "#fff"}
            />
          </Pressable>

          <View className="absolute bottom-4 left-4 right-16 flex-row gap-1.5">
            {(salon.gallery ?? []).slice(0, 3).map((img: string, i: number) => (
              <Image
                key={i}
                source={{ uri: img }}
                className="w-12 h-12 rounded-xl border-2 border-white/50"
                resizeMode="cover"
              />
            ))}
            <View className="w-12 h-12 rounded-xl bg-black/40 border-2 border-white/30 items-center justify-center">
              <Text className="text-white text-[10px] font-poppins-bold">
                +{(salon.gallery ?? []).length}
              </Text>
            </View>
          </View>
          <View className="absolute bottom-16 left-4">
            <Tag label={salon.tag} color="amber" />
          </View>
        </View>

        {/* Info card */}
        <View className="bg-white mx-4 -mt-5 rounded-2xl px-4 py-4 shadow-lg">
          <View className="flex-row items-start justify-between gap-2">
            <View className="flex-1 min-w-0">
              <Text className="font-poppins-bold text-gray-900 text-base">
                {salon.name}
              </Text>
              <View className="flex-row items-center gap-1.5 mt-1">
                <RatingStars value={salon.rating} size={12} />
                <Text className="text-sm font-poppins-bold text-gray-800">
                  {salon.rating}
                </Text>
                <Text className="text-xs text-gray-400">
                  ({salon.reviews} reviews)
                </Text>
              </View>
            </View>
            <View className="flex-row gap-2">
              <View className="w-9 h-9 bg-blue-50 rounded-xl items-center justify-center">
                <Ionicons name="call-outline" size={15} color="#2563EB" />
              </View>
              <View className="w-9 h-9 bg-blue-50 rounded-xl items-center justify-center">
                <Ionicons name="globe-outline" size={15} color="#2563EB" />
              </View>
            </View>
          </View>
          <View className="flex-row gap-2 mt-3">
            <View className="flex-1 flex-row items-center gap-2 bg-gray-50 rounded-xl p-2.5">
              <Ionicons name="location-outline" size={13} color="#3B82F6" />
              <Text
                className="text-[11px] text-gray-600 flex-1"
                numberOfLines={1}
              >
                {salon.address}
              </Text>
            </View>
            <View className="flex-1 flex-row items-center gap-2 bg-gray-50 rounded-xl p-2.5">
              <Ionicons
                name="time-outline"
                size={13}
                color={salon.is_open ? "#22C55E" : "#9CA3AF"}
              />
              <Text
                className={`text-[11px] ${salon.open ? "text-green-600 font-poppins-semibold" : "text-gray-400"}`}
              >
                {salon.open ? "Open" : "Closed"} · {salon.hours}
              </Text>
            </View>
          </View>
        </View>

        {/* Tabs */}
        <View className="flex-row mx-4 mt-4 bg-gray-100 rounded-2xl p-1">
          {TABS.map((t) => (
            <Pressable
              key={t}
              onPress={() => setTab(t)}
              className={`flex-1 py-2.5 rounded-xl items-center ${
                tab === t ? "bg-white" : ""
              }`}
            >
              <Text
                className={`text-xs font-poppins-bold capitalize ${tab === t ? "text-primary-600" : "text-gray-400"}`}
              >
                {t}
              </Text>
            </Pressable>
          ))}
        </View>

        <View className="px-4 pt-4 gap-3">
          {tab === "services" &&
            services.map((svc: any) => (
              <View
                key={svc.name}
                className="bg-white rounded-2xl px-4 py-4 flex-row items-center justify-between shadow-sm border border-gray-50"
              >
                <View className="flex-1 min-w-0 mr-3">
                  <View className="flex-row items-center gap-2">
                    <Text className="font-poppins-semibold text-gray-800 text-sm">
                      {svc.name}
                    </Text>
                    {svc.popular && <Tag label="Popular" />}
                  </View>
                  <View className="flex-row items-center gap-1.5 mt-1">
                    <Ionicons name="time-outline" size={10} color="#9CA3AF" />
                    <Text className="text-xs text-gray-400">
                      {svc.duration}
                    </Text>
                  </View>
                </View>
                <View className="flex-row items-center gap-3">
                  <Text className="font-poppins-bold text-primary-600 text-sm">
                    Rp {Number(svc.price).toLocaleString("id-ID")}
                  </Text>
                  <Pressable
                    onPress={() =>
                      router.push(
                        `/booking/${salon.id}?serviceIndex=${services.indexOf(svc)}&barberId=${
                          barbers[0]?.id ?? ""
                        }`,
                      )
                    }
                    className="w-9 h-9 bg-primary-600 rounded-xl items-center justify-center"
                  >
                    <Ionicons name="add" size={16} color="#fff" />
                  </Pressable>
                </View>
              </View>
            ))}

          {tab === "barbers" &&
            barbers.map((b: any) => (
              <BarberCard
                key={b.id}
                barber={b}
                variant="list"
                onPress={() => router.push(`/barber/${b.id}`)}
              />
            ))}

          {tab === "info" && (
            <>
              <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-50">
                <Text className="font-poppins-bold text-gray-800 text-sm mb-2">
                  About
                </Text>
                <Text className="text-xs text-gray-500 leading-relaxed font-inter">
                  {salon.description}
                </Text>
              </View>
              <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-50">
                <Text className="font-poppins-bold text-gray-800 text-sm mb-3">
                  Opening Hours
                </Text>
                {["Mon–Fri", "Saturday", "Sunday"].map((d, i) => (
                  <View
                    key={d}
                    className={`flex-row justify-between py-2 ${i < 2 ? "border-b border-gray-50" : ""}`}
                  >
                    <Text className="text-xs text-gray-600 font-poppins-medium">
                      {d}
                    </Text>
                    <Text className="text-xs font-poppins-semibold text-gray-800">
                      {i === 2
                        ? "Closed"
                        : `${salon.opening_hour.slice(0, 5)} – ${salon.closing_hour.slice(0, 5)}`}
                    </Text>
                  </View>
                ))}
              </View>
            </>
          )}
        </View>
      </ScrollView>

      {/* CTA */}
      <View className="absolute bottom-0 left-0 right-0 px-5 pb-6 pt-8">
        <Pressable
          onPress={() =>
            router.push(`/booking/${salon.id}?barberId=${barbers[0]?.id ?? ""}`)
          }
          className="bg-primary-600 rounded-2xl py-4 flex-row items-center justify-center gap-2 shadow-xl"
        >
          <Ionicons name="calendar" size={16} color="#fff" />
          <Text className="text-white font-poppins-bold text-sm">
            Book Appointment
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
