import React, { useState } from "react";
import { StyleSheet } from "react-native";

import AppSafeView from "./src/components/views/AppSafeView";
import FlashMessage, { showMessage } from "react-native-flash-message";

import AppTextInput from "./src/components/inputs/AppTextInput";

export default function App() {
  const [email, setEmail] = useState("");

  return (
    <>
      <FlashMessage position={"top"} />
      <AppSafeView style={styles.container}>
        <AppTextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter email"
          keyboardType="email-address"
        />
      </AppSafeView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
