import { AntDesign, Ionicons } from "@expo/vector-icons";
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
import { loginApi } from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !pass) {
      alert("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      const result = await loginApi({
        email,
        password: pass,
      });

      await AsyncStorage.setItem("auth_token", result.token);
      await AsyncStorage.setItem("user", JSON.stringify(result.user));

      console.log("LOGIN SUCCESS:", result);

      router.replace("/(tabs)");
    } catch (error) {
      console.error("LOGIN ERROR:", error);

      alert(error instanceof Error ? error.message : "Failed to login");
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
        {/* header with back button and title */}
        <View className="bg-primary-600 px-6 pt-14 pb-32">
          {/* tombol back */}
          <Pressable
            onPress={() => router.back()}
            className="w-9 h-9 bg-blue-500/60 rounded-full items-center justify-center mb-4"
          >
            <Ionicons name="chevron-back" size={18} color="#fff" />
          </Pressable>

          {/* logo */}
          <View className="items-center mb-6">
            <Image
              source={require("../assets/images/trimly-logo.png")}
              className="w-14 h-14"
              resizeMode="contain"
            />
          </View>
          <View className="items-center mb-2">
            <Text className="text-3xl font-poppins-bold text-white">
              Welcome back
            </Text>

            <Text className="text-[15px] text-blue-200 text-sm mt-1 font-inter">
              Sign in to continue
            </Text>
          </View>
        </View>
        <View
          className="flex-1 bg-bg rounded-t-[36px] px-6 pt-10 pb-8 gap-4"
          style={{ marginTop: -60 }}
        >
          <View>
            <Text className="text-[11px] font-poppins-bold text-gray-400 uppercase tracking-wider mb-2">
              Email
            </Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="user@gmail.com"
              autoCapitalize="none"
              keyboardType="email-address"
              className="bg-white border border-gray-100 rounded-2xl px-4 py-3.5 text-sm text-gray-800 font-inter shadow-sm"
            />
          </View>
          <View>
            <Text className="text-[11px] font-poppins-bold text-gray-400 uppercase tracking-wider mb-2">
              Password
            </Text>
            <TextInput
              value={pass}
              onChangeText={setPass}
              secureTextEntry
              placeholder="••••••••"
              placeholderTextColor="#D1D5DB"
              className="bg-white border border-gray-100 rounded-2xl px-4 py-3.5 text-sm text-gray-800 font-inter shadow-sm"
            />
          </View>
          <Pressable className="self-end">
            <Text className="text-primary-600 text-xs font-poppins-semibold">
              Forgot password?
            </Text>
          </Pressable>

          <Button
            label={loading ? "Signing in..." : "Sign In"}
            onPress={handleLogin}
          />

          <View className="flex-row items-center gap-3">
            <View className="flex-1 h-px bg-gray-200" />
            <Text className="text-[11px] text-gray-400 font-poppins-medium">
              or
            </Text>
            <View className="flex-1 h-px bg-gray-200" />
          </View>
          {/* icon for logi google and apple */}
          <View className="flex-row gap-3">
            {[
              {
                label: "Google",
                icon: <AntDesign name="google" size={18} color="#374151" />,
              },
              {
                label: "Apple",
                icon: <Ionicons name="logo-apple" size={18} color="#111827" />,
              },
            ].map((p) => (
              <Pressable
                key={p.label}
                className="flex-1 bg-white border border-gray-200 rounded-2xl py-3 flex-row items-center justify-center gap-2 shadow-sm"
              >
                {p.icon}

                <Text className="text-gray-700 text-sm font-poppins-medium">
                  {p.label}
                </Text>
              </Pressable>
            ))}
          </View>

          <Text className="text-center text-xs text-gray-500 mt-1 font-inter">
            New to Trimly?{" "}
            <Text
              className="text-primary-600 font-poppins-bold"
              onPress={() => router.push("/register")}
            >
              Create account
            </Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
