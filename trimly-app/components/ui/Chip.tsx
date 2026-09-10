import React from "react";
import { Pressable, Text } from "react-native";

type Props = {
  label: string;
  active?: boolean;
  onPress?: () => void;
};

export function Chip({ label, active, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      className={`px-3.5 py-2 rounded-full border ${
        active ? "bg-primary-600 border-primary-600" : "bg-white border-gray-200"
      }`}
    >
      <Text className={`text-[11px] font-poppins-semibold ${active ? "text-white" : "text-gray-600"}`}>
        {label}
      </Text>
    </Pressable>
  );
}

export function Tag({ label, color = "blue" }: { label: string; color?: "blue" | "amber" | "green" | "purple" }) {
  const map: Record<string, string> = {
    blue: "bg-blue-100",
    amber: "bg-amber-100",
    green: "bg-green-100",
    purple: "bg-purple-100",
  };
  const textMap: Record<string, string> = {
    blue: "text-blue-700",
    amber: "text-amber-700",
    green: "text-green-700",
    purple: "text-purple-700",
  };
  return (
    <Text
      className={`text-[10px] font-poppins-semibold px-2 py-0.5 rounded-full overflow-hidden ${map[color]} ${textMap[color]}`}
    >
      {label}
    </Text>
  );
}
