import React from "react";
import { Platform, Image, StyleSheet, TouchableOpacity } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator
} from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SideMenu from "../screens/SideMenu.js";
import width from "../constants/Layout.js"

class Logo extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.toggleDrawer();
        }}
        style={[styles.icon]}
      >
        <Image
          source={require("../assets/images/robot-dev.png")}
          style={[styles.icon]}
        />
      </TouchableOpacity>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  drawerLabel: "Home",
  drawerLabelColor : "#ffffff"
};

const LinksStack = createStackNavigator({
  Links: LinksScreen
});

LinksStack.navigationOptions = {
  drawerLabel: "Links"
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  drawerLabel: "Settings"
};

export default createDrawerNavigator(
  {
    HomeStack,
    LinksStack,
    SettingsStack
  },
  {
    contentComponent : SideMenu,
    drawerWidth : 300
  }
);

const styles = StyleSheet.create({
  icon: {
    width: 10,
    height: 10
  }
});
