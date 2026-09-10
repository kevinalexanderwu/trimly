import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import Button from "../components/ui/Button";
import { registerApi } from "../services/api";

const FIELDS = [
  {
    key: "name",
    label: "Full Name",
    type: "default" as const,
    secure: false,
  },
  {
    key: "email",
    label: "Email",
    placeholder: "user@gmail.com",
    type: "email-address" as const,
    secure: false,
  },
  {
    key: "phone",
    label: "Phone Number",
    placeholder: "+62 8000-0000",
    type: "phone-pad" as const,
    secure: false,
  },
  {
    key: "password",
    label: "Password",
    placeholder: "Min 8 characters",
    type: "default" as const,
    secure: true,
  },
  {
    key: "confirm",
    label: "Confirm Password",
    placeholder: "Repeat password",
    type: "default" as const,
    secure: true,
  },
];

export default function Register() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!values.name || !values.email || !values.password) {
      alert("Please fill in all required fields.");
      return;
    }

    if (values.password !== values.confirm) {
      alert("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const result = await registerApi({
        name: values.name,
        email: values.email,
        phone: values.phone ?? "",
        password: values.password,
        password_confirmation: values.confirm,
      });

      await AsyncStorage.setItem("auth_token", result.token);
      await AsyncStorage.setItem("user", JSON.stringify(result.user));

      console.log("REGISTER SUCCESS:", result);

      router.replace("/(tabs)");
    } catch (error) {
      console.error("REGISTER ERROR:", error);

      alert(
        error instanceof Error ? error.message : "Failed to create account",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 bg-bg"
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="bg-primary-600 px-6 pt-14 pb-32">
          {/* Back Button */}
          <Pressable
            onPress={() => router.back()}
            className="w-9 h-9 bg-blue-500/60 rounded-full items-center justify-center mb-4"
          >
            <Ionicons name="chevron-back" size={18} color="#fff" />
          </Pressable>

          {/* Logo */}
          <View className="items-center mb-6">
            <Image
              source={require("../assets/images/trimly-logo.png")}
              className="w-20 h-20"
              resizeMode="contain"
            />
          </View>

          {/* Title */}
          <View className="items-center">
            <Text className="text-3xl font-poppins-bold text-white">
              Create account
            </Text>

            <Text className="text-[15px] text-blue-200 mt-1 font-inter">
              Join Trimly for free
            </Text>
          </View>
        </View>

        <View
          className="flex-1 bg-bg rounded-t-[36px] px-6 pt-10 pb-8 gap-4"
          style={{ marginTop: -60 }}
        >
          {FIELDS.map((f) => (
            <View key={f.key}>
              <Text className="text-[11px] font-poppins-bold text-gray-400 uppercase tracking-wider mb-2">
                {f.label}
              </Text>
              <TextInput
                value={values[f.key] ?? ""}
                onChangeText={(t) => setValues((v) => ({ ...v, [f.key]: t }))}
                placeholder={f.placeholder}
                placeholderTextColor="#D1D5DB"
                secureTextEntry={f.secure}
                keyboardType={f.type}
                autoCapitalize={f.key === "email" ? "none" : "words"}
                className="bg-white border border-gray-100 rounded-2xl px-4 py-3.5 text-sm text-gray-800 font-inter shadow-sm"
              />
            </View>
          ))}

          <Text className="text-[11px] text-gray-400 -mt-1 font-inter">
            By registering you agree to our{" "}
            <Text className="text-primary-600 font-poppins-semibold">
              Terms
            </Text>{" "}
            and{" "}
            <Text className="text-primary-600 font-poppins-semibold">
              Privacy Policy
            </Text>
            .
          </Text>

          <View className="mt-2">
            <Button
              label={loading ? "Creating..." : "Create Account"}
              onPress={handleRegister}
            />
          </View>

          <Text className="text-center text-xs text-gray-500 font-inter">
            Already have an account?{" "}
            <Text
              className="text-primary-600 font-poppins-bold"
              onPress={() => router.replace("/login")}
            >
              Sign in
            </Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
