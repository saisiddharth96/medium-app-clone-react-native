import React from "react";
import { Text, TouchableHighlight } from "react-native";

export class MonoText extends React.Component {
  render() {
    return (
      <Text
        {...this.props}
        style={[this.props.style, { fontFamily: "space-mono" }]}
      />
    );
  }
}

export class DrawerComponentsText extends React.Component {
  render() {
    return (
      <TouchableHighlight {...this.props}>
        <Text
          {...this.props}
          style={[
            this.props.style,
            {
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 30,
              fontSize: 16,
              fontWeight: "400"
            }
          ]}
        />
      </TouchableHighlight>
    );
  }
}

export class MemberText extends React.Component {
  render() {
    return (
      <TouchableHighlight {...this.props}>
        <Text
          {...this.props}
          style={[
            this.props.style,
            {
              borderTopWidth: 1,
              paddingTop: 20,
              paddingBottom: 20,
              paddingLeft: 30,
              borderBottomWidth: 1,
              borderColor: "#dbdbdb",
              color: "#259e35",
              fontSize: 18,
              marginTop: 5,
              marginBottom: 5,
              fontWeight: "400"
            }
          ]}
        />
      </TouchableHighlight>
    );
  }
}
