import React, { useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { CustomView } from "../../../components/ui/CustomView";
import { Title } from "../../../components/ui/Title";
import { FlatList } from "react-native-gesture-handler";
import { colors } from "../../config/theme/theme";
import { ListItems } from "../../../components/ui/ListItem";

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray = Array.from({ length: 5 }, (_, i) => i + numbers.length);
    
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 2500);
  };

  return (
    <CustomView style={{
      backgroundColor: 'black'
    }}>
  
      <FlatList
        data={numbers}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        keyExtractor={(item) => item.toString()}

        renderItem={({item})=> <ListItems number={item}/>}

        ListFooterComponent={
          <View style={{
            paddingVertical: 20
          }}>
            <Text style={{
              
              textAlign: 'center'
            }}>
              <ActivityIndicator size="small" color={colors.primary} />
            </Text>
          </View>
        }

      />
    </CustomView>
  );
};

