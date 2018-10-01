import React from "react";
import { View, StyleSheet,FlatList } from "react-native";

import VerticalCards from "./VerticalCards.js";

const VerticalScrollContainer = () => {
  return (
    <View style={styles.Container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    alignItems: "flex-start"
  }
});

export default VerticalScrollContainer;
