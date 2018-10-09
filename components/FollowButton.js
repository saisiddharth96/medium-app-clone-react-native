import React, { Component } from "react";
import { View, TouchableHighlight, Text, StyleSheet } from "react-native";

class FollowButton extends Component {
  render() {
    return (
      <TouchableHighlight style={styles.container} {...this.props}>
        <Text style={[styles.followText]}>Follow</Text>
      </TouchableHighlight>
    );
  }
}
export default FollowButton;

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 80,
    borderColor: "#1bba00",
    borderWidth: 2,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  followText: {
    fontSize: 16,
    color: "#1bba00"
  }
});
