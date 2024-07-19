import React, { useState } from "react";
import { View, Text, Modal, Platform } from "react-native";
import { CustomView } from "../../../components/ui/CustomView";
import { Title } from "../../../components/ui/Title";
import { Button } from "../../../components/ui/Button";

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <CustomView margin>
      <Title text="Modal Screen" safe />

      <Button
        text="Open Modal"
        onPress={() => {
          setIsVisible(true);
        }}
      />

      <Modal visible={isVisible} animationType="slide">
        <View
            style={{
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.1)',
                
            }}
        >
          <View style={{ paddingHorizontal: 10 }}>
            <Title text="Modal content" safe />
          </View>

          <View style={{ flex: 1}}/>

            <Button
                text="Close Modal"
                onPress={() => {
                setIsVisible(false);
                }}
                style={{
                    height: Platform.OS === 'ios' ? 40 : 30,
                    borderRadius: 0,
                }}
            />
        </View>
      </Modal>
    </CustomView>
  );
};
