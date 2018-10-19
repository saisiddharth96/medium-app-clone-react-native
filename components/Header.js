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
import { Ionicons } from "@expo/vector-icons";

export class Header extends Component {
  handleMenuButtonPress = () => this.props.navigation.toggleDrawer();
  state = {
    bookmarkColor: "#000000",
    bookmarked: false
  };
  handleBookmarkPress = () => {
    this.setState({
      bookmarkColor: this.state.bookmarked ? "#18b500" : "#000", //toggle the state along with color
      bookmarked: this.state.bookmarked ? false : true
    });
  };

  render() {
    return (
      <SafeAreaView>
        {this.props.isMainHeader ? (
          <View style={[styles.headerContainer]}>
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
          </View>
        ) : null}
        {this.props.articleHeader ? (
          <View style={articleHeaderStyles.headerContainer}>
            <View style={articleHeaderStyles.backProfileImageContainer}>
              <Image
                source={require("../assets/images/back.png")}
                style={articleHeaderStyles.back}
              />
            </View>
            <View style={articleHeaderStyles.profileImageNameContainer}>
              <View
                style={{
                  borderTopRightRadius: 50,
                  borderTopWidth: 3,
                  borderRightWidth: 1,
                  borderBottomRightRadius: 50,
                  borderTopLeftRadius: 50,
                  borderLeftWidth: 1,
                  borderBottomLeftRadius: 50,

                  borderBottomWidth: 3,

                  borderColor: "#18b500"
                }}
              >
                <Image
                  source={require("../assets/images/placeholder.png")}
                  style={articleHeaderStyles.profilePicture}
                />
              </View>
              <View style={articleHeaderStyles.nameTimeContainer}>
                <MonoText style={{ fontWeight: "500", fontSize: 18 }}>
                  Lorem ipsum
                </MonoText>
                <View style={articleHeaderStyles.timeContainer}>
                  <MonoText style={{ fontWeight: "400", fontSize: 14 }}>
                    Lorem ipsum
                  </MonoText>
                  <MonoText
                    style={{ fontWeight: "400", fontSize: 14, paddingLeft: 5 }}
                  >
                    .
                  </MonoText>
                  <MonoText
                    style={{ fontWeight: "400", fontSize: 14, paddingLeft: 5 }}
                  >
                    Lorem ipsum
                  </MonoText>
                </View>
              </View>
            </View>
            <View style={articleHeaderStyles.headerIconsContainer}>
              <View style={articleHeaderStyles.headerIcons}>
                <Ionicons
                  name="md-bookmark"
                  size={30}
                  onPress={this.handleBookmarkPress}
                  color={this.state.bookmarkColor}
                />
              </View>
              <View style={articleHeaderStyles.headerIcons}>
                <Image
                  source={require("../assets/images/more-options-menu.png")}
                  style={articleHeaderStyles.moreOptionsMenu}
                />
              </View>
            </View>
          </View>
        ) : null}
      </SafeAreaView>
    );
  }
}

export default withNavigation(Header);

const articleHeaderStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    height: 80,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    paddingTop: 15
  },
  backProfileImageContainer: {
    paddingLeft: 10,
    paddingTop: 10
  },
  back: {
    height: 35,
    width: 35
  },
  profileImageNameContainer: {
    flexDirection: "row",
    paddingLeft: 5,
    paddingTop: 10
  },
  nameTimeContainer: {
    paddingLeft: 15
  },
  timeContainer: {
    flexDirection: "row"
  },
  profilePicture: {
    height: 40,
    width: 40,
    borderRadius: 40
  },
  headerIconsContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingTop: 10
  },
  headerIcons: {
    paddingLeft: 10
  },
  moreOptionsMenu: {
    height: 30,
    width: 30
  }
});

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    height: 80,
    justifyContent: "space-between",
    backgroundColor: "#000"
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
