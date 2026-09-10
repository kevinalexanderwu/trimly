import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { router } from "expo-router";
import React, { useCallback, useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Button from "../../components/ui/Button";
import { getMeApi, logoutApi, updateProfileApi } from "../../services/api";

const MENU = [
  {
    icon: "notifications-outline",
    label: "Notifications",
    sub: "Booking reminders, offers",
  },
  {
    icon: "location-outline",
    label: "Saved Addresses",
    sub: "Home, Work · 2 locations",
  },
  { icon: "star-outline", label: "My Reviews", sub: "4 reviews written" },
  { icon: "gift-outline", label: "Trimly Rewards", sub: "240 pts · Gold tier" },
  { icon: "globe-outline", label: "Language", sub: "English (US)" },
  { icon: "book-outline", label: "Help & Support", sub: "FAQs, chat with us" },
] as const;

export default function Profile() {
  const insets = useSafeAreaInsets();
  const [user, setUser] = useState<any>(null);

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const loadProfile = useCallback(async () => {
    try {
      const token = await AsyncStorage.getItem("auth_token");

      if (!token) {
        console.log("NO AUTH TOKEN");
        return;
      }

      const result = await getMeApi(token);

      console.log("PROFILE:", result);

      const profile = result.user ?? result;

      setUser(profile);
      setName(profile.name ?? "");
      setEmail(profile.email ?? "");
      setPhone(profile.phone ?? "");
    } catch (error) {
      console.error("GET PROFILE ERROR:", error);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadProfile();
    }, [loadProfile]),
  );

  const handleLogout = async () => {
    try {
      const token = await AsyncStorage.getItem("auth_token");

      if (token) {
        await logoutApi(token);
      }

      await AsyncStorage.removeItem("auth_token");

      router.replace("/login");
    } catch (error) {
      console.error("LOGOUT ERROR:", error);

      // Tetap hapus token lokal walaupun API gagal
      await AsyncStorage.removeItem("auth_token");
      router.replace("/login");
    }
  };

  if (!user) {
    return (
      <View className="flex-1 bg-bg items-center justify-center">
        <Text className="text-gray-400">Loading profile...</Text>
      </View>
    );
  }

  const initials = user.name
    .split(" ")
    .map((n: string) => n[0])
    .join("");

  const save = async () => {
    try {
      const token = await AsyncStorage.getItem("auth_token");

      if (!token) {
        console.log("NO AUTH TOKEN");
        return;
      }

      const result = await updateProfileApi(token, {
        name,
        email,
        phone,
      });

      console.log("PROFILE UPDATED:", result);

      const updatedUser = result.user;

      setUser(updatedUser);
      setName(updatedUser.name ?? "");
      setEmail(updatedUser.email ?? "");
      setPhone(updatedUser.phone ?? "");

      setEditing(false);

      alert("Profile updated successfully!");
    } catch (error) {
      console.error("UPDATE PROFILE ERROR:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <View className="flex-1 bg-bg">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          className="bg-primary-600 px-5 pb-16 relative"
          style={{ paddingTop: insets.top + 12 }}
        >
          <View className="flex-row items-center justify-between mb-5">
            <Text className="text-white font-poppins-bold text-base">
              Profile
            </Text>
            <Pressable
              onPress={() => setEditing((e) => !e)}
              className="w-9 h-9 bg-blue-500/60 rounded-2xl items-center justify-center"
            >
              <Ionicons name="create-outline" size={16} color="#fff" />
            </Pressable>
          </View>

          <View className="flex-row items-center gap-4">
            <View className="relative">
              <View className="w-16 h-16 bg-primary-400 rounded-2xl items-center justify-center shadow-lg">
                <Text className="text-white text-xl font-poppins-bold">
                  {initials}
                </Text>
              </View>
              <View className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary-500 rounded-full border-2 border-primary-600 items-center justify-center">
                <Ionicons name="camera" size={11} color="#fff" />
              </View>
            </View>
            <View className="flex-1 min-w-0">
              <Text className="text-white font-poppins-bold text-lg">
                {user.name}
              </Text>
              <Text className="text-blue-200 text-xs mt-0.5 font-inter">
                {user.email}
              </Text>
              <View className="flex-row items-center gap-1.5 mt-2 bg-white/15 rounded-full px-2.5 py-1 self-start">
                <Ionicons name="star" size={10} color="#FBBF24" />
                <Text className="text-amber-300 text-[11px] font-poppins-bold">
                  Gold · 240 pts
                </Text>
              </View>
            </View>
          </View>
          <View className="absolute -bottom-6 left-0 right-0 h-12 bg-bg rounded-t-[32px]" />
        </View>

        <View className="px-5 pt-7 pb-6 gap-4">
          {/* Stats */}
          <View className="flex-row gap-3">
            {[
              { v: "12", l: "Bookings", c: "text-primary-600" },
              { v: "4", l: "Reviews", c: "text-amber-500" },
              { v: "3", l: "Saved", c: "text-red-500" },
            ].map(({ v, l, c }) => (
              <View
                key={l}
                className="flex-1 bg-white rounded-2xl p-3.5 items-center shadow-sm border border-gray-50"
              >
                <Text className={`text-2xl font-poppins-bold ${c}`}>{v}</Text>
                <Text className="text-[11px] text-gray-400 mt-0.5">{l}</Text>
              </View>
            ))}
          </View>

          {/* Edit form */}
          {editing && (
            <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-50 gap-3">
              <View className="flex-row items-center justify-between">
                <Text className="font-poppins-bold text-gray-800 text-sm">
                  Edit Profile
                </Text>
                <Text className="text-[10px] text-primary-600 font-poppins-semibold bg-blue-50 px-2 py-0.5 rounded-full overflow-hidden">
                  Editing
                </Text>
              </View>
              {[
                { l: "Full Name", v: name, set: setName },
                { l: "Email", v: email, set: setEmail },
                { l: "Phone", v: phone, set: setPhone },
              ].map(({ l, v, set }) => (
                <View key={l}>
                  <Text className="text-[10px] font-poppins-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    {l}
                  </Text>
                  <TextInput
                    value={v}
                    onChangeText={set}
                    className="bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-3 text-sm text-gray-800 font-inter"
                  />
                </View>
              ))}
              <Button label="Save Changes" onPress={save} />
            </View>
          )}

          {/* Menu */}
          <View className="bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden">
            {MENU.map(({ icon, label, sub }, i) => (
              <Pressable
                key={label}
                className={`flex-row items-center gap-3.5 px-4 py-4 ${i < MENU.length - 1 ? "border-b border-gray-50" : ""}`}
              >
                <View className="w-9 h-9 bg-blue-50 rounded-xl items-center justify-center">
                  <Ionicons name={icon as any} size={15} color="#2563EB" />
                </View>
                <View className="flex-1 min-w-0">
                  <Text className="text-sm font-poppins-semibold text-gray-800">
                    {label}
                  </Text>
                  <Text className="text-[11px] text-gray-400 mt-0.5">
                    {sub}
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={15} color="#D1D5DB" />
              </Pressable>
            ))}
          </View>

          <Pressable
            onPress={handleLogout}
            className="bg-white border border-red-100 rounded-2xl py-4 flex-row items-center justify-center gap-2 shadow-sm"
          >
            <Ionicons name="log-out-outline" size={16} color="#EF4444" />
            <Text className="text-red-500 font-poppins-bold text-sm">
              Sign Out
            </Text>
          </Pressable>

          <Text className="text-center text-[11px] text-gray-300 pb-2">
            Trimly v2.0.0 · © 2026 Trimly Inc.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
