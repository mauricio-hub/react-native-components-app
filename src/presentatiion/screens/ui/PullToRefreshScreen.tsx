import React, { useState } from "react";
import { View, Text, RefreshControl } from "react-native";
import { CustomView } from "../../../components/ui/CustomView";
import { Title } from "../../../components/ui/Title";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { globalStyles } from "../../config/theme/theme";

export const PullToRefreshScreen = () => {
    const [isRefreshing, setIsRefreshing] = useState(false);

    const {top} = useSafeAreaInsets();

    const onRefresh = () => {
        setIsRefreshing(true);

        setTimeout(() => {
            setIsRefreshing(false);         
        }
        , 3500);

    }


  return (
    <ScrollView
        refreshControl={
            <RefreshControl
            refreshing={isRefreshing}
            progressViewOffset={top}
            colors={["#5856D6", "#3a8020", "#f2568f"]}
            onRefresh={onRefresh}
            />
        }
        style = {[globalStyles.globalMargin, globalStyles.globalMargin]}
    >
    
        <Title text="Pull to refresh" safe />
   
    </ScrollView>
  );
};
