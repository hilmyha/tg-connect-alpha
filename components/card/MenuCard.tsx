import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function MenuCard(props: any) {
  return (
    <Link href={props.link} asChild>
      <TouchableOpacity>
        <View className="flex-col items-center">
          <View
            className="w-[100px] h-[64px] justify-center items-center rounded-2xl mb-[10px]"
            style={{ backgroundColor: props.bgcolor }}
          >
            <Ionicons name={props.iconame} size={32} color={props.icolor} />
          </View>
          <Text
            className="text-[#3A5261]"
            style={{ fontFamily: "Rubik_400Regular" }}
          >
            {props.title}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
}
