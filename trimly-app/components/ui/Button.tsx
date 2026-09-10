import React from "react";
import { ActivityIndicator, Pressable, Text } from "react-native";

type Props = {
  label: string;
  onPress?: () => void;
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
};

export default function Button({
  label,
  onPress,
  variant = "primary",
  disabled,
  loading,
  icon,
  fullWidth = true,
  size = "md",
}: Props) {
  const sizeCls = size === "sm" ? "py-2.5 px-4" : size === "lg" ? "py-4 px-6" : "py-3.5 px-5";
  const textSizeCls = size === "sm" ? "text-xs" : "text-sm";

  const variantCls: Record<string, string> = {
    primary: "bg-primary-600",
    secondary: "bg-secondary-500",
    outline: "bg-white border border-gray-200",
    danger: "bg-red-500",
    ghost: "bg-transparent",
  };

  const textCls: Record<string, string> = {
    primary: "text-white",
    secondary: "text-white",
    outline: "text-gray-700",
    danger: "text-white",
    ghost: "text-primary-600",
  };

  const isDisabled = disabled || loading;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      className={`${fullWidth ? "w-full" : ""} ${sizeCls} rounded-2xl flex-row items-center justify-center gap-2
        ${variantCls[variant]} ${isDisabled ? "opacity-40" : ""}`}
      style={({ pressed }) => ({ transform: [{ scale: pressed && !isDisabled ? 0.97 : 1 }] })}
    >
      {loading ? (
        <ActivityIndicator color={variant === "outline" || variant === "ghost" ? "#2563EB" : "#fff"} />
      ) : (
        <>
          {icon}
          <Text className={`font-poppins-semibold ${textSizeCls} ${textCls[variant]}`}>{label}</Text>
        </>
      )}
    </Pressable>
  );
}
