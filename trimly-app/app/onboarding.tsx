import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Image, Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hexToRgba } from "../utils/color";
import { formatIDR } from "../utils/currency";

const DURATION = 4500;

const SLIDES = [
  {
    img: "https://images.unsplash.com/photo-1633681926035-ec1ac984418a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    accent: "#2563EB",
    label: "DISCOVER",
    headline: ["Your Best Look", "Starts Here.", "Just One Tap."],
    sub: "Discover the best salons near you, ranked by distance, ratings, and availability.",
    preview: "salon" as const,
  },
  {
    img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    accent: "#2563EB",
    label: "BOOKING",
    headline: ["Choose", "Your Stylist.", "Book in Seconds."],
    sub: "Pick your service, choose your preferred stylist, and book your appointment in just a few taps.",
    preview: "booking" as const,
  },
  {
    img: "https://images.unsplash.com/photo-1695527081874-b674c46f40fb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    accent: "#2563EB",
    label: "REWARDS",
    headline: ["Look Great.", "Feel Great.", "Every Time."],
    sub: "Earn Trimly Rewards with every visit and enjoy exclusive perks as you move up.",
    preview: "rewards" as const,
  },
];

function PreviewCard({ type }: { type: (typeof SLIDES)[number]["preview"] }) {
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    anim.setValue(0);
    Animated.spring(anim, {
      toValue: 1,
      useNativeDriver: true,
      speed: 14,
      bounciness: 6,
    }).start();
  }, [type, anim]);

  const style = {
    opacity: anim,
    transform: [
      {
        translateX: anim.interpolate({
          inputRange: [0, 1],
          outputRange: [40, 0],
        }),
      },
      {
        rotate: anim.interpolate({
          inputRange: [0, 1],
          outputRange: [
            "10deg",
            type === "salon" ? "4deg" : type === "booking" ? "-3deg" : "3deg",
          ],
        }),
      },
    ],
  };

  if (type === "salon") {
    return (
      <Animated.View style={style}>
        <View className="w-44 bg-white rounded-2xl shadow-2xl overflow-hidden">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1536520002442-39764a41e987?w=400&h=200&fit=crop&auto=format",
            }}
            className="w-full h-20 bg-blue-100"
            resizeMode="cover"
          />
          <View className="p-2.5">
            <Text
              className="font-poppins-bold text-gray-800 text-[11px]"
              numberOfLines={1}
            >
              Amaya Beauty & Wellness Salon
            </Text>
            <View className="flex-row items-center gap-0.5 mt-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Ionicons key={i} name="star" size={8} color="#FBBF24" />
              ))}
              <Text className="text-[9px] text-gray-400 ml-0.5">4.9</Text>
            </View>
            <View className="flex-row items-center justify-between mt-1.5">
              <View className="flex-row items-center gap-0.5">
                <Ionicons name="location" size={8} color="#9CA3AF" />
                <Text className="text-[9px] text-gray-400">0.3 km</Text>
              </View>
              <Text className="text-[9px] font-poppins-bold text-primary-600">
                start {formatIDR(45000)}
              </Text>
            </View>
          </View>
        </View>
      </Animated.View>
    );
  }

  if (type === "booking") {
    return (
      <Animated.View style={style}>
        <View className="w-40 bg-white rounded-2xl shadow-2xl p-3">
          <Text className="text-[10px] font-poppins-bold text-gray-500 uppercase tracking-wider mb-2">
            Your Booking
          </Text>
          <View className="flex-row items-center gap-2 mb-2">
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=200&h=200&fit=crop&auto=format",
              }}
              className="w-9 h-9 rounded-xl bg-purple-100"
              resizeMode="cover"
            />
            <View>
              <Text className="text-[11px] font-poppins-bold text-gray-800">
                Maya Putri
              </Text>
              <Text className="text-[9px] text-gray-400">Hair Styling</Text>
            </View>
          </View>
          {[
            { l: "Date", v: "Sat, 19 Jul" },
            { l: "Time", v: "10:30" },
          ].map(({ l, v }) => (
            <View
              key={l}
              className="flex-row items-center justify-between py-1 border-t border-gray-50"
            >
              <Text className="text-[9px] text-gray-400">{l}</Text>
              <Text className="text-[9px] font-poppins-bold text-gray-700">
                {v}
              </Text>
            </View>
          ))}
          <View className="mt-2 bg-purple-600 rounded-xl py-1.5 items-center">
            <Text className="text-white text-[10px] font-poppins-bold">
              Confirmed ✓
            </Text>
          </View>
        </View>
      </Animated.View>
    );
  }

  return (
    <Animated.View style={style}>
      <View className="w-40 bg-white rounded-2xl shadow-2xl p-3">
        <View className="flex-row items-center justify-between mb-2">
          <Text className="text-[10px] font-poppins-bold text-gray-500">
            Your Reward
          </Text>
          <View className="w-5 h-5 bg-amber-400 rounded-full items-center justify-center">
            <Ionicons name="star" size={10} color="#fff" />
          </View>
        </View>
        <View className="items-center py-2">
          <Text className="text-2xl font-poppins-bold text-amber-500">240</Text>
          <Text className="text-[9px] text-gray-400 font-poppins-medium">
            Trimly Points
          </Text>
        </View>
        <View className="h-2 bg-gray-100 rounded-full overflow-hidden mb-1">
          <View
            className="h-full bg-amber-400 rounded-full"
            style={{ width: "62%" }}
          />
        </View>
        <View className="flex-row justify-between">
          <Text className="text-[8px] text-gray-400">Gold</Text>
          <Text className="text-[8px] text-gray-400">148 poin to Platinum</Text>
        </View>
        <View className="mt-2 bg-amber-50 border border-amber-200 rounded-xl py-1.5 flex-row items-center justify-center gap-1">
          <Ionicons name="gift-outline" size={9} color="#D97706" />
          <Text className="text-amber-700 text-[9px] font-poppins-bold">
            Claim Free Cut
          </Text>
        </View>
      </View>
    </Animated.View>
  );
}

