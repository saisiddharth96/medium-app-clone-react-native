import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import { MonoText } from "./StyledText.js";

import { withNavigation } from "react-navigation";

export class Header extends Component {
  handleMenuButtonPress = () => this.props.navigation.toggleDrawer();

  render() {
    return (
      <SafeAreaView
        style={[
          { backgroundColor: this.props.bgColor },
          styles.headerContainer
        ]}
      >
        <View style={styles.leftOptions}>
          <TouchableOpacity
            style={{
              paddingTop: 10
            }}
            onPress={() =>
              this.props.isBackButton
                ? this.props.navigation.goBack()
                : this.handleMenuButtonPress()
            }
          >
            <Image
              source={
                this.props.isBackButton
                  ? require("../assets/images/back.png")
                  : require("../assets/images/menu-icon.png")
              }
              style={styles.navImage}
            />
          </TouchableOpacity>
          <MonoText
            style={{
              color: this.props.HeaderTextProp ? "#000" : "#fff",
              paddingLeft: 25,
              fontSize: this.props.HeaderTextProp ? 20 : 22,
              fontWeight: "400",
              paddingTop: this.props.HeaderTextProp ? 5 : 5
            }}
          >
            {this.props.HeaderText}
          </MonoText>
        </View>
        <View style={styles.rightIcons}>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate("Settings")}
            style={styles.rightIconsTouchableContainer}
          >
            <Image
              source={require("../assets/images/notification.png")}
              style={styles.navNotificationRightImages}
            />
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate("Settings")}
            style={styles.rightIconsTouchableContainer}
          >
            <Image
              source={require("../assets/images/search.png")}
              style={styles.navSearchRightImages}
            />
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    );
  }
}

export default withNavigation(Header);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    height: 80,
    justifyContent: "space-between"
  },
  leftOptions: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 15
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
  rightIconsTouchableContainer: {
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
