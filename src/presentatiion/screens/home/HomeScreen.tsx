import React from "react";
import { View } from "react-native";
import { globalStyles } from "../../config/theme/theme";
import { ScrollView } from "react-native-gesture-handler";
import { MenuItems } from "../../../components/ui/MenuItem";
import { Title } from "../../../components/ui/Title";


const animationMenuItems = [
  // 01-animationMenuItems
  {
    name: "Animation 101",
    icon: "cube", // FontAwesome: cube
    component: "Animation101Screen",
  },
  {
    name: "Animation 102",
    icon: "cubes", // FontAwesome: cubes (aproximado)
    component: "Animation102Screen",
  },
];

export const menuItems = [
  // 02-menuItems
  {
    name: "Pull to refresh",
    icon: "rotate-left", // FontAwesome: sync
    component: "PullToRefreshScreen",
  },
  {
    name: "Section List",
    icon: "list", // FontAwesome: list
    component: "CustomSectionListScreen",
  },
  {
    name: "Modal",
    icon: "clone", // FontAwesome: clone
    component: "ModalScreen",
  },
  {
    name: "InfiniteScroll",
    icon: "download", // FontAwesome: download
    component: "InfiniteScrollScreen",
  },
  {
    name: "Slides",
    icon: "slideshare", // FontAwesome: slideshare (similar)
    component: "SlidesScreen",
  },
  {
    name: "Themes",
    icon: "flask", // FontAwesome: flask
    component: "ChangeThemeScreen",
  },
];

const uiMenuItems = [
  // 03- uiMenuItems
  {
    name: "Switches",
    icon: "toggle-on", // FontAwesome: toggle-on
    component: "SwitchScreen",
  },
  {
    name: "Alerts",
    icon: "exclamation-circle", // FontAwesome: exclamation-circle
    component: "AlertScreen",
  },
  {
    name: "TextInputs",
    icon: "file", // FontAwesome: file-alt (similar a document-text)
    component: "TextInputScreen",
  },
];

export const HomeScreen = () => {
  return (
    <View style={[globalStyles.mainContainer]}>
      <View style={globalStyles.globalMargin}>
        <ScrollView>
          <Title text="Components del menu" safe />

          {menuItems.map((item, index) => (
            <MenuItems
              key={item.component}
              {...item}
              isFirst={index === 0}
              isLast={index === menuItems.length - 1}
            />
          ))}
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
        </ScrollView>
      </View>
    </View>
  );
};
