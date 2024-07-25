import React, { useContext, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  Easing,
} from "react-native";
import { useAnimations } from "../../hooks/useAnimations";
import { ThemeContext } from "../../context/ThemeContext";
import { CustomView } from "../../../components/ui/CustomView";
import { Button } from "../../../components/ui/Button";

export const Animation101Screen = () => {
  const {
    animateOpacity,
    aninatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  } = useAnimations();
  const { colors } = useContext(ThemeContext);

  return (
    <CustomView
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
        },
      ]}

    >
      <Animated.View
        style={[
          styles.purpleBox,
          {
            backgroundColor: colors.primary,
          },
          {
            opacity: animateOpacity,
            transform: [
              {
                translateY: aninatedTop,
              },
            ],
          },
        ]}
      />

      <Button
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            initialPosition: -100,
            duration: 600,
            toValue: 0,
            easig: Easing.elastic(1),
          });
        }}
        style={{ marginTop: 10 }}
        text="Fade in"
      />

      <Button       
       
       onPress={() =>
          fadeOut({
            duration: 300,
            toValue: 0,
            callback: () => console.log("animation finished"),
          })
        }
        style={{ marginTop: 10 }}
        text="Fade out"
    />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },

  purpleBox: {
    /*  backgroundColor: colors.primary, */
    height: 150,
    width: 150,
  },
});
