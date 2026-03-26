import { Button, StyleSheet, Text, View } from "react-native";
import AppText from "./src/components/AppText";
import { AppColors } from "./src/styles/colors";
import AppSafeView from "./src/views/AppSafeView";
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function App() {
  return (
    <>
      <FlashMessage position={"top"} />
      <AppSafeView style={styles.container}>
        <AppText variants="medium">Hello </AppText>
        <AppText variants="bold">Hi there</AppText>
        <Button
          title="Hello World"
          onPress={() => {
            showMessage({
              message: "Hello there how are you?",
              color: "blue",
              type: "success",
            });
          }}
        />
      </AppSafeView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
