import React, { useState } from 'react';
import { View, Text, ImageStyle, StyleProp, Animated, ActivityIndicator } from 'react-native';
import { useAnimations } from '../../presentatiion/hooks/useAnimations';


interface Props {

    uri : string;
    style?: StyleProp<ImageStyle>;

}


export const FadeInImage = ({uri,style}:Props) => {

    const {animateOpacity,fadeIn} = useAnimations();

    const [isLoading, setIsLoading] = useState(true);


  return (
    <View
        style={{
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        {
            isLoading && 
            <ActivityIndicator 
                style={{position:'absolute'}}
                color="grey"
                size={30}
            />
        }
      

        <Animated.Image
            source={{uri}}
            onLoadEnd={()=>{
                fadeIn({});
                setIsLoading(false);
            }}
            style={[style,
                {opacity:animateOpacity}
            ]}
           
        />
      
    </View>
  );
};