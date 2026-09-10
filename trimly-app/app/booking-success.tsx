import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function BookingSuccess() {
  const {
    bookingId,
    salonId,
    salonName,
    salonAddress,
    salonImage,
    barberName,
    service,
    date,
    time,
    price,
  } = useLocalSearchParams<{
    bookingId: string;
    salonId: string;
    salonName: string;
    salonAddress: string;
    salonImage: string;
    barberName: string;
    service: string;
    date: string;
    time: string;
    price: string;
  }>();

  const insets = useSafeAreaInsets();

  const rows = [
    { icon: "person-outline", l: "Barber", v: barberName },
    { icon: "cut-outline", l: "Service", v: service },
    { icon: "calendar-outline", l: "Date", v: date },
    { icon: "time-outline", l: "Time", v: time },
  ] as const;

  return (
    <View className="flex-1 bg-bg">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          className="bg-primary-600 px-5 pb-20 relative"
          style={{ paddingTop: insets.top + 16 }}
        >
          <View className="items-center mt-5">
            <View className="w-20 h-20 bg-white rounded-full items-center justify-center shadow-2xl mb-4">
              <Ionicons name="checkmark-circle" size={36} color="#2563EB" />
            </View>
            <Text className="text-white text-xl font-poppins-bold">
              You&apos;re all set!
            </Text>
            <Text className="text-blue-200 text-sm mt-1">
              Your appointment is confirmed
            </Text>
          </View>
          <View className="absolute -bottom-6 left-0 right-0 h-12 bg-bg rounded-t-[32px]" />
        </View>

        <View className="px-5 pt-5 pb-6 gap-4">
          <View className="bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3 flex-row items-center justify-between">
            <View className="flex-row items-center gap-2">
              <Ionicons name="gift-outline" size={15} color="#D97706" />
              <Text className="text-xs text-amber-700 font-poppins-medium">
                Booking Reference
              </Text>
            </View>
            <Text className="font-poppins-bold text-amber-800 text-sm">
              #{bookingId}
            </Text>
          </View>

          <View className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <View className="flex-row items-center gap-3 p-4 border-b border-gray-50">
              <Image
                source={{ uri: salonImage }}
                className="w-14 h-14 rounded-xl bg-blue-100"
                resizeMode="cover"
              />
              <View className="flex-1 min-w-0">
                <Text className="font-poppins-bold text-gray-900 text-sm">
                  {salonName}
                </Text>
                <Text className="text-xs text-gray-400 mt-0.5">
                  {salonAddress}
                </Text>
              </View>
            </View>
            {rows.map(({ icon, l, v }) => (
              <View
                key={l}
                className="flex-row items-center gap-3 px-4 py-3 border-b border-gray-50"
              >
                <View className="w-8 h-8 bg-blue-50 rounded-xl items-center justify-center">
                  <Ionicons name={icon as any} size={13} color="#2563EB" />
                </View>
                <View className="flex-1">
                  <Text className="text-[10px] text-gray-400 font-poppins-medium">
                    {l}
                  </Text>
                  <Text className="text-sm font-poppins-semibold text-gray-800">
                    {v}
                  </Text>
                </View>
              </View>
            ))}
            <View className="px-4 py-4 bg-primary-600 flex-row items-center justify-between">
              <Text className="text-white/80 text-sm">Total Paid</Text>
              <Text className="text-white text-xl font-poppins-bold">
                Rp{price}
              </Text>
            </View>
          </View>

          <View className="flex-row gap-3">
            <Pressable className="flex-1 bg-white border border-blue-200 rounded-2xl py-3.5 flex-row items-center justify-center gap-1.5 shadow-sm">
              <Ionicons name="calendar-outline" size={14} color="#2563EB" />
              <Text className="text-primary-600 font-poppins-semibold text-xs">
                Add to Calendar
              </Text>
            </Pressable>
            <Pressable className="flex-1 bg-white border border-gray-200 rounded-2xl py-3.5 flex-row items-center justify-center gap-1.5 shadow-sm">
              <Ionicons name="call-outline" size={14} color="#374151" />
              <Text className="text-gray-600 font-poppins-semibold text-xs">
                Call Salon
              </Text>
            </Pressable>
          </View>

          <Pressable
            onPress={() => router.replace("/(tabs)/bookings")}
            className="bg-primary-600 rounded-2xl py-4 flex-row items-center justify-center gap-2 shadow-xl"
          >
            <Text className="text-white font-poppins-bold text-sm">
              View My Bookings
            </Text>
            <Ionicons name="arrow-forward" size={16} color="#fff" />
          </Pressable>
          <Pressable onPress={() => router.replace("/(tabs)")} className="py-1">
            <Text className="text-gray-400 text-sm font-poppins-medium text-center">
              Back to Home
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
