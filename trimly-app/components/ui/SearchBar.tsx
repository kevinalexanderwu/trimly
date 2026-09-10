import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";

type Props = {
  value?: string;
  onChangeText?: (t: string) => void;
  placeholder?: string;
  onPress?: () => void;
  editable?: boolean;
  autoFocus?: boolean;
  variant?: "light" | "dark";
};

export default function SearchBar({
  value,
  onChangeText,
  placeholder = "Search salons, barbers…",
  onPress,
  editable = true,
  autoFocus,
  variant = "dark",
}: Props) {
  if (!editable) {
    return (
      <Pressable
        onPress={onPress}
        className={`flex-1 rounded-2xl flex-row items-center gap-3 px-4 py-3.5 border ${
          variant === "light" ? "bg-white/15 border-white/20" : "bg-gray-100 border-gray-100"
        }`}
      >
        <Ionicons name="search" size={16} color={variant === "light" ? "#BFDBFE" : "#9CA3AF"} />
        <Text className={`text-sm ${variant === "light" ? "text-blue-100/80" : "text-gray-400"}`}>
          {placeholder}
        </Text>
      </Pressable>
    );
  }

  return (
    <View className="flex-1 bg-gray-100 rounded-2xl flex-row items-center gap-3 px-4 py-3">
      <Ionicons name="search" size={16} color="#9CA3AF" />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        autoFocus={autoFocus}
        className="flex-1 text-sm text-gray-700 font-inter"
      />
      {!!value && (
        <Pressable onPress={() => onChangeText?.("")}>
          <Ionicons name="close" size={14} color="#9CA3AF" />
        </Pressable>
      )}
    </View>
  );
}
