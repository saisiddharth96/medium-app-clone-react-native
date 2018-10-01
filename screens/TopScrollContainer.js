import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import HorizontalCard from "./HorizontalCards.js";

export default class TopScrollContainer extends Component {
  render() {
    return (
      <View style={styles.topContainer}>
        <FlatList
          horizontal = {true}
          data={[{ key: "a" }, { key: "b" }, { key: "c" }, { key: "d" }, { key: "e" }]}
          renderItem={({ item }) => <HorizontalCard>{item.key}</HorizontalCard>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topContainer: {
    paddingTop: 10,
    alignItems: "flex-start",
    paddingLeft: 10,
    backgroundColor : "#eaeaea",
    height : 260
  }
});
