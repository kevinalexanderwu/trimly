import React from "react";
import { Pressable, Text, View } from "react-native";
import { TAKEN_TIMES, TIMES } from "../constants/data";

type Props = {
  selected: string;
  onSelect: (t: string) => void;
  openingTime?: string;
  closingTime?: string;
};

export default function TimePicker({
  selected,
  onSelect,
  openingTime,
  closingTime,
}: Props) {
  const getMinutes = (time: string) => {
    const matches = time.match(/\d{1,2}:\d{2}/g);

    if (!matches || matches.length === 0) {
      return 0;
    }

    const lastTime = matches[matches.length - 1];
    const [hours, minutes] = lastTime.split(":").map(Number);

    return hours * 60 + minutes;
  };

  const firstBookingTime = openingTime
    ? getMinutes(openingTime)
    : 9 * 60;

  const lastBookingTime = closingTime
    ? getMinutes(closingTime) - 60
    : 16 * 60;

  const availableTimes = TIMES.filter((time) => {
    const minutes = getMinutes(time);

    return minutes >= firstBookingTime && minutes <= lastBookingTime;
  });

  return (
    <View>
      <View className="flex-row flex-wrap" style={{ gap: 8 }}>
        {availableTimes.map((t) => {
          const active = selected === t;

          return (
            <Pressable
              key={t}
              onPress={() => onSelect(t)}
              style={{ width: "23%" }}
              className={`py-2.5 rounded-xl items-center border ${
                active
                  ? "bg-primary-600 border-primary-600"
                  : "bg-white border-gray-100"
              }`}
            >
              <Text
                className={`text-xs font-poppins-bold ${
                  active ? "text-white" : "text-gray-700"
                }`}
              >
                {t}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <View className="flex-row gap-4 mt-3">
        <View className="flex-row items-center gap-1.5">
          <View className="w-3 h-3 rounded-sm bg-primary-600" />
          <Text className="text-[10px] text-gray-400">Selected</Text>
        </View>

        <View className="flex-row items-center gap-1.5">
          <View className="w-3 h-3 rounded-sm bg-white border border-gray-200" />
          <Text className="text-[10px] text-gray-400">Available</Text>
        </View>
      </View>
    </View>
  );
}