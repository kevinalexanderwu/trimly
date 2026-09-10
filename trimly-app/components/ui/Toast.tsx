import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import { Animated, Text, View } from "react-native";
import { useApp } from "../../context/AppContext";

export default function Toast() {
  const { toast } = useApp();
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (toast) {
      Animated.spring(opacity, { toValue: 1, useNativeDriver: true, speed: 16 }).start();
    } else {
      opacity.setValue(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toast]);

  if (!toast) return null;

  return (
    <View pointerEvents="none" className="absolute bottom-24 left-4 right-4 items-center z-50">
      <Animated.View
        style={{ opacity }}
        className={`${
          toast.type === "success" ? "bg-gray-900" : "bg-red-600"
        } px-4 py-3 rounded-2xl flex-row items-center gap-2.5 max-w-[280px] shadow-lg`}
      >
        <Ionicons
          name={toast.type === "success" ? "checkmark-circle" : "alert-circle"}
          size={16}
          color={toast.type === "success" ? "#34D399" : "#fff"}
        />
        <Text className="text-white text-[13px] font-poppins-medium flex-shrink">{toast.msg}</Text>
      </Animated.View>
    </View>
  );
}
