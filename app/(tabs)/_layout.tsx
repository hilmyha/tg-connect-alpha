import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#4E6E81",
          title: "Home",
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="home"
              size={24}
              color={focused ? "#4E6E81" : "#B0B0B0"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#4E6E81",
          title: "Profile",
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="person"
              size={24}
              color={focused ? "#4E6E81" : "#B0B0B0"}
            />
          ),
        }}
      />
    </Tabs>
  );
};
