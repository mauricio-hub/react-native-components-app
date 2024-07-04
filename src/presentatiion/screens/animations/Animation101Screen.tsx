import React, { useRef } from "react";
import { View, Text, StyleSheet, Pressable, Animated, Easing } from "react-native";
import { colors } from "../../config/theme/theme";

export const Animation101Screen = () => {


  const animateOpacity = useRef(new Animated.Value(0)).current;

  const aninatedTop = useRef(new Animated.Value(-100)).current;


  const fadeIn = () => {

    Animated.timing(aninatedTop, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
     // easing: Easing.elastic(1),
     easing: Easing.bounce
    }).start(
      () => console.log("animation finished")
    );


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
      () => aninatedTop.resetAnimation()
    );
    
  }


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
