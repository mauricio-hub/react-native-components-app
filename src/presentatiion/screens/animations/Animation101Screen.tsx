import React, { useRef } from "react";
import { View, Text, StyleSheet, Pressable, Animated } from "react-native";
import { colors } from "../../config/theme/theme";

export const Animation101Screen = () => {

   
   const animateOpacity = useRef(new Animated.Value(0)).current; 

   const fadeIn = () => {
    Animated.timing(animateOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(
        () => console.log("animation finished")
    );
   }

   const fadeOut = () => {
    Animated.timing(animateOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(
        () => console.log("animation finished")
    );
   }


  return (
    <View style={styles.container}>
      <Animated.View style={[styles.purpleBox,
        {
          opacity: animateOpacity,
        }
      ]} />

      <Pressable
        onPress={fadeIn}
        style={{ marginTop: 10 }}
      >
        <Text>Fade in</Text>
      </Pressable>

      <Pressable
        onPress={fadeOut}
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
