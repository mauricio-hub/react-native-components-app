import React, { useRef } from 'react'
import { Animated, Easing } from 'react-native';

export const useAnimations = () => {
    const animateOpacity = useRef(new Animated.Value(0)).current;

    const aninatedTop = useRef(new Animated.Value(-100)).current;
  
  
    const fadeIn = ({duration = 300 ,toValue=1 ,callback = ()=>{} }) => {
  
    //   Animated.timing(aninatedTop, {
    //     toValue: 0,
    //     duration: 700,
    //     useNativeDriver: true,
    //    // easing: Easing.elastic(1),
    //    easing: Easing.bounce
    //   }).start(
    //     () => console.log("animation finished")
    //   );
  
  
      Animated.timing(animateOpacity, {
        toValue: toValue,
        duration: duration,
        useNativeDriver: true,
      }).start(callback)
    
    }
  
    const fadeOut = ({duration = 300 ,toValue=1 ,callback = ()=>{}}) => {
      Animated.timing(animateOpacity, {
        toValue: toValue,
        duration: duration,
        useNativeDriver: true,
       
      }).start(
        callback
      ) }


    const startMovingTopPosition = ({
        initialPosition = 0,
        duration = 300,
        toValue = 0,
        easig = Easing.linear,
        callback = () => {}
    }) => {
        aninatedTop.setValue(initialPosition)
        Animated.timing(aninatedTop, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true,
            easing: easig
        }).start()
        
    }  


    return {
        animateOpacity,
        aninatedTop,
        fadeIn,
        fadeOut,
        startMovingTopPosition,
    }  
}
