import React from "react";
import { Pressable, ScrollView, Text } from "react-native";
import { CAL_DAYS } from "../constants/data";

type Props = {
  selected: number;
  onSelect: (day: number) => void;
};

export default function CalendarPicker({ selected, onSelect }: Props) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8 }}>
      {CAL_DAYS.map(({ d, w }) => {
        const active = selected === d;
        return (
          <Pressable
            key={d}
            onPress={() => onSelect(d)}
            className={`w-[52px] rounded-2xl py-3 items-center gap-1 border ${
              active ? "bg-primary-600 border-primary-600" : "bg-white border-gray-100"
            }`}
          >
            <Text className={`text-[10px] font-poppins-bold ${active ? "text-blue-200" : "text-gray-400"}`}>{w}</Text>
            <Text className={`text-[15px] font-poppins-bold ${active ? "text-white" : "text-gray-700"}`}>{d}</Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
