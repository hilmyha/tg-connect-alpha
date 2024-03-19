import React, { useEffect, useState } from "react";
import { Redirect, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem("AcessToken");
        if (token) {
          setLoading(false);
          router.replace("home");
        } else {
          setLoading(false);
          router.replace("onboarding/login");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    checkToken();
  }, []);

  if (loading) {
    return null;
  }
};

export default index;
