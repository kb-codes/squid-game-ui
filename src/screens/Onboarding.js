import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const width = Dimensions.get("window").width;
export default function Onboarding({ navigation }) {
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
          <Image
            source={require("../../assets/logo.png")}
            style={{ width: 299, height: 128 }}
          />

          <Image
            source={require("../../assets/anime.png")}
            style={{ width: 391, height: 292, marginTop: 10 }}
          />
          <LinearGradient
            colors={[
              "rgba(255, 244, 244, 0.3)",
              "rgba(255, 215, 215, 0.21)",
              "rgba(255, 191, 191, 0)",
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.onboardingWrapper}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 30,
              }}
            >
              <View
                style={{
                  backgroundColor: "#DDB6B6",
                  width: 6,
                  height: 6,
                  borderRadius: 3,
                  margin: 5,
                }}
              ></View>
              <View
                style={{
                  backgroundColor: "#DDB6B6",
                  width: 6,
                  height: 6,
                  borderRadius: 3,
                  margin: 5,
                }}
              ></View>
              <View
                style={{
                  backgroundColor: "white",
                  width: 25,
                  height: 6,
                  borderRadius: 3,
                  margin: 5,
                }}
              ></View>
            </View>
            <Text style={styles.headerText}>
              Play the game with your own risk
            </Text>
            <Text style={styles.subText}>This game becomes yo billioner</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("TabNavigator");
              }}
              style={{
                position: "absolute",
                bottom: -40,
                alignSelf: "center",
              }}
            >
              <LinearGradient
                colors={["rgba(255, 191, 191, 0.42)", "rgba(255, 191, 191, 0)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.rightArrowWrapper}
              >
                <Image
                  source={require("../../assets/right-arrow.png")}
                  style={{ width: 13, height: 26 }}
                />
              </LinearGradient>
            </TouchableOpacity>
          </LinearGradient>
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
  },
  onboardingWrapper: {
    width: width - 40,
    height: 300,
    borderRadius: 44,
    alignItems: "center",
  },
  rightArrowWrapper: {
    height: 90,
    width: 90,
    borderRadius: 90 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    marginTop: 30,
    fontFamily: "Gemunu",
    color: "white",
    fontSize: 33,
    textAlign: "center",
    width: width / 1.5,
  },
  subText: {
    fontFamily: "Gemunu",
    color: "white",
    fontSize: 9,
    opacity: 0.65,
    marginTop: 10,
  },
});
