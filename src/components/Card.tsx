import React from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { colors } from '../presentatiion/config/theme/theme';


interface Props extends React.PropsWithChildren<{}> {
    style?: StyleProp<ViewStyle>
    
}


export const Card = ({style,children}:Props) => {
  return (
    <View 
        style={[
            {
                backgroundColor: colors.cardBackground,
                borderRadius: 10,
                padding: 10,
            },
            style
        ]}
    >
        {children}
    </View>
  );
};