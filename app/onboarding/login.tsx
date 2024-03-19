import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import React, { SyntheticEvent, useEffect, useState } from "react";
import {
  useFonts,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
} from "@expo-google-fonts/rubik";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, router } from "expo-router";
import InputText from "../../components/input/InputText";

// API
import { useLogin } from "../../hooks/useAuthController";

export default function login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fungsi untuk melakukan login
  const handleLogin = async () => {
    setLoading(true);

    try {
      const response = await useLogin(username, password);
      console.log("Login successful:", response.data);
      AsyncStorage.setItem("AcessToken", response.data.token);
      // Redirect atau navigasi ke halaman yang sesuai dengan animasi layar loading
      requestAnimationFrame(() => {
        router.replace("home");
      });
    } catch (error) {
      console.error("Error during login:", error);
      setError("Invalid credentials. Please try again." as string); // Update the type of setError state setter
    } finally {
      setLoading(false);
    }
  };

  // Fungsi untuk mengecek apakah font sudah di-load
  let [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const getCookie = async () => {
    const cookies = await AsyncStorage.getItem("AcessToken");
    console.log("Cookies yang tersimpan: ", cookies);
  };

  return (
    <View className="flex-1">
      <StatusBar style="light" backgroundColor="#405B6A" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="bg-[#4E6E81] px-6 pt-16 pb-9 rounded-bl-[38px]">
          <Text
            className="text-white text-center text-3xl"
            style={{ fontFamily: "Rubik_600SemiBold" }}
          >
            Login
          </Text>
          <Text
            className="text-white text-center text-[14px] mt-2"
            style={{ fontFamily: "Rubik_400Regular" }}
          >
            Masuk untuk melanjutkan
          </Text>
        </View>

        <View className="px-6">
          {/* form untuk login */}
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

          <View className="flex-row items-center mt-4 justify-between">
            <Text className="text-[#4B5563] text-[14px]">Ingat Saya</Text>
            <TouchableOpacity>
              <Text className="text-[#4B5563] text-[14px]">Lupa Password?</Text>
            </TouchableOpacity>
          </View>

          {error && <Text style={{ color: "red" }}>{error}</Text>}

          <TouchableOpacity className="mt-4" onPress={handleLogin}>
            <View className="bg-[#4E6E81] p-3 rounded-xl">
              <Text
                className="text-white text-center text-[16px]"
                style={{ fontFamily: "Rubik_500Medium" }}
              >
                Masuk
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={getCookie}>
            <View className="bg-[#3A5261] p-3 rounded-xl mt-4">
              <Text
                className="text-white text-center text-[16px]"
                style={{ fontFamily: "Rubik_500Medium" }}
              >
                Cookie
              </Text>
            </View>
          </TouchableOpacity>

          <View className="flex-row items-center mt-4">
            <Text className="text-[#4B5563] text-[14px] mr-1">
              Belum punya akun?
            </Text>
            <TouchableOpacity>
              <Link href={"onboarding/register"} asChild>
                <Text className="text-[#4B5563] text-[14px] underline">
                  Daftar sekarang
                </Text>
              </Link>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
