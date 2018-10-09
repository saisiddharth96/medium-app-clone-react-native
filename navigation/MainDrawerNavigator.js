import React from "react";
import {
  View,
  Platform,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { createDrawerNavigator } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import ArticleScreen from "../screens/ArticleScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SideMenu from "../screens/SideMenu.js";

export default class MainDrawerNavigator extends React.Component {
  render() {
    return <AppDrawerNavigator />;
  }
}

const AppDrawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
  ArticleScreen : ArticleScreen
},{
  contentComponent : SideMenu
});
