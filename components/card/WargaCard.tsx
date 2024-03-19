import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function MenuCard(props: any) {
  return (
    <Pressable className="mb-4">
      <View className="bg-[#E5E7EB] p-4 rounded-xl">
        <View className="flex-row gap-3 items-center">
          <View className="rounded-full bg-slate-500 p-6"></View>
          <View className="flex-col mx-auto">
            <Text
              className="text-[#374151] text-[16px] capitalize"
              style={{ fontFamily: "Rubik_500Medium" }}
            >
              {props.nama}
            </Text>
            <Text
              className="text-[#374151] text-[14px] capitalize"
              style={{ fontFamily: "Rubik_300Light" }}
            >
              {props.alamat}
            </Text>
            <Text
              className="text-[#374151] text-[14px]"
              style={{ fontFamily: "Rubik_300Light" }}
            >
              {props.blok}
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#374151" />
        </View>
      </View>
    </Pressable>
  );
}
