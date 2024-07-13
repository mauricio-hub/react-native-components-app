import React from "react";
import { View, Text, StyleProp, ViewStyle, Pressable } from "react-native";
import { colors, globalStyles } from "../../presentatiion/config/theme/theme";

interface Props {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export const Button = ({ text, onPress, style }: Props) => {
  return (
    <Pressable
        onPress={onPress}
        style={({pressed}) =>([
            globalStyles.btnPrimary,
            {
                opacity: pressed ? 0.8 : 1,
                backgroundColor: colors.primary,
            }

        ])}
    >
      <Text
        style={[
          globalStyles.btnPrimaryText,
          {
            color: colors.buttonTextColor,
          },
          style
        ]}
      >
       {text}
      </Text>
    </Pressable>
  );
};
