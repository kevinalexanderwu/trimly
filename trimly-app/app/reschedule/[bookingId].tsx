import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Alert, Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { rescheduleBookingApi } from "../../services/api";

const DATES = [
  { date: "19", day: "Today" },
  { date: "20", day: "Wed" },
  { date: "21", day: "Thu" },
  { date: "22", day: "Fri" },
  { date: "23", day: "Sat" },
];

const TIMES = [
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

export default function RescheduleBooking() {
  const insets = useSafeAreaInsets();

  const { bookingId } = useLocalSearchParams<{
    bookingId: string;
  }>();

  const [selectedDate, setSelectedDate] = useState("19");
  const [selectedTime, setSelectedTime] = useState("13:00");
  const [saving, setSaving] = useState(false);

  const handleReschedule = async () => {
    if (!bookingId) return;

    try {
      setSaving(true);

      const result = await rescheduleBookingApi(
        Number(bookingId),
        `2026-08-${selectedDate.padStart(2, "0")}`,
        selectedTime,
      );

      console.log("RESCHEDULE SUCCESS:", result);

      Alert.alert(
        "Rescheduled",
        "Your booking has been rescheduled successfully.",
        [
          {
            text: "OK",
            onPress: () => router.replace("/(tabs)/bookings"),
          },
        ],
      );
    } catch (error) {
      console.error("RESCHEDULE ERROR:", error);

      Alert.alert("Failed", "Unable to reschedule your booking.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <View className="flex-1 bg-bg" style={{ paddingTop: insets.top }}>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          padding: 20,
          paddingBottom: 120,
        }}
      >
        {/* Header */}
        <View className="flex-row items-center mb-8">
          <Pressable
            onPress={() => router.back()}
            className="w-10 h-10 bg-white rounded-2xl items-center justify-center mr-3"
          >
            <Ionicons name="chevron-back" size={20} color="#374151" />
          </Pressable>

          <View>
            <Text className="text-xl font-poppins-bold text-gray-900">
              Reschedule Booking
            </Text>

            <Text className="text-xs text-gray-400 mt-1">
              Booking #{bookingId}
            </Text>
          </View>
        </View>

        {/* Date */}
        <Text className="text-base font-poppins-semibold text-gray-900 mb-4">
          Choose Date
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 10 }}
          className="mb-8"
        >
          {DATES.map((item) => {
            const selected = selectedDate === item.date;

            return (
              <Pressable
                key={item.date}
                onPress={() => setSelectedDate(item.date)}
                className={`w-[72px] h-[82px] rounded-2xl items-center justify-center border ${
                  selected
                    ? "bg-primary-600 border-primary-600"
                    : "bg-white border-gray-100"
                }`}
              >
                <Text
                  className={`text-xs font-poppins-medium ${
                    selected ? "text-blue-100" : "text-gray-400"
                  }`}
                >
                  {item.day}
                </Text>

                <Text
                  className={`text-xl font-poppins-bold mt-1 ${
                    selected ? "text-white" : "text-gray-800"
                  }`}
                >
                  {item.date}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {/* Time */}
        <Text className="text-base font-poppins-semibold text-gray-900 mb-4">
          Choose Time
        </Text>

        <View className="flex-row flex-wrap gap-3">
          {TIMES.map((time) => {
            const selected = selectedTime === time;

            return (
              <Pressable
                key={time}
                onPress={() => setSelectedTime(time)}
                className={`w-[30%] py-3.5 rounded-xl items-center border ${
                  selected
                    ? "bg-primary-600 border-primary-600"
                    : "bg-white border-gray-100"
                }`}
              >
                <Text
                  className={`text-sm font-poppins-semibold ${
                    selected ? "text-white" : "text-gray-700"
                  }`}
                >
                  {time}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>

      {/* Bottom button */}
      <View
        className="absolute bottom-0 left-0 right-0 bg-white px-5 pt-3"
        style={{
          paddingBottom: insets.bottom + 12,
        }}
      >
        <Pressable
          disabled={saving}
          onPress={handleReschedule}
          className={`py-4 rounded-2xl items-center ${
            saving ? "bg-blue-300" : "bg-primary-600"
          }`}
        >
          <Text className="text-white font-poppins-bold text-sm">
            {saving ? "Saving..." : "Confirm Reschedule"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
