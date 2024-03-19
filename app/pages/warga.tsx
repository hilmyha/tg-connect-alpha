import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  useFonts,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
} from "@expo-google-fonts/rubik";
import { Link, Redirect, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import WargaCard from "../../components/card/WargaCard";

// API
import { useWarga } from "../../hooks/useWargaController";

export default function warga() {
  const [warga, setWarga] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const getWarga = async () => {
      try {
        const response = await useWarga();
        if (response.status === 200) {
          setWarga(response.data.data);
          setLoading(false);
        } else {
          setIsEmpty(true);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getWarga();
  }, []);

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
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

  return (
    <View className="flex-1">
      <StatusBar style="light" backgroundColor="#405B6A" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="bg-[#4E6E81] px-6 h-[200px] rounded-bl-[38px]">
          <View className="flex-row justify-between items-center h-full">
            <TouchableOpacity onPress={handleGoBack}>
              <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            {/* <Link href={"home"} asChild>
            </Link> */}
            <Text
              className="text-white text-3xl"
              style={{ fontFamily: "Rubik_600SemiBold" }}
            >
              Warga
            </Text>
          </View>
        </View>

        <View className="px-6 pb-14 -mt-[40px]">
          {/* tampilkan data warga */}

          {loading ? (
            <ActivityIndicator size="large" color="white" />
          ) : warga ? (
            warga.map(
              (item: {
                id: string;
                nama_kk: string;
                jalan: string;
                blok: string;
              }) => (
                <WargaCard
                  key={item.id}
                  nama={item.nama_kk}
                  alamat={item.jalan}
                  blok={item.blok}
                />
              )
            )
          ) : (
            <Text className="text-white">No data available</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
