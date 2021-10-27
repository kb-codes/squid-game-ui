import React from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";

const width = Dimensions.get("window").width;

export default class Games extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ImageBackground
        source={this.props.image}
        style={styles.game}
        borderRadius={40}
      >
        <Text
          style={{
            fontSize: 20,
            color: "white",
            fontFamily: "Gemunu",
          }}
        >
          {this.props.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            opacity: 0.7,
          }}
        >
          <Text
            style={{
              fontSize: 10,
              color: "white",
              fontFamily: "Gemunu",
              paddingHorizontal: 3,
            }}
          >
            Game {this.props.game}
          </Text>
          <Text
            style={{
              fontSize: 10,
              color: "white",
              fontFamily: "Gemunu",
              paddingHorizontal: 3,
            }}
          >
            {this.props.players} players
          </Text>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  game: {
    width: width - 40,
    height: width - 210,
    justifyContent: "flex-end",
    padding: 5,
    paddingLeft: 20,
    marginVertical: 10,
  },
});
