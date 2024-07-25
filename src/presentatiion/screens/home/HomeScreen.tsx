import React, { useContext } from "react";
import { View } from "react-native";
import { colors, globalStyles } from "../../config/theme/theme";
import { ScrollView } from "react-native-gesture-handler";
import { MenuItems } from "../../../components/ui/MenuItem";
import { Title } from "../../../components/ui/Title";
import { CustomView } from "../../../components/ui/CustomView";
import { ThemeContext } from "../../context/ThemeContext";

const animationMenuItems = [
  // 01-animationMenuItems
  {
    name: "Animation 101",
    icon: "cube", 
    component: "Animation101Screen",
  },
  {
    name: "Animation 102",
    icon: "cubes", 
    component: "Animation102Screen",
  },
];

export const menuItems = [
  // 02-menuItems
  {
    name: "Pull to refresh",
    icon: "rotate-left", 
    component: "PullToRefreshScreen",
  },
  {
    name: "Section List",
    icon: "list", 
    component: "CustomSectionListScreen",
  },
  {
    name: "Modal",
    icon: "clone", 
    component: "ModalScreen",
  },
  {
    name: "InfiniteScroll",
    icon: "download", 
    component: "InfiniteScrollScreen",
  },
  {
    name: "Slides",
    icon: "slideshare",
    component: "SlidesScreen",
  },
  {
    name: "Themes",
    icon: "flask", 
    component: "ChangeThemeScreen",
  },
];

const uiMenuItems = [
  // 03- uiMenuItems
  {
    name: "Switches",
    icon: "toggle-on", 
    component: "SwitchScreen",
  },
  {
    name: "Alerts",
    icon: "exclamation-circle", 
    component: "AlertScreen",
  },
  {
    name: "TextInputs",
    icon: "file", 
    component: "TextInputScreen",
  },
];

export const HomeScreen = () => {

 
  return (
    <CustomView margin>
      <View style={globalStyles.globalMargin}>
        <ScrollView>
          <Title text="Components del menu" safe />

          <View style={{ marginTop: 20 }} />
          {animationMenuItems.map((item, index) => (
            <MenuItems
              key={item.component}
              {...item}
              isFirst={index === 0}
              isLast={index === animationMenuItems.length - 1}
            />
          ))}
         

          <View style={{ marginTop: 20 }} />
          {uiMenuItems.map((item, index) => (
            <MenuItems
              key={item.component}
              {...item}
              isFirst={index === 0}
              isLast={index === uiMenuItems.length - 1}
            />
          ))}

         

          <View style={{ marginTop: 20 }} />
          {menuItems.map((item, index) => (
            <MenuItems
              key={item.component}
              {...item}
              isFirst={index === 0}
              isLast={index === menuItems.length - 1}
            />
          ))}
        </ScrollView>
      </View>
    </CustomView>
  );
};
