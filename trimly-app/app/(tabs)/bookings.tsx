import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BottomSheetModal from "../../components/ui/BottomSheetModal";
import Button from "../../components/ui/Button";
import RatingStars from "../../components/ui/RatingStars";
import { useApp } from "../../context/AppContext";
import {
  cancelBookingApi,
  completeBookingApi,
  getBookings,
  submitReviewApi,
} from "../../services/api";

const RATING_LABELS = ["", "Poor", "Fair", "Good", "Great", "Excellent!"];

export default function Bookings() {
  const insets = useSafeAreaInsets();
  const { cancelBooking, markRated, showToast } = useApp();

  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("BOOKINGS: mulai mengambil data...");

    getBookings()
      .then((data) => {
        console.log("BOOKINGS FROM API:", data);

        const formattedBookings = data.map((booking: any) => ({
          id: booking.id,
          salonId: booking.salon_id,

          salon: booking.salon?.name ?? "Unknown Salon",

          barber: booking.hairstylist?.name ?? "Any Hairstylist",

          service:
            booking.services?.map((service: any) => service.name).join(", ") ??
            "No service",

          date: (() => {
            const dateOnly = booking.booking_date?.split("T")[0];

            if (!dateOnly) return "";

            const [year, month, day] = dateOnly.split("-");

            const months = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ];

            return `${day} ${months[Number(month) - 1]}`;
          })(),

          time: booking.booking_time?.slice(0, 5) ?? "",

          price: Number(booking.total_price),

          status: booking.status,

          image: booking.salon?.image ?? "",

          rated: !!booking.review,
          rating: booking.review?.rating ?? null,
          review: booking.review?.comment ?? "",
        }));

        console.log("FORMATTED BOOKINGS:", formattedBookings);

        setBookings(formattedBookings);
      })
      .catch((error) => {
        console.error("BOOKINGS API ERROR:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleCancelBooking = async () => {
    if (!cancelTarget) return;

    try {
      await cancelBookingApi(cancelTarget.id);

      setBookings((current) =>
        current.map((booking) =>
          booking.id === cancelTarget.id
            ? {
                ...booking,
                status: "cancelled",
              }
            : booking,
        ),
      );

      setCancelTarget(null);

      showToast("Booking cancelled successfully");
    } catch (error) {
      console.error("CANCEL BOOKING ERROR:", error);

      showToast("Failed to cancel booking");
    }
  };

  const handleCompleteBooking = async (booking: any) => {
    try {
      console.log("COMPLETING BOOKING ID:", booking.id);

      const result = await completeBookingApi(booking.id);

      console.log("COMPLETE API RESPONSE:", result);

      setBookings((current) =>
        current.map((item) =>
          String(item.id) === String(booking.id)
            ? {
                ...item,
                status: result.booking?.status ?? "completed",
              }
            : item,
        ),
      );

      // Langsung pindah ke tab Completed
      setTab("completed");

      showToast("Booking completed successfully");
    } catch (error) {
      console.error("COMPLETE BOOKING ERROR:", error);

      showToast(
        error instanceof Error ? error.message : "Failed to complete booking",
      );
    }
  };

  const [tab, setTab] = useState<"upcoming" | "completed">("upcoming");
  const [cancelTarget, setCancelTarget] = useState<any | null>(null);
  const [reviewTarget, setReviewTarget] = useState<any | null>(null);
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewMsg, setReviewMsg] = useState("");

  const filtered = bookings.filter((b) =>
    tab === "upcoming" ? b.status === "upcoming" : b.status === "completed",
  );
  const upcomingCount = bookings.filter((b) => b.status === "upcoming").length;

  const submitReview = async () => {
    if (!reviewTarget) return;

    try {
      await submitReviewApi(reviewTarget.id, reviewRating, reviewMsg.trim());

      setBookings((current) =>
        current.map((booking) =>
          booking.id === reviewTarget.id
            ? {
                ...booking,
                rated: true,
                rating: reviewRating,
                review: reviewMsg.trim(),
              }
            : booking,
        ),
      );

      setReviewTarget(null);
      setReviewMsg("");
      setReviewRating(5);

      showToast("Review submitted! Thanks.");
    } catch (error) {
      console.error("REVIEW ERROR:", error);

      showToast(
        error instanceof Error ? error.message : "Failed to submit review",
      );
    }
  };

  if (loading) {
    return (
      <View className="flex-1 bg-bg items-center justify-center">
        <Text className="text-gray-400 font-poppins-medium">
          Loading bookings...
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-bg">
      <View
        className="bg-white px-5 pb-4 border-b border-gray-100"
        style={{ paddingTop: insets.top + 12 }}
      >
        <Text className="font-poppins-bold text-gray-900 text-base">
          My Bookings
        </Text>
        <Text className="text-xs text-gray-400 mt-0.5 font-inter">
          {bookings.length} total appointments
        </Text>

        <View className="flex-row bg-gray-100 rounded-2xl p-1 mt-4">
          {(["upcoming", "completed"] as const).map((t) => (
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
                {t}{" "}
                {t === "upcoming" && upcomingCount > 0
                  ? `(${upcomingCount})`
                  : ""}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <ScrollView
        className="flex-1 px-5 pt-4"
        contentContainerStyle={{ paddingBottom: 24, gap: 12 }}
      >
        {filtered.length === 0 ? (
          <View className="items-center py-16">
            <Ionicons name="calendar-outline" size={36} color="#E5E7EB" />
            <Text className="font-poppins-semibold text-gray-500 text-sm mt-3">
              No {tab} bookings
            </Text>
            <Text className="text-xs text-gray-400 mt-1 font-inter">
              Book your first appointment today
            </Text>
            <Pressable
              onPress={() => router.push("/(tabs)")}
              className="mt-4 bg-primary-600 px-5 py-2.5 rounded-xl"
            >
              <Text className="text-white text-xs font-poppins-bold">
                Browse Salons
              </Text>
            </Pressable>
          </View>
        ) : (
          filtered.map((bk) => (
            <View
              key={bk.id}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
            >
              <View className="flex-row items-center gap-3 p-4 border-b border-gray-50">
                <Image
                  source={{ uri: bk.image }}
                  className="w-14 h-14 rounded-xl bg-blue-100"
                  resizeMode="cover"
                />
                <View className="flex-1 min-w-0">
                  <View className="flex-row items-start justify-between gap-2">
                    <Text
                      className="font-poppins-semibold text-gray-800 text-sm flex-1"
                      numberOfLines={1}
                    >
                      {bk.salon}
                    </Text>
                    <Text
                      className={`text-[10px] font-poppins-bold px-2 py-0.5 rounded-full overflow-hidden ${
                        bk.status === "upcoming"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {bk.status === "upcoming" ? "Upcoming" : "Completed"}
                    </Text>
                  </View>
                  <Text className="text-xs text-gray-400 mt-0.5 font-inter">
                    {bk.barber} · {bk.service}
                  </Text>
                </View>
              </View>
              <View className="flex-row divide-x divide-gray-50">
                {[
                  bk.date,
                  bk.time,
                  `Rp ${Number(bk.price).toLocaleString("id-ID")}`,
                ].map((v, j) => (
                  <View key={j} className="flex-1 py-3 items-center">
                    <Text className="text-xs font-poppins-semibold text-gray-800">
                      {v}
                    </Text>
                    <Text className="text-[10px] text-gray-400 mt-0.5">
                      {["Date", "Time", "Total"][j]}
                    </Text>
                  </View>
                ))}
              </View>
              <View className="p-3 flex-row gap-2 border-t border-gray-50">
                {bk.status === "upcoming" ? (
                  <>
                    <Pressable
                      onPress={() => setCancelTarget(bk)}
                      className="flex-1 border border-red-200 rounded-xl py-2.5 items-center"
                    >
                      <Text className="text-red-500 text-xs font-poppins-bold">
                        Cancel
                      </Text>
                    </Pressable>

                    <Pressable
                      onPress={() => {
                        router.push(`/reschedule/${bk.id}`);
                      }}
                      className="flex-1 border border-primary-200 rounded-xl py-2.5 items-center"
                    >
                      <Text className="text-primary-600 text-xs font-poppins-bold">
                        Reschedule
                      </Text>
                    </Pressable>

                    <Pressable
                      onPress={() => handleCompleteBooking(bk)}
                      className="flex-1 bg-green-500 rounded-xl py-2.5 items-center"
                    >
                      <Text className="text-white text-xs font-poppins-bold">
                        Complete
                      </Text>
                    </Pressable>
                  </>
                ) : (
                  <>
                    {!bk.rated ? (
                      <Pressable
                        onPress={() => setReviewTarget(bk)}
                        className="flex-1 border border-amber-200 rounded-xl py-2.5 items-center"
                      >
                        <Text className="text-amber-600 text-xs font-poppins-bold">
                          ⭐ Rate Experience
                        </Text>
                      </Pressable>
                    ) : (
                      <View className="flex-1 flex-row items-center justify-center gap-1.5 bg-green-50 rounded-xl py-2.5">
                        <Ionicons
                          name="checkmark-circle"
                          size={12}
                          color="#22C55E"
                        />
                        <Text className="text-xs font-poppins-bold text-green-600">
                          Reviewed
                        </Text>
                      </View>
                    )}
                    <Pressable
                      onPress={() => router.push(`/booking/${bk.salonId}`)}
                      className="flex-1 bg-primary-600 rounded-xl py-2.5 items-center"
                    >
                      <Text className="text-white text-xs font-poppins-bold">
                        Book Again
                      </Text>
                    </Pressable>
                  </>
                )}
              </View>
            </View>
          ))
        )}
      </ScrollView>

      {/* Cancel modal */}
      <BottomSheetModal
        visible={!!cancelTarget}
        onClose={() => setCancelTarget(null)}
      >
        {cancelTarget && (
          <>
            <View className="w-12 h-12 bg-red-100 rounded-2xl items-center justify-center mb-3">
              <Ionicons name="alert-circle" size={22} color="#EF4444" />
            </View>
            <Text className="font-poppins-bold text-gray-900 text-base">
              Cancel Booking?
            </Text>
            <Text className="text-xs text-gray-500 mt-1 mb-4 leading-relaxed font-inter">
              Your appointment on{" "}
              <Text className="font-poppins-semibold text-gray-700">
                {cancelTarget.date} at {cancelTarget.time}
              </Text>{" "}
              will be cancelled. This cannot be undone.
            </Text>
            <View className="bg-gray-50 rounded-2xl p-3 mb-5 flex-row items-center gap-3">
              <Image
                source={{ uri: cancelTarget.image }}
                className="w-12 h-12 rounded-xl bg-blue-100"
                resizeMode="cover"
              />
              <View>
                <Text className="font-poppins-semibold text-gray-800 text-sm">
                  {cancelTarget.salon}
                </Text>
                <Text className="text-xs text-gray-400 font-inter">
                  {cancelTarget.service} · {cancelTarget.barber}
                </Text>
              </View>
            </View>
            <View className="flex-row gap-3">
              <Pressable
                onPress={() => setCancelTarget(null)}
                className="flex-1 py-3.5 rounded-2xl border border-gray-200 items-center"
              >
                <Text className="text-gray-600 font-poppins-semibold text-sm">
                  Keep It
                </Text>
              </Pressable>
              <Pressable
                onPress={handleCancelBooking}
                className="flex-1 py-3.5 rounded-2xl bg-red-500 items-center"
              >
                <Text className="text-white font-poppins-semibold text-sm">
                  Cancel
                </Text>
              </Pressable>
            </View>
          </>
        )}
      </BottomSheetModal>

      {/* Review modal */}
      <BottomSheetModal
        visible={!!reviewTarget}
        onClose={() => setReviewTarget(null)}
      >
        {reviewTarget && (
          <>
            <Text className="font-poppins-bold text-gray-900 text-base">
              Rate Your Experience
            </Text>
            <Text className="text-xs text-gray-400 mt-0.5 mb-5 font-inter">
              {reviewTarget.salon} · {reviewTarget.barber}
            </Text>
            <View className="flex-row justify-center mb-5">
              <RatingStars
                value={reviewRating}
                size={36}
                onChange={setReviewRating}
              />
            </View>
            <Text className="text-center text-sm font-poppins-semibold text-gray-700 mb-4">
              {RATING_LABELS[reviewRating]}
            </Text>
            <TextInput
              value={reviewMsg}
              onChangeText={setReviewMsg}
              placeholder="Tell others about your experience…"
              placeholderTextColor="#D1D5DB"
              multiline
              numberOfLines={3}
              className="bg-gray-50 rounded-2xl px-4 py-3.5 text-sm text-gray-700 border border-gray-100 mb-4 font-inter"
              style={{ textAlignVertical: "top" }}
            />
            <Button label="Submit Review" onPress={submitReview} />
          </>
        )}
      </BottomSheetModal>
    </View>
  );
}
