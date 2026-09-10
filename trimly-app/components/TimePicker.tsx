import React from "react";
import { Pressable, Text, View } from "react-native";
import { TAKEN_TIMES, TIMES } from "../constants/data";

type Props = {
  selected: string;
  onSelect: (t: string) => void;
};

export default function TimePicker({ selected, onSelect }: Props) {
  return (
    <View>
      <View className="flex-row flex-wrap" style={{ gap: 8 }}>
        {TIMES.map((t) => {
          const taken = TAKEN_TIMES.has(t);
          const active = selected === t;
          return (
            <Pressable
              key={t}
              disabled={taken}
              onPress={() => onSelect(t)}
              style={{ width: "23%" }}
              className={`py-2.5 rounded-xl items-center border ${
                taken
                  ? "bg-gray-100 border-transparent"
                  : active
                  ? "bg-primary-600 border-primary-600"
                  : "bg-white border-gray-100"
              }`}
            >
              <Text
                className={`text-xs font-poppins-bold ${
                  taken ? "text-gray-300" : active ? "text-white" : "text-gray-700"
                }`}
              >
                {t}
              </Text>
            </Pressable>
          );
        })}
      </View>
      <View className="flex-row gap-4 mt-3">
        {[
          { c: "bg-primary-600", l: "Selected" },
          { c: "bg-white border border-gray-200", l: "Available" },
          { c: "bg-gray-100", l: "Booked" },
        ].map(({ c, l }) => (
          <View key={l} className="flex-row items-center gap-1.5">
            <View className={`w-3 h-3 rounded-sm ${c}`} />
            <Text className="text-[10px] text-gray-400">{l}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
