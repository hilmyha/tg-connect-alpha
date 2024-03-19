import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TextInputProps,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  placeholder: string;
  value?: string;
  setValue?(value: string): void;
  secureTextEntry?: boolean;
  type?: TextInputProps["keyboardType"] | "password";
  onChange: (text: string) => void;
};

export default function InputText(props: Props) {
  const [isHidden, setIsHidden] = React.useState(true);
  const [iconName, setIconName] = React.useState("eye-off");

  return (
    <View className="flex-row items-center bg-gray-100 rounded-[20px] ">
      <TextInput
        className="px-3 py-4 flex-1"
        keyboardType={props.type === "password" ? "default" : props.type}
        placeholder={props.placeholder}
        secureTextEntry={props.type === "password" && isHidden}
        onChangeText={props.onChange}
      />
      {props.type === "password" && (
        <TouchableOpacity
          onPress={() => {
            setIsHidden(!isHidden);
            setIconName(isHidden ? "eye" : "eye-off");
          }}
          className="px-3 py-4"
        >
          <Ionicons name={iconName} size={24} color="#000000" />
        </TouchableOpacity>
      )}
    </View>
  );
}
