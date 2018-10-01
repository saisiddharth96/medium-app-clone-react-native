import React from "react";
import {
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";

import TopScrollContainer from "./TopScrollContainer.js";
import VerticalScrollContainer from "./VerticalScrollContainer.js";
import { DrawerActions } from "react-navigation";

import { MonoText } from "../components/StyledText";

class Logo extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={{ paddingLeft: 10, paddingTop: 0, flexDirection : "row", justifyContent : "space-evenly" }}
        onPress={() => {
          this.props.navigation.dispatch(DrawerActions.openDrawer());
        }}
      >
        <Image
          source={require("../assets/images/menu-icon.png")}
          style={[styles.navImage]}
        />

        <MonoText style = {{color : "#fff", paddingLeft : 30, fontSize : 20, fontWeight : "400"}}>Home</MonoText>
      </TouchableOpacity>
    );
  }
}

class RightButtons extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={{ paddingRight: 10, flexDirection: "row", justifyContent : "space-between" }}
        onPress={() => {
          this.props.navigation.dispatch(DrawerActions.openDrawer());
        }}
      >
        <Image
          source={require("../assets/images/notification.png")}
          style={[styles.navImage, {paddingLeft : 30, paddingRight : 30}]}
        />
        <Image
          source={require("../assets/images/search.png")}
          style={[styles.navImage]}
        />
      </TouchableOpacity>
    );
  }
}

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Logo />,
    headerRight: <RightButtons />,
    headerStyle: {
      backgroundColor: "#000000"
    }
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <TopScrollContainer />
        <VerticalScrollContainer />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  leftOptions: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 15,
    paddingTop: 40
  },
  navImage: {
    height: 30,
    width: 30,
    resizeMode: "contain"
  },
  HomeText: {
    fontSize: 18,
    paddingLeft: 15,
    paddingBottom: 20,
    color: "#fff"
  },
  icon: {
    height: 50,
    width: 50,
    paddingLeft: 40
  }
});
