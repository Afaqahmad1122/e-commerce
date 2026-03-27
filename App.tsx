import React, { useState } from "react";
import { StyleSheet } from "react-native";

import AppSafeView from "./src/components/views/AppSafeView";
import FlashMessage, { showMessage } from "react-native-flash-message";

import SignInScreen from "./src/screens/auth/SignInScreen";

export default function App() {
  const [email, setEmail] = useState("");

  return (
    <>
      <FlashMessage position={"top"} />
      <AppSafeView style={styles.container}>
        <SignInScreen />
      </AppSafeView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
