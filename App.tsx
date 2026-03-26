import { StyleSheet, Text, View } from "react-native";
import AppText from "./src/components/AppText";
import { AppColors } from "./src/styles/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <AppText variants="medium">Hello </AppText>
      <AppText variants="bold">Hi there</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
