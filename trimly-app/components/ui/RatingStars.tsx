import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, View } from "react-native";

type Props = {
  value: number;
  size?: number;
  onChange?: (v: number) => void;
};

export default function RatingStars({ value, size = 12, onChange }: Props) {
  const rounded = Math.round(value);
  return (
    <View className="flex-row" style={{ gap: onChange ? 8 : 1 }}>
      {[1, 2, 3, 4, 5].map((i) =>
        onChange ? (
          <Pressable key={i} onPress={() => onChange(i)}>
            <Ionicons name={i <= value ? "star" : "star-outline"} size={size} color={i <= value ? "#FBBF24" : "#E5E7EB"} />
          </Pressable>
        ) : (
          <Ionicons
            key={i}
            name={i <= rounded ? "star" : "star-outline"}
            size={size}
            color={i <= rounded ? "#FBBF24" : "#E5E7EB"}
          />
        )
      )}
    </View>
  );
}
