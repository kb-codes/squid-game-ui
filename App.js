import React, { useState } from "react";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import RootStackNavigation from "./src/navigations/RootStackNavigator";

const fetchFonts = () => {
  return Font.loadAsync({
    Gemunu: require("./fonts/GemunuLibre-SemiBold.ttf"),
    FontdinerSwanky: require("./fonts/FontdinerSwanky-Regular.ttf"),
  });
};
export default function App() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setLoaded(true)}
        onError={(error) => {
          console.log(error);
        }}
      />
    );
  }
  return <RootStackNavigation />;
}
