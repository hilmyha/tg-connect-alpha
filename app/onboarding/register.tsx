import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  useFonts,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
} from "@expo-google-fonts/rubik";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

// API
import { useWarga } from "../../hooks/useWargaController";
import InputText from "../../components/input/InputText";

export default function register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  let [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="flex-1">
      <StatusBar style="light" backgroundColor="#405B6A" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="bg-[#4E6E81] px-6 pt-16 pb-9 rounded-bl-[38px]">
          <Text
            className="text-white text-center text-3xl"
            style={{ fontFamily: "Rubik_600SemiBold" }}
          >
            Registrasi
          </Text>
          <Text
            className="text-white text-center text-[14px] mt-2"
            style={{ fontFamily: "Rubik_400Regular" }}
          >
            Silahkan registrasi sebagai user baru untuk melanjutkan
          </Text>
        </View>

        <View className="px-6">
          {/* form untuk registrasi */}
          <View className="mt-4">
            <InputText
              value={username}
              setValue={setUsername}
              onChange={setUsername}
              placeholder="Username"
            />
          </View>
          <View className="mt-4">
            <InputText
              value={password}
              setValue={setPassword}
              onChange={setPassword}
              type="password"
              placeholder="Password"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
