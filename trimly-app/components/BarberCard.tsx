import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { Barber } from "../constants/data";
import RatingStars from "./ui/RatingStars";

type Props = {
  barber: Barber;
  onPress: () => void;
  variant?: "grid" | "list";
};

export default function BarberCard({
  barber,
  onPress,
  variant = "grid",
}: Props) {
  if (variant === "list") {
    return (
      <Pressable
        onPress={onPress}
        className="bg-white rounded-2xl p-4 flex-row items-center gap-4 shadow-sm border border-gray-50"
      >
        <View className="relative">
          <Image
            source={{ uri: barber.image }}
            className="w-14 h-14 rounded-2xl bg-blue-100"
            resizeMode="cover"
          />
          <View
            className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
              barber.available ? "bg-green-400" : "bg-gray-300"
            }`}
          />
        </View>
        <View className="flex-1 min-w-0">
          <View className="flex-row items-center gap-2">
            <Text className="font-poppins-semibold text-gray-800 text-sm">
              {barber.name}
            </Text>
            {barber.available ? (
              <Text className="text-[9px] font-poppins-bold bg-green-50 text-green-600 px-1.5 py-0.5 rounded-full overflow-hidden">
                Available
              </Text>
            ) : (
              <Text className="text-[9px] font-poppins-bold bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded-full overflow-hidden">
                Busy
              </Text>
            )}
          </View>
          <Text className="text-xs text-gray-400 mt-0.5">
            {barber.specialty}
          </Text>
          <View className="flex-row items-center gap-1 mt-1">
            <RatingStars value={barber.rating} size={10} />
            <Text className="text-[10px] text-gray-400">
              ({barber.reviews})
            </Text>
          </View>
        </View>
        <Ionicons name="chevron-forward" size={16} color="#D1D5DB" />
      </Pressable>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      className="w-[130px] bg-white rounded-3xl p-3.5 shadow-sm border border-gray-50 items-center"
    >
      <View className="relative mb-2">
        <Image
          source={{ uri: barber.image }}
          className="w-16 h-16 rounded-2xl bg-blue-100"
          resizeMode="cover"
        />
        <View
          className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
            barber.available ? "bg-green-400" : "bg-gray-300"
          }`}
        />
      </View>
      <Text
        className="font-poppins-semibold text-gray-800 text-xs"
        numberOfLines={1}
      >
        {barber.name.split(" ")[0]}
      </Text>
      <Text className="text-[10px] text-gray-400" numberOfLines={1}>
        {barber.specialty}
      </Text>
      <View className="flex-row items-center gap-1 mt-1.5">
        <Ionicons name="star" size={10} color="#FBBF24" />
        <Text className="text-[11px] font-poppins-bold text-gray-700">
          {barber.rating}
        </Text>
      </View>
    </Pressable>
  );
}
