import React, { useRef } from "react";
import { View, Text, StyleSheet, Pressable, Animated, Easing } from "react-native";
import { colors } from "../../config/theme/theme";
import { useAnimations } from "../../hooks/useAnimations";

export const Animation101Screen = () => {

  const {animateOpacity,aninatedTop,fadeIn,fadeOut,startMovingTopPosition} = useAnimations()
 

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.purpleBox,
      {
        opacity: animateOpacity,
        transform: [
          {
            translateY: aninatedTop
          }
        ]
      }
      ]} />

      <Pressable
        onPress={()=>{
          fadeIn({});
          startMovingTopPosition({
            initialPosition: -100,
            duration: 600,
            toValue: 0,
            easig: Easing.elastic(1),
          })
        }}

        style={{ marginTop: 10 }}
      >
        <Text>Fade in</Text>
      </Pressable>

      <Pressable
        onPress={
          f=> fadeOut({
            duration: 300,
            toValue: 0,
            callback: () => console.log("animation finished")
          })
        }
        style={{ marginTop: 10 }}
      >
        <Text>Fade out</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },

  purpleBox: {
    backgroundColor: colors.primary,
    height: 150,
    width: 150,
  },
});
