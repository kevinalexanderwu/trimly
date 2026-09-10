import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BarberCard from "../../components/BarberCard";
import SalonCard from "../../components/SalonCard";
import SearchBar from "../../components/ui/SearchBar";
import SectionHeader from "../../components/ui/SectionHeader";
import { BARBERS, CATEGORIES } from "../../constants/data";
import { useApp } from "../../context/AppContext";
import { getSalons } from "../../services/api";

export default function Home() {
  const insets = useSafeAreaInsets();
  const { isFavorite, toggleFavorite, user } = useApp();

  const [salons, setSalons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("HOME: mulai ambil data salon...");

    getSalons()
      .then((data) => {
        console.log("HOME API DATA:", data);
        console.log("HOME API JUMLAH:", data.length);

        const formattedSalons = data.map((salon: any) => ({
          id: salon.id,
          name: salon.name,
          rating: Number(salon.rating),
          reviews: salon.reviews,
          distance: "0.3 km",
          price: Number(salon.starting_price),
          tag: salon.tag ?? "Popular",
          address: salon.address,
          hours: `${salon.opening_hour.slice(0, 5)} – ${salon.closing_hour.slice(0, 5)}`,
          open: Boolean(salon.is_open),
          image: salon.image,
          gallery: [],
          services: salon.services ?? [],
          about: salon.description ?? "",
        }));

        console.log("HOME FORMATTED:", formattedSalons);
        console.log("HOME FORMATTED JUMLAH:", formattedSalons.length);

        setSalons(formattedSalons);
      })
      .catch((error) => {
        console.error("HOME API ERROR:", error);
      })
      .finally(() => {
        console.log("HOME API SELESAI");
        setLoading(false);
      });
  }, []);

  return (
    <View className="flex-1 bg-bg">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Blue header */}
        <View
          className="bg-primary-600 px-5 pb-16"
          style={{ paddingTop: insets.top + 12 }}
        >
          <View className="flex-row items-center justify-between mb-4">
            <View>
              <Text className="text-blue-200 text-xs font-poppins-medium">
                Good morning 👋
              </Text>
              <Text className="text-white text-lg font-poppins-bold">
                {user.name}
              </Text>
            </View>
            <View className="flex-row items-center gap-2">
              <Pressable className="w-10 h-10 bg-white/15 rounded-2xl items-center justify-center relative">
                <Ionicons name="notifications-outline" size={18} color="#fff" />
                <View className="absolute top-2 right-2 w-2 h-2 bg-secondary-500 rounded-full" />
              </Pressable>
              <View className="w-10 h-10 bg-blue-400 rounded-2xl items-center justify-center">
                <Text className="text-white font-poppins-bold text-sm">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </Text>
              </View>
            </View>
          </View>

          <Pressable className="flex-row items-center gap-1.5 mb-3">
            <Ionicons name="location-outline" size={13} color="#93C5FD" />
            <Text className="text-blue-200 text-xs font-poppins-medium">
              Bandung, Indonesia
            </Text>
            <Ionicons name="chevron-down" size={12} color="#93C5FD" />
          </Pressable>

          <View className="flex-row gap-2">
            <SearchBar
              editable={false}
              onPress={() => router.push("/search")}
              variant="light"
            />
            <Pressable className="w-[52px] h-[52px] bg-secondary-500 rounded-2xl items-center justify-center shadow-lg">
              <Ionicons name="options-outline" size={18} color="#fff" />
            </Pressable>
          </View>
        </View>

        <View
          className="bg-bg rounded-t-[36px] px-5 pt-7 pb-4 gap-6 relative"
          style={{ marginTop: -40 }}
        >
          {/* Categories */}
          <View>
            <SectionHeader title="Categories" />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 12 }}
            >
              {CATEGORIES.map((c) => (
                <Pressable key={c.label} className="items-center gap-2">
                  <View
                    className="w-14 h-14 rounded-2xl items-center justify-center shadow-sm"
                    style={{ backgroundColor: c.color }}
                  >
                    <MaterialCommunityIcons
                      name={c.icon as any}
                      size={22}
                      color={c.fg}
                    />
                  </View>

                  <Text className="text-[11px] font-poppins-medium text-gray-600">
                    {c.label}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>

          {/* Nearby */}
          <View>
            <SectionHeader
              title="Nearby Salons"
              onSeeAll={() => router.push("/search")}
            />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 12 }}
            >
              {salons.map((s) => (
                <SalonCard
                  key={s.id}
                  salon={s}
                  isFavorite={isFavorite(s.id)}
                  onToggleFavorite={() => toggleFavorite(s.id)}
                  onPress={() => router.push(`/salon/${s.id}`)}
                />
              ))}
            </ScrollView>
          </View>

          {/* Popular */}
          <View>
            <SectionHeader
              title="Most Popular"
              onSeeAll={() => router.push("/search")}
            />
            <View className="gap-3">
              {salons.slice(0, 3).map((s) => (
                <SalonCard
                  key={s.id}
                  salon={s}
                  variant="list"
                  isFavorite={isFavorite(s.id)}
                  onToggleFavorite={() => toggleFavorite(s.id)}
                  onPress={() => router.push(`/salon/${s.id}`)}
                />
              ))}
            </View>
          </View>

          {/* Top barbers */}
          <View>
            <SectionHeader title="Top Barbers" />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 12 }}
            >
              {BARBERS.map((b) => (
                <BarberCard
                  key={b.id}
                  barber={b}
                  onPress={() => router.push(`/barber/${b.id}`)}
                />
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
