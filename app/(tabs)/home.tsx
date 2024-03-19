import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
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
import MenuCard from "../../components/card/MenuCard";
import InformationCard from "../../components/card/InformationCard";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

// API
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLogout } from "../../hooks/useAuthController";

export default function home() {
  // handle logout
  const handleLogout = async () => {
    try {
      const response = await useLogout();
      console.log("Logout successful:", response.data);
      AsyncStorage.removeItem("AcessToken");
      Alert.alert("Apakah anda yakin?", "Anda akan keluar dari aplikasi", [
        {
          text: "Batal",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () =>
            requestAnimationFrame(() => {
              router.replace("onboarding/login");
            }),
        },
      ]);
      console.log("Berhasil logout");
    } catch (error) {
      Alert.alert("Gagal Logout", "Terjadi kesalahan saat logout!");
      console.error("Error fetching data:", error);
    }
  };

  let [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const infoCardArr = [
    {
      title: "Kumpul Warga",
      date: "1 Agustus 2024",
      time: "10:00",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, euismod.",
    },
    {
      title: "Kerja Bakti",
      date: "9 Agustus 2024",
      time: "14:00",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, euismod.",
    },
    {
      title: "Arisan RT",
      date: "12 Agustus 2024",
      time: "20:00",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, euismod.",
    },
  ];

  const menuCardArr = [
    {
      iconame: "people",
      icolor: "#16A34A",
      bgcolor: "#22C55E",
      title: "Warga",
      link: "pages/warga",
    },
    {
      iconame: "information-circle",
      icolor: "#D97706",
      bgcolor: "#F59E0B",
      title: "Informasi",
      link: "pages/warga",
    },
    {
      iconame: "megaphone",
      icolor: "#DC2626",
      bgcolor: "#EF4444",
      title: "Panic Button",
      link: "pages/warga",
    },
  ];

  return (
    <View className="flex-1">
      <StatusBar style="light" backgroundColor="#405B6A" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="bg-[#4E6E81] px-6 pt-24 pb-7 rounded-bl-[38px]">
          <View className="flex-row items-center justify-between mb-[38px]">
            <Text
              className="text-white text-3xl"
              style={{ fontFamily: "Rubik_600SemiBold" }}
            >
              Selamat Datang
            </Text>
            <TouchableOpacity>
              <Ionicons
                name="notifications"
                size={24}
                color="white"
                className="ml-auto"
              />
            </TouchableOpacity>
          </View>
          <View className="justify-center">
            <View className="flex-row items-center bg-white rounded-[20px] px-3 py-4">
              <TextInput
                placeholder="Ketikan nama atau alamat"
                className="flex-1"
              />
              <Ionicons
                name="search"
                size={24}
                color="#3A5261"
                className="ml-auto"
              />
            </View>
          </View>
        </View>

        <View className="px-6 pt-8 flex-row justify-between">
          {menuCardArr.map((menuCard, index) => (
            <MenuCard
              key={index}
              iconame={menuCard.iconame}
              icolor={menuCard.icolor}
              bgcolor={menuCard.bgcolor}
              title={menuCard.title}
              link={menuCard.link}
            />
          ))}
        </View>

        <View className="px-6 pt-8">
          <Text
            className="text-[22px] text-[#3A5261] mb-2"
            style={{ fontFamily: "Rubik_600SemiBold" }}
          >
            Informasi Terbaru
          </Text>

          {infoCardArr.map((infoCard, index) => (
            <InformationCard
              key={index}
              title={infoCard.title}
              date={infoCard.date}
              time={infoCard.time}
              desc={infoCard.desc}
            />
          ))}
        </View>

        <TouchableOpacity onPress={handleLogout}>
          <Text className="text-white bg-slate-500 text-center text-[16px] mt-4">
            Logout
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
