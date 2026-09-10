import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SalonCard from "../components/SalonCard";
import { Chip } from "../components/ui/Chip";
import SearchBar from "../components/ui/SearchBar";
import { useApp } from "../context/AppContext";
import { getSalons } from "../services/api";

const CHIPS = [
  "All",
  "Nearby",
  "Top Rated",
  "Open Now",
  "Premium",
  "Budget",
] as const;

export default function Search() {
  const insets = useSafeAreaInsets();
  const { isFavorite, toggleFavorite } = useApp();
  const [query, setQuery] = useState("");
  const [chip, setChip] = useState<(typeof CHIPS)[number]>("All");
  const [salons, setSalons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSalons()
      .then((data) => {
        console.log("SEARCH SALONS FROM API:", data);

        const formattedSalons = data.map((salon: any) => ({
          id: salon.id,
          name: salon.name,
          rating: Number(salon.rating),
          reviews: salon.reviews,

          // sementara dummy
          distance: "0.3 km",

          price: salon.starting_price,
          tag: salon.tag ?? "Popular",
          address: salon.address,

          hours: `${salon.opening_hour.slice(0, 5)} – ${salon.closing_hour.slice(0, 5)}`,

          open: Boolean(salon.is_open),

          image: salon.image,

          gallery: [],

          services: salon.services ?? [],

          about: salon.description ?? "",
        }));

        console.log("SEARCH SALONS FORMATTED:", formattedSalons);

        setSalons(formattedSalons);
      })
      .catch((error) => {
        console.log("SEARCH API ERROR:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();

    return salons.filter((s) => {
      const matchQ =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.address.toLowerCase().includes(q);

      const matchChip =
        chip === "All" ||
        (chip === "Open Now" && s.open) ||
        (chip === "Nearby" && parseFloat(s.distance) < 1) ||
        (chip === "Top Rated" && s.rating >= 4.8) ||
        (chip === "Premium" && s.price >= 80000) ||
        (chip === "Budget" && s.price < 70000);

      return matchQ && matchChip;
    });
  }, [salons, query, chip]);

  return (
    <View className="flex-1 bg-bg">
      <View
        className="bg-white px-5 pb-3 border-b border-gray-100"
        style={{ paddingTop: insets.top + 8 }}
      >
        <View className="flex-row items-center gap-2.5 mb-3">
          <Pressable
            onPress={() => router.back()}
            className="w-10 h-10 bg-gray-100 rounded-2xl items-center justify-center"
          >
            <Ionicons name="chevron-back" size={18} color="#374151" />
          </Pressable>
          <SearchBar
            value={query}
            onChangeText={setQuery}
            placeholder="Search salons, barbers, services…"
            autoFocus
          />
          <Pressable className="w-10 h-10 bg-primary-600 rounded-2xl items-center justify-center">
            <Ionicons name="options-outline" size={16} color="#fff" />
          </Pressable>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 8 }}
        >
          {CHIPS.map((c) => (
            <Chip
              key={c}
              label={c}
              active={c === chip}
              onPress={() => setChip(c)}
            />
          ))}
        </ScrollView>
      </View>

      <ScrollView
        className="flex-1 px-5 pt-4"
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        <Text className="text-xs text-gray-400 font-poppins-medium mb-4">
          {filtered.length} salon{filtered.length !== 1 ? "s" : ""}
          {query ? ` matching "${query}"` : " near you"}
        </Text>

        <View className="gap-3">
          {filtered.map((s) => (
            <SalonCard
              key={s.id}
              salon={s}
              variant="list"
              isFavorite={isFavorite(s.id)}
              onToggleFavorite={() => toggleFavorite(s.id)}
              onPress={() => router.push(`/salon/${s.id}`)}
            />
          ))}
          {filtered.length === 0 && (
            <View className="items-center py-16">
              <Ionicons name="search" size={32} color="#E5E7EB" />
              <Text className="font-poppins-semibold text-gray-500 text-sm mt-3">
                No results found
              </Text>
              <Text className="text-xs text-gray-400 mt-1">
                Try a different search or filter
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
