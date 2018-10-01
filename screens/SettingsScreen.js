import React from 'react';
import {View, Text} from "react-native"

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    return (
      <View style = {{flex : 1, justifyContent : "center", alignItems : "center"}}>
      <Text style = {{fontSize : 24}}>Settings Page</Text>
      </View>
    );
  }
}
