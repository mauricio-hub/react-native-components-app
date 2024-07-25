import React, { useContext, useState } from "react";
import { CustomView } from "../../../components/ui/CustomView";
import { CustomSwitch } from "../../../components/ui/CustomSwitch";
import { Separator } from "../../../components/ui/Separator";
import { Card } from "../../../components/ui/Card";


export const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);



  const [state, setState] = useState({
    isActive: true,
    isHunghry: false,
    isHappy: true,
  });

  return (
    <CustomView>
      <Card
        style={{
          marginTop: 100,
        }}
      >
        <CustomSwitch
          isOn={state.isActive}
          onChange={(value) => setState({ ...state, isActive: value })}
          text="is Active"
        />
        <Separator />
        <CustomSwitch
          isOn={state.isHunghry}
          onChange={(value) => setState({ ...state, isHunghry: value })}
          text="is Hungry"
        />
        <Separator />
        <CustomSwitch
          isOn={state.isHappy}
          onChange={(value) => setState({ ...state, isHappy: value })}
          text="is Happy"
        />
      </Card>
    </CustomView>
  );
};
