import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  SafeAreaView,
  TouchableWithoutFeedback,
  Image
} from "react-native";

import TopScrollContainer from "./TopScrollContainer.js";
import VerticalScrollContainer from "./VerticalScrollContainer.js";
import { MonoText } from "../components/StyledText";

export default class HomeScreen extends React.Component {
  handleMenuButtonPress = () => this.props.navigation.toggleDrawer();
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.leftOptions}>
            <TouchableOpacity
              style={{
                paddingTop: 10
              }}
              onPress={() => this.handleMenuButtonPress()}
            >
              <Image
                source={require("../assets/images/menu-icon.png")}
                style={styles.navImage}
              />
            </TouchableOpacity>
            <MonoText
              style={{
                color: "#fff",
                paddingLeft: 25,
                fontSize: 22,
                fontWeight: "400",
                paddingTop: 5
              }}
            >
              Home
            </MonoText>
          </View>
          <View style={styles.rightIcons}>
            <TouchableWithoutFeedback onPress = {()=> alert("Notification Clicked")} style={styles.rightIconsTouchableContainer}>
              <Image
                source={require("../assets/images/notification.png")}
                style={styles.navNotificationRightImages}
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress = {()=> alert("Search clicked")} style={styles.rightIconsTouchableContainer}>
              <Image
                source={require("../assets/images/search.png")}
                style={styles.navSearchRightImages}
              />
            </TouchableWithoutFeedback>
          </View>
        </View>
        <ScrollView>
          <TopScrollContainer />
          <VerticalScrollContainer />
        </ScrollView>
      </SafeAreaView>
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
    paddingLeft: 15
  },
  navImage: {
    height: 35,
    width: 35,
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
  },
  headerContainer: {
    flexDirection: "row",
    height: 80,
    backgroundColor: "#000000",
    justifyContent: "space-between"
  },
  navImage: {
    height: 20,
    width: 20,
    resizeMode: "contain",
    paddingLeft: 10,
    paddingTop: 20
  },
  leftOptions: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 15,
    paddingTop: 30
  },
  rightIcons: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
    paddingRight: 15,
    paddingTop: 40,
    height: 40
  },
  rightIconsTouchableContainer : {
    height: 40
  },
  navNotificationRightImages: {
    height: 25,
    width: 25,
    resizeMode: "contain",
    paddingBottom: 20,
    paddingRight: 60
  },
  navSearchRightImages: {
    height: 30,
    width: 30,
    resizeMode: "contain",
    paddingBottom: 20
  }
});