export default function Onboarding() {
  const insets = useSafeAreaInsets();
  const [page, setPage] = useState(0);
  const [progress, setProgress] = useState(0);
  const pausedRef = useRef(false);
  const [, forceRerender] = useState(0);

  const slide = SLIDES[page];
  const isLast = page === SLIDES.length - 1;

  useEffect(() => {
    let raf = 0;
    let start = Date.now();
    setProgress(0);

    const tick = () => {
      if (pausedRef.current) {
        start = Date.now() - progress * DURATION;
        raf = requestAnimationFrame(tick);
        return;
      }
      const elapsed = Date.now() - start;
      const p = Math.min(elapsed / DURATION, 1);
      setProgress(p);
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else if (page < SLIDES.length - 1) {
        setPage((pg) => pg + 1);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const goNext = () => {
    if (page < SLIDES.length - 1) setPage((p) => p + 1);
    else router.replace("/login");
  };
  const goPrev = () => {
    if (page > 0) setPage((p) => p - 1);
  };
  const setPaused = (v: boolean) => {
    pausedRef.current = v;
    forceRerender((n) => n + 1);
  };

  return (
    <View className="flex-1 bg-gray-950">
      {/* Full-bleed background image */}
      <View className="absolute inset-0">
        <Image
          source={{ uri: slide.img }}
          className="w-full h-full"
          resizeMode="cover"
        />
        <LinearGradient
          colors={[
            "rgba(0,0,0,0.25)",
            "rgba(0,0,0,0.15)",
            "rgba(0,0,0,0.7)",
            "rgba(0,0,0,0.95)",
          ]}
          locations={[0, 0.35, 0.65, 1]}
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        />
        <View
          className="absolute inset-0"
          style={{ backgroundColor: hexToRgba(slide.accent, 0.16) }}
        />
      </View>

      {/* Story progress bars */}
      <View
        className="absolute left-4 right-4 flex-row gap-1.5"
        style={{ top: insets.top + 10 }}
      >
        {SLIDES.map((_, i) => (
          <View
            key={i}
            className="flex-1 h-[3px] rounded-full bg-white/25 overflow-hidden"
          >
            <View
              className="h-full rounded-full bg-white"
              style={{
                width: `${(i < page ? 1 : i === page ? progress : 0) * 100}%`,
              }}
            />
          </View>
        ))}
      </View>

      {/* Wordmark */}
      <View
        className="absolute flex-row items-center gap-2"
        style={{ top: insets.top + 24, left: 20 }}
      >
        <View className="w-7 h-7 bg-white rounded-lg items-center justify-center">
          <Ionicons name="cut" size={14} color="#2563EB" />
        </View>
        <Text className="text-white font-poppins-bold text-sm tracking-wide">
          Trimly
        </Text>
      </View>

      {/* Skip */}
      <Pressable
        onPress={() => router.replace("/login")}
        className="absolute bg-white/10 px-3 py-1.5 rounded-full"
        style={{ top: insets.top + 22, right: 20 }}
      >
        <Text className="text-white/70 text-xs font-poppins-semibold">
          Skip
        </Text>
      </Pressable>

      {/* Tap zones */}
      <View className="absolute inset-0 flex-row">
        <Pressable
          className="flex-1"
          onPress={goPrev}
          onPressIn={() => setPaused(true)}
          onPressOut={() => setPaused(false)}
        />
        <Pressable
          className="flex-1"
          onPress={goNext}
          onPressIn={() => setPaused(true)}
          onPressOut={() => setPaused(false)}
        />
      </View>

      {/* Floating preview card */}
      <View
        className="absolute right-5"
        style={{ top: insets.top + 90 }}
        pointerEvents="none"
      >
        <PreviewCard type={slide.preview} />
      </View>

      {/* Bottom content */}
      <View
        className="absolute bottom-0 left-0 right-0 px-6"
        style={{ paddingBottom: insets.bottom + 28 }}
      >
        <View
          className="self-start px-3 py-1.5 rounded-full border border-white/30 mb-4"
          style={{ backgroundColor: hexToRgba(slide.accent, 0.33) }}
        >
          <Text className="text-[10px] font-poppins-bold tracking-[2px] text-white/85">
            {slide.label}
          </Text>
        </View>

        <View className="mb-4">
          {slide.headline.map((line, i) => (
            <Text
              key={`${page}-${i}`}
              className="text-white font-poppins-bold leading-[38px]"
              style={{
                fontSize: 32,
                opacity: i === 1 ? 0.88 : 1,
                letterSpacing: -0.5,
              }}
            >
              {line}
            </Text>
          ))}
        </View>

        <Text
          className="text-white/60 text-[13px] leading-relaxed mb-7 font-inter"
          style={{ maxWidth: 290 }}
        >
          {slide.sub}
        </Text>

        {/* Dots */}
        <View className="flex-row items-center gap-2 mb-5">
          {SLIDES.map((_, i) => (
            <View
              key={i}
              className="h-1.5 rounded-full bg-white"
              style={{
                width: i === page ? 20 : 6,
                opacity: i === page ? 1 : 0.35,
              }}
            />
          ))}
        </View>

        {/* CTA */}
        {!isLast ? (
          <Pressable
            onPress={goNext}
            style={{ backgroundColor: slide.accent }}
            className="w-full py-4 rounded-2xl flex-row items-center justify-center gap-2"
          >
            <Text className="text-white font-poppins-bold text-sm">
              Continue
            </Text>
            <Ionicons name="arrow-forward" size={16} color="#fff" />
          </Pressable>
        ) : (
          <View className="gap-3">
            <Pressable
              onPress={() => router.replace("/register")}
              style={{ backgroundColor: slide.accent }}
              className="w-full py-4 rounded-2xl flex-row items-center justify-center gap-2"
            >
              <Text className="text-white font-poppins-bold text-sm">
                Create Free Account
              </Text>
              <Ionicons name="arrow-forward" size={16} color="#fff" />
            </Pressable>
            <Pressable
              onPress={() => router.replace("/login")}
              className="w-full py-3.5 rounded-2xl border border-white/20 items-center"
            >
              <Text className="text-white/70 font-poppins-semibold text-sm">
                I already have an account
              </Text>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
}
