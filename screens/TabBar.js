import React from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";

import { MonoText } from "../components/StyledText.js";

const TabBar = () => {
  return (
    <View style={styles.Container}>
      <TouchableOpacity
          style={{
            paddingTop: 0,
            flexDirection: "row",
            justifyContent: "space-evenly"
          }}
          onPress={() => props.navigation.navigate("DrawerOpen")}
        >
          <Image
            source={require("../assets/images/menu-icon.png")}
            style={[styles.navImage]}
          />
        </TouchableOpacity>
        <MonoText
          style={{
            color: "#fff",
            paddingLeft: 30,
            fontSize: 20,
            fontWeight: "400"
          }}
        >
          Home
        </MonoText>
      </View>
    
  );
};

export default TabBar;

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 80,
    backgroundColor: "#000000"
  },
  leftOptions: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 15,
    paddingTop: 40
  },
  rightIcons: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
    paddingRight: 15,
    paddingTop: 40,
    height: 40
  },
  navImage: {
    height: 20,
    width: 20,
    resizeMode: "contain",
    paddingLeft: 10,
    paddingTop: 20
  },
  HomeText: {
    fontSize: 18,
    paddingLeft: 15,
    paddingBottom: 20,
    color: "#fff"
    // fontWeight : "400"
  },
  navNotificationRightImages: {
    height: 25,
    width: 25,
    resizeMode: "contain",
    paddingBottom: 20,
    paddingRight: 80
  },
  navSearchRightImages: {
    height: 25,
    width: 25,
    resizeMode: "contain",
    paddingBottom: 20
  }
});
