import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

import FlashMessage, { showMessage } from "react-native-flash-message";
import { useFonts } from "expo-font";
import MainAppStack from "./src/navigation/MainAppStack";

export default function App() {
  const [fontLoaded] = useFonts({
    "Nunito-Bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Medium": require("./src/assets/fonts/Nunito-Medium.ttf"),
  });

  if (!fontLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <NavigationContainer>
      <FlashMessage position={"top"} />
      <MainAppStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
