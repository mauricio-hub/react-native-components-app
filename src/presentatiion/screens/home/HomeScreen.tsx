import React from 'react';
import { View, Text } from 'react-native';
import FontAwsome from '@expo/vector-icons/FontAwesome';
import { globalStyles } from '../../config/theme/theme';
import { ScrollView } from 'react-native-gesture-handler';
import { Title } from '../ui/Title';
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';
export const menuItems = [
  // 01-animationMenuItems
  {
    name: 'Animation 101',
    icon: 'cube', // FontAwesome: cube
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'cubes', // FontAwesome: cubes (aproximado)
    component: 'Animation102Screen',
  },

  // 02-menuItems
  {
    name: 'Pull to refresh',
    icon: 'sync', // FontAwesome: sync
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list', // FontAwesome: list
    component: 'CustomSectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'clone', // FontAwesome: clone
    component: 'ModalScreen',
  },
  {
    name: 'InfiniteScroll',
    icon: 'download', // FontAwesome: download
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'slideshare', // FontAwesome: slideshare (similar)
    component: 'SlidesScreen',
  },
  {
    name: 'Themes',
    icon: 'flask', // FontAwesome: flask
    component: 'ChangeThemeScreen',
  },

  // 03- uiMenuItems
  {
    name: 'Switches',
    icon: 'toggle-on', // FontAwesome: toggle-on
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'exclamation-circle', // FontAwesome: exclamation-circle
    component: 'AlertScreen',
  },
  {
    name: 'TextInputs',
    icon: 'file-', // FontAwesome: file-alt (similar a document-text)
    component: 'TextInputScreen',
  },
];


export const HomeScreen = () => {



  return (
    <View style={[globalStyles.mainContainer]}>
      <View  style={globalStyles.globalMargin}>
        <ScrollView>
          <Title text="Components" safe />

          <View>
            {
              menuItems.map((item, index) => (
                <Text key={index}>{item.name}</Text>
              ))
            }
          </View>

        </ScrollView>
      </View>
    </View>
  );
};