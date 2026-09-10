import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BARBERS, SALONS } from "../../constants/data";

export default function BarberDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const insets = useSafeAreaInsets();

  const barber = BARBERS.find((b) => b.id === Number(id)) ?? BARBERS[0];
  const salon = SALONS.find((s) => s.id === barber.salonId) ?? SALONS[0];

  const stats = [
    {
      icon: "star",
      v: String(barber.rating),
      l: "Rating",
      c: "#F59E0B",
      bg: "#FFFBEB",
    },
    {
      icon: "book-outline",
      v: String(barber.reviews),
      l: "Reviews",
      c: "#2563EB",
      bg: "#EFF6FF",
    },
    {
      icon: "ribbon-outline",
      v: barber.exp,
      l: "Experience",
      c: "#7C3AED",
      bg: "#F5F3FF",
    },
  ] as const;

  return (
    <View className="flex-1 bg-bg">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View className="relative h-72">
          <Image
            source={{ uri: barber.image }}
            className="w-full h-full bg-blue-100"
            resizeMode="cover"
          />
          <View className="absolute inset-0 bg-black/35" />
          <Pressable
            onPress={() => router.back()}
            style={{ top: insets.top + 8 }}
            className="absolute left-4 w-10 h-10 bg-black/30 rounded-full items-center justify-center"
          >
            <Ionicons name="chevron-back" size={20} color="#fff" />
          </Pressable>

          <View className="absolute bottom-0 left-0 right-0 px-5 pb-5">
            <View
              className={`flex-row items-center gap-1.5 px-2.5 py-1 rounded-full self-start mb-2 ${
                barber.available ? "bg-green-500/20" : "bg-gray-500/20"
              }`}
            >
              <View
                className={`w-2 h-2 rounded-full ${barber.available ? "bg-green-400" : "bg-gray-400"}`}
              />
              <Text
                className={`text-[11px] font-poppins-semibold ${barber.available ? "text-green-300" : "text-gray-300"}`}
              >
                {barber.available ? "Available Today" : "Not Available"}
              </Text>
            </View>
            <Text className="text-white text-2xl font-poppins-bold">
              {barber.name}
            </Text>
            <Text className="text-white/60 text-sm mt-0.5 font-inter">
              {barber.specialty} · {barber.salon}
            </Text>
          </View>
        </View>

        <View className="px-5 pt-5 gap-4">
          {/* Stats */}
          <View className="flex-row gap-3">
            {stats.map(({ icon, v, l, c, bg }) => (
              <View
                key={l}
                className="flex-1 bg-white rounded-2xl p-3.5 items-center shadow-sm border border-gray-50"
              >
                <View
                  className="w-9 h-9 rounded-xl items-center justify-center mb-2"
                  style={{ backgroundColor: bg }}
                >
                  <Ionicons name={icon as any} size={16} color={c} />
                </View>
                <Text className="font-poppins-bold text-gray-800 text-base">
                  {v}
                </Text>
                <Text className="text-[10px] text-gray-400 mt-0.5">{l}</Text>
              </View>
            ))}
          </View>

          {/* Bio */}
          <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-50">
            <Text className="font-poppins-bold text-gray-800 text-sm mb-2">
              About
            </Text>
            <Text className="text-xs text-gray-500 leading-relaxed font-inter">
              {barber.bio}
            </Text>
          </View>

          {/* Specialties */}
          <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-50">
            <Text className="font-poppins-bold text-gray-800 text-sm mb-3">
              Specialties
            </Text>
            <View className="flex-row flex-wrap gap-2">
              {barber.tags.map((tag) => (
                <Text
                  key={tag}
                  className="bg-blue-50 text-primary-600 text-xs font-poppins-semibold px-3 py-1.5 rounded-full border border-blue-100 overflow-hidden"
                >
                  {tag}
                </Text>
              ))}
            </View>
          </View>

          {/* Salon */}
          <Pressable
            onPress={() => router.push(`/salon/${salon.id}`)}
            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-50 flex-row items-center gap-3"
          >
            <Image
              source={{ uri: salon.image }}
              className="w-14 h-14 rounded-xl bg-blue-100"
              resizeMode="cover"
            />
            <View className="flex-1 min-w-0">
              <Text className="text-[10px] text-gray-400 font-poppins-medium uppercase tracking-wide">
                Works at
              </Text>
              <Text className="font-poppins-semibold text-gray-800 text-sm mt-0.5">
                {salon.name}
              </Text>
              <Text className="text-[11px] text-gray-400">{salon.address}</Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#D1D5DB" />
          </Pressable>
        </View>
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0 px-5 pb-6 pt-8">
        <Pressable
          disabled={!barber.available}
          onPress={() =>
            router.push(`/booking/${salon.id}?barberId=${barber.id}`)
          }
          className={`rounded-2xl py-4 flex-row items-center justify-center gap-2 shadow-xl ${
            barber.available ? "bg-primary-600" : "bg-gray-200"
          }`}
        >
          <Ionicons
            name="calendar"
            size={16}
            color={barber.available ? "#fff" : "#9CA3AF"}
          />
          <Text
            className={`font-poppins-bold text-sm ${barber.available ? "text-white" : "text-gray-400"}`}
          >
            {barber.available
              ? `Book with ${barber.name.split(" ")[0]}`
              : "Not Available Today"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
