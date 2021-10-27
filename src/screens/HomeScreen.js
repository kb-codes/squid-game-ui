import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar,
  View,
  Text,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const width = Dimensions.get("window").width;

import Games from "../components/Games";

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["rgba(71, 32, 32, 1)", "rgba(212, 0, 0, 0.79)"]}
      style={styles.container}
    >
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.container}
      >
        <View style={styles.mainWrapper}>
          <View style={{ width: 60 }}>
            <Image
              source={require("../../assets/menu.png")}
              style={{ width: 24, height: 24 }}
            />
          </View>
          <Image
            source={require("../../assets/home_logo.png")}
            style={{ width: 86, height: 28 }}
          />
          <View style={{ width: 60 }}>
            <Image
              source={require("../../assets/user.png")}
              style={{ width: 52, height: 52 }}
            />
          </View>
        </View>

        <View style={styles.userGameWrapper}>
          <Image
            source={require("../../assets/profile_image.png")}
            style={{
              width: 145,
              height: 216,
              position: "absolute",
              bottom: -1,
              left: -1,
            }}
          />
          <View
            style={{ marginRight: width / 5, width: width / 3, padding: 10 }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 28,
                fontFamily: "FontdinerSwanky",
              }}
            >
              # 1 /<Text style={{ fontSize: 22 }}>456</Text>
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 10,
                fontFamily: "Gemunu",
              }}
            >
              Player 456 wins the price money 45.6 bilion won
            </Text>
          </View>
        </View>

        <View style={{ marginHorizontal: 20 }}>
          <Text
            style={{
              fontSize: 30,
              color: "white",
              fontFamily: "Gemunu",
              paddingTop: 15,
            }}
          >
            Games
          </Text>

          <Games
            image={require("../../assets/game1.png")}
            name="Red light Green light"
            game={1}
            players={456}
          />
          <Games
            image={require("../../assets/game2.png")}
            name=" Sugar Honeycombs"
            game={2}
            players={178}
          />
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainWrapper: {
    alignItems: "center",
    marginTop: StatusBar.currentHeight + 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  userGameWrapper: {
    marginHorizontal: 20,
    backgroundColor: "rgba(244, 40, 76, 0.51)",
    borderRadius: 35,
    height: 150,
    marginTop: 45,
    borderWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 1)",
    alignItems: "flex-end",
  },
});
