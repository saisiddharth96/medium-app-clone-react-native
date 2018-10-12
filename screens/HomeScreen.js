import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Image } from "react-native";
import { AppLoading, Asset, Font } from "expo";

import TopScrollContainer from "./TopScrollContainer.js";
import VerticalScrollContainer from "./VerticalScrollContainer.js";
import Header from "../components/Header.js";

import ArticleScreen from "./ArticleScreen";

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

// export default class HomeScreen extends React.Component {
//   state = {
//     isReady: false
//   };

//   async _loadAssetsAsync() {
//     const imageAssets = cacheImages([
//       require("../assets/images/back.png"),
//       require("../assets/images/icon.png"),
//       require("../assets/images/medium-logo.png"),
//       require("../assets/images/menu-icon.png"),
//       require("../assets/images/more-options-menu.png"),
//       require("../assets/images/notification.png"),
//       require("../assets/images/placeholder.png"),
//       require("../assets/images/profile-image-holder.png"),
//       require("../assets/images/search.png")
//     ]);
//     await Promise.all([...imageAssets]);
//   }
//   render() {
//     if (!this.state.isReady) {
//       return (
//         <AppLoading
//           startAsync={this._loadAssetsAsync}
//           onFinish={() => this.setState({ isReady: true })}
//           onError={console.warn}
//         />
//       );
//     }
//     return (
//       <SafeAreaView style={styles.container}>
//         <Header bgColor="#000" HeaderText = "Home"/>
//         <ScrollView showsVerticalScrollIndicator={false}>
//           <TopScrollContainer />
//           <VerticalScrollContainer />
//         </ScrollView>
//       </SafeAreaView>
//     );
//   }
// }

export default class HomeScreen extends React.Component {
  render() {
    return <ArticleScreen />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  leftOptions: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 15
  },
  navImage: {
    height: 35,
    width: 35,
    resizeMode: "contain"
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
  headerContainer: {
    flexDirection: "row",
    height: 80,
    backgroundColor: "#000000",
    justifyContent: "space-between"
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
