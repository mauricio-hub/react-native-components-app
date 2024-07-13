import React from "react";
import { View, Text, StyleProp, ViewStyle } from "react-native";
import { colors } from "../../presentatiion/config/theme/theme";

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const Separator = ({ style }: Props) => {
  return (
    <View
      style={{
        backgroundColor: colors.cardBackground,
      }}
    >
      <View
        style={[
          {
            alignSelf: "center",
            width: "100%",
            height: 1,
            backgroundColor: colors.text,
            opacity: 0.1,
            marginVertical: 10,
          },
          style,
        ]}
      />
    </View>
  );
};
