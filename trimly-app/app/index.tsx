import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { StatusBar, Text, View } from "react-native";

export default function Splash() {
  useEffect(() => {
    const t = setTimeout(() => router.replace("/onboarding"), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <View className="flex-1 bg-primary-600 items-center justify-center">
      <StatusBar barStyle="light-content" backgroundColor="#2563EB" />

      <View className="items-center justify-center mb-6">
        <View
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: 210,
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.05)",
          }}
        />

        <View
          style={{
            position: "absolute",
            width: 320,
            height: 320,
            borderRadius: 160,
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.07)",
          }}
        />

        <View
          style={{
            position: "absolute",
            width: 220,
            height: 220,
            borderRadius: 110,
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.10)",
          }}
        />

        <View
          style={{
            position: "absolute",
            width: 140,
            height: 140,
            borderRadius: 70,
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.12)",
          }}
        />

        <View className="w-24 h-24 bg-white rounded-[28px] items-center justify-center shadow-2xl">
          <Ionicons name="cut" size={40} color="#2563EB" />
        </View>
      </View>

      <Text className="text-4xl font-poppins-bold text-white tracking-tight">
        Trimly
      </Text>
      <Text className="text-blue-200 text-sm mt-1.5 font-poppins-medium">
        Your perfect style, one tap away.
      </Text>

      {/* <View className="absolute bottom-16 flex-row gap-1.5">
        <View className="w-1.5 h-1.5 bg-white rounded-full opacity-70" />
        <View className="w-1.5 h-1.5 bg-white rounded-full opacity-40" />
        <View className="w-1.5 h-1.5 bg-white rounded-full opacity-20" />
      </View> */}
    </View>
  );
}
