import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Links"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 24 }}> Links Page </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});
