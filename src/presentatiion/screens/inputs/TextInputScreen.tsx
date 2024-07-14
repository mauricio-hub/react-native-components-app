import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import { CustomView } from "../../../components/ui/CustomView";
import { Title } from "../../../components/ui/Title";
import { Card } from "../../../components/ui/Card";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { globalStyles } from "../../config/theme/theme";
import { Button } from "../../../components/ui/Button";

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  /* 
  KeyboardAvoidingView
This component will automatically adjust its height, position, 
or bottom padding based on the keyboard height 
to remain visible while the virtual keyboard is displayed. 

  */

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView>
        <CustomView margin>
          <Title text="Text Inputs" safe />

          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Ingrese su nombre"
              autoCapitalize={"words"}
              autoCorrect={false}
              onChangeText={(value) => setForm({ ...form, name: value })}
            />
          </Card>

          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Ingrese su correo"
              autoCapitalize={"none"}
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(value) => setForm({ ...form, email: value })}
            />
          </Card>

          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Ingrese su telefono"
              keyboardType="phone-pad"
              onChangeText={(value) => setForm({ ...form, phone: value })}
            />
          </Card>

          <View style={{
            height: 50
          }}/>

          <View style={globalStyles.btnPrimary}>
            <Button text="Send Data" onPress={() => console.log(form)} />
          </View>
        </CustomView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
