import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback
} from "react-native";

import {DrawerItems} from "react-navigation"

import { DrawerComponentsText, MemberText } from "../components/StyledText.js";

export default class SideMenu extends Component {
  render() {
    return (
      <SafeAreaView style={styles.menuContainer}>
      <DrawerItems {...this.props}/>
        <TouchableNativeFeedback
          onPress={() => {
            alert("Profile Section under development");
          }}
        >
          <View style={styles.profileContainer}>
            <Image
              source={require("../assets/images/placeholder.png")}
              style={styles.profilePicture}
            />
            <Text style={styles.profileName}>Profile Name</Text>
            <Text style={styles.seeProfile}>See Profile</Text>
          </View>
        </TouchableNativeFeedback>
        <View style={styles.pagesStack}>
          <DrawerComponentsText
            onPress={() => {
              alert("Coming soon! Stay Tuned");
            }}
          >
            Home
          </DrawerComponentsText>
          <DrawerComponentsText
            onPress={() => {
              alert("Coming soon! Stay Tuned");
            }}
          >
            Audio
          </DrawerComponentsText>
          <DrawerComponentsText
            onPress={() => {
              alert("Coming soon! Stay Tuned");
            }}
          >
            Bookmarks
          </DrawerComponentsText>
          <DrawerComponentsText
            onPress={() => {
              alert("Coming soon! Stay Tuned");
            }}
          >
            Interests
          </DrawerComponentsText>
          <MemberText>Become a member</MemberText>
          <DrawerComponentsText
            onPress={() => {
              alert("Coming soon! Stay Tuned");
            }}
          >
            New Story
          </DrawerComponentsText>
          <DrawerComponentsText
            onPress={() => {
              alert("Coming soon! Stay Tuned");
            }}
          >
            Stats
          </DrawerComponentsText>
          <DrawerComponentsText
            onPress={() => {
              alert("Coming soon! Stay Tuned");
            }}
          >
            Drafts
          </DrawerComponentsText>
        </View>
        <View style={styles.bottomOptions}>
          <Image
            source={require("../assets/images/medium-logo.png")}
            style={styles.MediumIcon}
          />
          <Text style = {styles.bottomText}>Settings</Text>
          <Text>Help</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#efefef"
  },
  pagesStack: {
    height: 250,
    width: 300
  },
  bottomOptions: {
    flex: 1,
    height: 50,
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingBottom: 30,
    paddingRight: 60,
    paddingLeft: 60
  },
  profileContainer: {
    height: 250,
    width: 300,
    backgroundColor: "#f9f9f9"
  },
  profilePicture: {
    height: 100,
    width: 100,
    marginTop: 50,
    marginLeft: 30,
    borderRadius: 50
  },
  profileName: {
    fontSize: 18,
    marginLeft: 30,
    paddingTop: 10,
    fontWeight: "400"
  },
  seeProfile: {
    fontSize: 16,
    marginLeft: 30,
    paddingTop: 10,
    color: "#dbdbdb"
  },
  MediumIcon: {
    height: 30,
    width: 30
  },
  bottomText : {}
});
