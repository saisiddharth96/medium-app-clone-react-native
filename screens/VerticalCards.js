import React, { Component } from "react";

import { StyleSheet, View, Dimensions, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

var { height, width } = Dimensions.get("window");

export default class VerticalCards extends Component {
  render() {
    return (
      <View
        style={styles.cardContainer}
        borderBottomWidth={2}
        borderBottomColor="#d8d8d8"
      >
        <Text style={styles.suggestionsText}>
          From your network || Topic name{" "}
        </Text>
        <View style={styles.HeaderTextImage}>
          <View style={styles.HeaderTextContainer}>
            <Text style={styles.HeaderText} numberOfLines={2}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </Text>
            <Text style={styles.SubHeaderText} numberOfLines={1}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </Text>
          </View>
          <Image
            style={styles.articleHeaderImage}
            source={require("../assets/images/placeholder.png")}
          />
        </View>
        <View style={styles.AuthorTimeBookmark}>
          <Text style={styles.AuthorNameText}>Author Name</Text>
          <View style={styles.TimeReadBookmarkContainer}>
            <View style={styles.TimeReadContainer}>
              <Text style={styles.dateTextStyle}>Date hours ago</Text>
              <Text style={styles.readTimeText}>x mins read</Text>
              <Image
                source={require("../assets/images/star.png")}
                style={styles.starIcon}
                fadeDuration={0}
              />
            </View>
            <Ionicons name="md-bookmark" size={25} style = {styles.BookmarkIcon}/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#f4f4f4",
    height: 250,
    width: width
  },
  suggestionsText: {
    fontSize: 18,
    color: "#3f3f3f",
    fontWeight: "300",
    paddingLeft: 20
  },
  HeaderTextImage: {
    width: width,
    flexDirection: "row",
    paddingTop: 10,
    justifyContent: "space-evenly"
  },
  HeaderTextContainer: {
    width: 250,
    height: 100,
    flexDirection: "column",
    paddingRight: 20
  },
  HeaderText: {
    color: "#000000",
    fontSize: 24, //H5
    textAlign: "left",
    fontWeight: "600"
  },
  SubHeaderText: {
    color: "#686868",
    fontSize: 18, //Subtitle
    paddingTop: 18,
    textAlign: "left",
    fontWeight: "400"
  },
  articleHeaderImage: {
    width: 100,
    height: 100,

    marginTop: 10
  },
  AuthorTimeBookmark: {
    width: width,
    height: 150,
    flexDirection: "column",
    paddingLeft: 20
  },
  AuthorNameText: {
    color: "#000000",
    fontSize: 18,
    paddingTop: 10,
    textAlign: "left",
    fontWeight: "400"
  },
  TimeReadBookmarkContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between"
  },
  TimeReadContainer: {
    flexDirection: "row",
    alignItems: "flex-start"
  },
  starIcon: {
    height: 14,
    width: 14,
    marginTop: 15,
    marginLeft: 8
  },
  dateTextStyle: {
    color: "#686868",
    fontSize: 16,
    paddingTop: 12,
    textAlign: "left"
  },
  readTimeText: {
    color: "#686868",
    fontSize: 16,
    paddingTop: 12,
    paddingLeft: 12
  },
  BookmarkIcon: {
      paddingRight : 20
  }
});
