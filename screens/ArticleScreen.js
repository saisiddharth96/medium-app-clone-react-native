import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Header from "../components/Header.js";

export default class ArticleScreen extends Component {
  render() {
    return (
      <View>
        <Header bgColor = "#f9f9f9" isBackButton />
      </View>
    )
  }
}

const styles= StyleSheet.create({

});