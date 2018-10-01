import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const HorizontalCard = () => {
  return (
    <View style={styles.cardContainer} borderRadius={8} elevation={10}>
      <Image
        style={styles.articleHeaderImage}
        source={require("../assets/images/placeholder.png")}
        borderTopRightRadius={8}
        borderTopLeftRadius={8}
        resizeMode="cover"
      />
      <View style={styles.HeadersContainer}>
        <Text style={styles.HeaderText} numberOfLines={2}>
          lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit
        </Text>
        <Text style={styles.SubheaderText} numberOfLines={1}>
          lorem ipsum dolor sit
        </Text>
        <View style={styles.timeContainer}>
          <Text style={styles.dateTextStyle}>Date hours ago</Text>
          <Text style={styles.readTimeText}>x mins read</Text>
          <Image
            source={require("../assets/images/star.png")}
            style={styles.starIcon}
            fadeDuration={0}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 350,
    height: 230,
    backgroundColor: "#f9f9f9",
    marginLeft: 12,
    marginRight : 12
  },
  HeadersContainer: {
    width: 350,
    height: 80,
    paddingLeft: 8,
    paddingRight: 5
  },
  timeContainer: {
    height: 75,
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#f9f9f9"
  },
  articleHeaderImage: {
    width: 350,
    height: 75
  },
  HeaderText: {
    color: "#000000",
    fontSize: 24, //H5
    textAlign: "left",
    fontWeight: "600"
  },
  SubheaderText: {
    color: "#000000",
    fontSize: 18, //Subtitle
    paddingTop: 8,
    textAlign: "left",
    fontWeight: "400"
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
  starIcon: {
    height: 14,
    width: 14,
    marginTop: 15,
    marginLeft: 8
  }
});

export default HorizontalCard;
