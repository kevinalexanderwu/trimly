import React from "react";
import { Modal as RNModal, Pressable, View } from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function BottomSheetModal({ visible, onClose, children }: Props) {
  return (
    <RNModal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View className="flex-1 justify-end bg-black/50">
        <Pressable className="absolute inset-0" onPress={onClose} />
        <View className="bg-white rounded-t-3xl p-6 pb-8">
          <View className="w-10 h-1 bg-gray-200 rounded-full self-center mb-5" />
          {children}
        </View>
      </View>
    </RNModal>
  );
}
