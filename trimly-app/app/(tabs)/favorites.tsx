import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { router } from "expo-router";
import React, { useCallback, useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Tag } from "../../components/ui/Chip";
import RatingStars from "../../components/ui/RatingStars";
import { getFavoritesApi, removeFavoriteApi } from "../../services/api";

export default function Favorites() {
  const insets = useSafeAreaInsets();

  const [favorites, setFavorites] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadFavorites = useCallback(async () => {
    try {
      setLoading(true);

      const token = await AsyncStorage.getItem("auth_token");

      if (!token) {
        console.log("NO AUTH TOKEN");
        return;
      }

      const result = await getFavoritesApi(token);

      console.log("FAVORITES:", result);

      setFavorites(result);
    } catch (error) {
      console.error("GET FAVORITES ERROR:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [loadFavorites]),
  );

  const handleRemoveFavorite = async (salonId: number) => {
    try {
      const token = await AsyncStorage.getItem("auth_token");

      if (!token) return;

      await removeFavoriteApi(token, salonId);

      setFavorites((current) =>
        current.filter((favorite) => favorite.salon_id !== salonId),
      );
    } catch (error) {
      console.error("REMOVE FAVORITE ERROR:", error);
    }
  };

  return (
    <View className="flex-1 bg-bg">
      <View
        className="bg-white px-5 pb-4 border-b border-gray-100"
        style={{ paddingTop: insets.top + 12 }}
      >
        <Text className="font-poppins-bold text-gray-900 text-base">
          Saved Salons
        </Text>

        <Text className="text-xs text-gray-400 mt-0.5 font-inter">
          {favorites.length} saved location
          {favorites.length !== 1 ? "s" : ""}
        </Text>
      </View>

      <ScrollView
        className="flex-1 px-5 pt-4"
        contentContainerStyle={{
          paddingBottom: 24,
          gap: 16,
        }}
      >
        {loading ? (
          <View className="items-center py-20">
            <Text className="text-gray-400 text-sm">Loading favorites...</Text>
          </View>
        ) : favorites.length === 0 ? (
          <View className="items-center py-20">
            <Ionicons name="heart-outline" size={40} color="#E5E7EB" />

            <Text className="font-poppins-semibold text-gray-500 text-sm mt-4">
              No saved salons yet
            </Text>

            <Text className="text-xs text-gray-400 mt-1 font-inter">
              Tap ♥ on any salon card to save it here
            </Text>

            <Pressable
              onPress={() => router.push("/(tabs)")}
              className="mt-5 bg-primary-600 px-5 py-2.5 rounded-xl"
            >
              <Text className="text-white text-xs font-poppins-bold">
                Explore Salons
              </Text>
            </Pressable>
          </View>
        ) : (
          favorites.map((favorite) => {
            const salon = favorite.salon;

            return (
              <Pressable
                key={favorite.id}
                onPress={() => router.push(`/salon/${salon.id}`)}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-50"
              >
                <View className="relative h-40">
                  <Image
                    source={{ uri: salon.image }}
                    className="w-full h-full bg-blue-100"
                    resizeMode="cover"
                  />

                  <Pressable
                    onPress={() => handleRemoveFavorite(salon.id)}
                    className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full items-center justify-center shadow-lg"
                  >
                    <Ionicons name="heart" size={17} color="#EF4444" />
                  </Pressable>

                  {salon.tag && (
                    <View className="absolute bottom-3 left-3">
                      <Tag
                        label={salon.tag}
                        color={
                          salon.tag === "Trending"
                            ? "blue"
                            : salon.tag === "Top Rated"
                              ? "purple"
                              : "amber"
                        }
                      />
                    </View>
                  )}
                </View>

                <View className="p-4">
                  <View className="flex-row items-start justify-between">
                    <View className="flex-1 min-w-0">
                      <Text className="font-poppins-bold text-gray-800 text-sm">
                        {salon.name}
                      </Text>

                      <View className="flex-row items-center gap-1.5 mt-1">
                        <RatingStars value={Number(salon.rating)} size={11} />

                        <Text className="text-xs text-gray-400">
                          ({salon.reviews})
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View className="flex-row items-center gap-4 mt-2.5">
                    <View className="flex-row items-center gap-1">
                      <Ionicons
                        name="location-outline"
                        size={11}
                        color="#9CA3AF"
                      />

                      <Text className="text-xs text-gray-400">
                        {salon.area ?? salon.city}
                      </Text>
                    </View>

                    <View className="flex-row items-center gap-1">
                      <Ionicons
                        name="time-outline"
                        size={11}
                        color={salon.is_open ? "#22C55E" : "#9CA3AF"}
                      />

                      <Text
                        className={`text-xs font-poppins-medium ${
                          salon.is_open ? "text-green-500" : "text-gray-400"
                        }`}
                      >
                        {salon.is_open ? "Open now" : "Closed"}
                      </Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            );
          })
        )}
      </ScrollView>
    </View>
  );
}
