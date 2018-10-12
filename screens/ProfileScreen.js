import React, { Component } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  ScrollView,
  Image
} from "react-native";

import FollowButton from "../components/FollowButton.js";
import { MonoText } from "../components/StyledText.js";
import VerticalCards from "./VerticalCards.js";
import Header from "../components/Header.js";

class ProfileScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header bgColor = "#f4f4f4" isBackButton HeaderText = "Profile" HeaderTextProp/>
        <ScrollView>
          <View style={styles.profileImageContainer}>
            <Image
              style={styles.profileImage}
              source={require("../assets/images/placeholder.png")}
            />
          </View>
          <View style={styles.profileDescription}>
            <MonoText style={styles.profileName}> Lorem ipsum dolor </MonoText>
            <MonoText style={styles.memberSince}> Member Since xxxx </MonoText>
            <MonoText style={styles.bioText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              sunt officia earum soluta reprehenderit saepe. Illum, maiores
              nostrum
            </MonoText>
          </View>
          <View style={styles.followingFollowersContainer}>
            <View style={styles.followingContainer}>
              <MonoText
                style={{ fontSize: 18, paddingRight: 5, fontWeight: "500" }}
              >
                xx
              </MonoText>
              <MonoText style={{ fontSize: 18 }}>Following</MonoText>
            </View>
            <View style={styles.followersContainer}>
              <MonoText
                style={{ fontSize: 18, paddingRight: 5, fontWeight: "500" }}
              >
                xx
              </MonoText>
              <MonoText style={{ fontSize: 18 }}>Followers</MonoText>
            </View>
          </View>
          <View
            style={{
              height: 40,
              borderBottomWidth: 1,
              borderBottomColor: "#e5e5e5"
            }}
          >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View
                style={{
                  borderRightWidth: 1,
                  borderRightColor: "#e5e5e5",
                  height: 40
                }}
              >
                <MonoText
                  style={{
                    fontSize: 16,
                    padding: 10
                  }}
                >
                  Profile
                </MonoText>
              </View>
              <View
                style={{
                  borderRightWidth: 1,
                  borderRightColor: "#e5e5e5",
                  height: 40
                }}
              >
                <MonoText
                  style={{
                    fontSize: 16,
                    padding: 10
                  }}
                >
                  Latest
                </MonoText>
              </View>
              <View
                style={{
                  borderRightWidth: 1,
                  borderRightColor: "#e5e5e5",
                  height: 40
                }}
              >
                <MonoText
                  style={{
                    fontSize: 16,
                    padding: 10
                  }}
                >
                  Claps
                </MonoText>
              </View>
              <View
                style={{
                  borderRightWidth: 1,
                  borderRightColor: "#e5e5e5",
                  height: 40
                }}
              >
                <MonoText
                  style={{
                    fontSize: 16,
                    padding: 10
                  }}
                >
                  Highlights
                </MonoText>
              </View>
              <View
                style={{
                  borderRightWidth: 1,
                  borderRightColor: "#e5e5e5",
                  height: 40
                }}
              >
                <MonoText
                  style={{
                    fontSize: 16,
                    padding: 10
                  }}
                >
                  Responses
                </MonoText>
              </View>
            </ScrollView>
          </View>
          <FlatList
            data={[
              { key: "a" },
              { key: "b" },
              { key: "c" },
              { key: "d" },
              { key: "e" }
            ]}
            renderItem={({ item }) => <VerticalCards>{item.key}</VerticalCards>}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  headerContainer: {
    flexDirection: "row",
    height: 90,
    justifyContent: "space-between",
    alignItems: "center"
  },
  leftOptions: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 15,
    paddingTop: 20
  },
  backButton: {
    height: 30,
    width: 30,
    resizeMode: "contain",
    paddingLeft: 10,
    paddingTop: 10
  },
  rightIcons: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
    paddingRight: 15,
    paddingTop: 20,
    height: 40,
    paddingBottom: 20
  },
  followButton: {
    height: 40,
    width: 80,
    marginRight: 20,
    borderColor: "#1bba00",
    borderWidth: 2,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  rightIconsTouchableContainer: {
    height: 40
  },
  navSubMenuRight: {
    height: 30,
    width: 30,
    resizeMode: "contain",
    paddingTop: 40
  },
  profileImageContainer: {
    height: 120,
    alignItems: "center",
    justifyContent: "center"
  },
  profileImage: {
    height: 120,
    width: 120,
    borderRadius: 120,
    borderRadius: 120
  },
  profileDescription: {
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 15
  },
  profileName: {
    fontSize: 24,
    fontWeight: "500",
    paddingLeft: 5
  },
  memberSince: {
    fontSize: 16,
    fontWeight: "400",
    color: "#1bba00"
  },
  bioContainer: {
    height: 150,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  bioText: {
    fontSize: 14,
    fontWeight: "400",
    paddingLeft: 10,
    paddingTop: 10
  },
  followingFollowersContainer: {
    flexDirection: "row",
    paddingTop: 10
  },
  followingContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#e5e5e5"
  },
  followersContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#e5e5e5"
  }
});
