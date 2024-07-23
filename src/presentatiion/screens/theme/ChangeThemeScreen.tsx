import React, { useContext } from "react";
import { View, Text } from "react-native";
import { CustomView } from "../../../components/ui/CustomView";
import { Title } from "../../../components/ui/Title";
import { Button } from "../../../components/ui/Button";
import { ThemeContext } from "../../context/ThemeContext";

export const ChangeThemeScreen = () => {
  const { setTheme } = useContext(ThemeContext);

  return (
    <CustomView margin>
      <Title text="Change Theme" safe />

      <Button text="Light" onPress={() => setTheme("light")} />

      <View style={{ height: 10 }} />

      <Button text="Dark" onPress={() => setTheme("dark")} />
    </CustomView>
  );
};
