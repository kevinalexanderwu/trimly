import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { Salon } from "../constants/data";
import RatingStars from "./ui/RatingStars";

type Props = {
  salon: Salon;
  onPress: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  variant?: "grid" | "list";
};

export default function SalonCard({
  salon,
  onPress,
  isFavorite,
  onToggleFavorite,
  variant = "grid",
}: Props) {
  console.log("Salon image:", salon.image);
  if (variant === "list") {
    return (
      <Pressable
        disabled={!salon.open}
        onPress={onPress}
        className={`bg-white rounded-2xl flex-row gap-3 p-3 shadow-sm border border-gray-50 ${
          salon.open ? "" : "opacity-50"
        }`}
      >
        <Image
          source={{ uri: salon.image }}
          className="w-[72px] h-[72px] rounded-xl bg-blue-100"
          resizeMode="cover"
        />
        <View className="flex-1 min-w-0">
          <View className="flex-row items-start justify-between">
            <Text
              className="font-poppins-semibold text-gray-800 text-sm leading-tight flex-1 mr-2"
              numberOfLines={1}
            >
              {salon.name}
            </Text>
            <Pressable onPress={onToggleFavorite} hitSlop={8}>
              <Ionicons
                name={isFavorite ? "heart" : "heart-outline"}
                size={15}
                color={isFavorite ? "#EF4444" : "#D1D5DB"}
              />
            </Pressable>
          </View>
          <View className="flex-row items-center gap-1 mt-1">
            <RatingStars value={salon.rating} size={10} />
            <Text className="text-[10px] text-gray-400">({salon.reviews})</Text>
          </View>
          <View className="flex-row items-center justify-between mt-2">
            <View className="flex-row items-center gap-1">
              <Ionicons
                name="time-outline"
                size={10}
                color={salon.open ? "#22C55E" : "#9CA3AF"}
              />
              <Text
                className={`text-[10px] font-poppins-medium ${salon.open ? "text-green-500" : "text-gray-400"}`}
              >
                {salon.open ? "Open" : "Closed"} · {salon.hours}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  }

  return (
    <Pressable
      disabled={!salon.open}
      onPress={onPress}
      className={`w-[195px] bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-50 ${
        salon.open ? "" : "opacity-50"
      }`}
    >
      <View className="relative">
        <Image
          source={{ uri: salon.image }}
          className="w-full h-28 bg-blue-100"
          resizeMode="cover"
        />
        <Pressable
          onPress={onToggleFavorite}
          className="absolute top-2.5 right-2.5 w-8 h-8 bg-white/90 rounded-full items-center justify-center"
        >
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={14}
            color={isFavorite ? "#EF4444" : "#9CA3AF"}
          />
        </Pressable>
        <View className="absolute bottom-2.5 left-2.5">
          <Text className="bg-primary-600 text-white text-[9px] font-poppins-bold px-2 py-0.5 rounded-full overflow-hidden">
            {salon.tag}
          </Text>
        </View>
        {!salon.open && (
          <View className="absolute inset-0 bg-black/30 items-center justify-center">
            <Text className="bg-black/60 text-white text-[10px] font-poppins-bold px-2 py-1 rounded-full overflow-hidden">
              Closed
            </Text>
          </View>
        )}
      </View>
      <View className="p-3">
        <Text
          className="font-poppins-semibold text-gray-800 text-sm"
          numberOfLines={1}
        >
          {salon.name}
        </Text>
        <View className="flex-row items-center gap-1 mt-1">
          <Ionicons name="star" size={10} color="#FBBF24" />
          <Text className="text-xs font-poppins-bold text-gray-700">
            {salon.rating}
          </Text>
          <Text className="text-[10px] text-gray-400">({salon.reviews})</Text>
        </View>
        <View className="flex-row items-center justify-between mt-2">
          <View className="flex-row items-center gap-1">
            <Ionicons name="location-outline" size={10} color="#9CA3AF" />
            <Text className="text-[10px] text-gray-500">{salon.distance}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
