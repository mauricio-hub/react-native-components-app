import React, { useContext } from "react";
import { View, Text, StyleProp, ViewStyle, Pressable } from "react-native";
import { colors, globalStyles } from "../../presentatiion/config/theme/theme";
import { ThemeContext } from "../../presentatiion/context/ThemeContext";

interface Props {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export const Button = ({ text, onPress, style }: Props) => {
  const {colors} = useContext(ThemeContext);
  return (
    <Pressable
      onPress={ onPress }
      style={ ({ pressed }) => ([
        globalStyles.btnPrimary,
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: colors.primary,
        },
        style
      ]) }
    >
      <Text style={[
        globalStyles.btnPrimaryText,
        {
          color: colors.buttonTextColor
        }
      ]}>{ text }</Text>
      
    </Pressable>
  )
};
