import React from "react";
import { View, Text, Alert } from "react-native";
import { CustomView } from "../../../components/ui/CustomView";
import { globalStyles } from "../../config/theme/theme";
import { Button } from "../../../components/ui/Button";


export const AlertScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "destructive",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);



  return (
    <CustomView style={[globalStyles.globalMargin, globalStyles.top]}>
      <Text>Alert Screen</Text>

      <Button text="Show Alert" onPress={createTwoButtonAlert} />

      <View style={{ height: 10 }} />

      <Button text="Show Confirm" onPress={createThreeButtonAlert} />

      
    </CustomView>
  );
};
