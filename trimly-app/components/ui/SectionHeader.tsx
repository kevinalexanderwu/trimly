import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";

type Props = {
  title: string;
  onSeeAll?: () => void;
};

export default function SectionHeader({ title, onSeeAll }: Props) {
  return (
    <View className="flex-row items-center justify-between mb-3">
      <Text className="font-poppins-bold text-gray-900 text-[15px]">{title}</Text>
      {onSeeAll && (
        <Pressable onPress={onSeeAll} className="flex-row items-center gap-0.5">
          <Text className="text-primary-600 text-xs font-poppins-semibold">See all</Text>
          <Ionicons name="chevron-forward" size={13} color="#2563EB" />
        </Pressable>
      )}
    </View>
  );
}
