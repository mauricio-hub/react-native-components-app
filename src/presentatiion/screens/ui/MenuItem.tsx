import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colors } from '../../config/theme/theme';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

interface Props {
  name: string;
  icon: string;
  component: string;

  isFirst?: boolean;
  isLast?: boolean;
}

export const MenuItems = ({ name, component, icon ,isFirst=false,isLast=false}: Props) => {

   const navigation = useNavigation<any>();


  return (
    <Pressable
      onPress={() => navigation.navigate(component)}
      //style={{ marginVertical: 5 }}
    
    >
      <View
        style={{
          ...styles.container,
          backgroundColor: colors.cardBackground,
          ...(isFirst && { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10}),
          ...(isLast && { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, paddingBottom: 10}),
        }}
      >
        <FontAwesome
          //name icon type any
          name={icon  as any}
          size={25}
          style={{ marginRight: 10 }}
          color={colors.primary}
        />
        <Text style={{ color: colors.text }}>{name}</Text>
        <FontAwesome
          name="chevron-right"
          size={20}
          style={{ marginLeft:'auto',color: colors.primary}}
         
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
