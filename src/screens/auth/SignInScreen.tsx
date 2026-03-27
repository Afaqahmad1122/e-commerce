import { Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import AppSafeView from "../../components/views/AppSafeView";
import { paddingHorizontal } from "../../styles/sharedStyles";
import { IMAGES } from "../../constants/images-paths";
import { s, vs } from "react-native-size-matters";
import AppTextInput from "../../components/inputs/AppTextInput";
import AppText from "../../components/text/AppText";
import AppButton from "../../components/buttons/AppButton";
import { AppColors } from "../../styles/colors";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AppSafeView style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo} />
      <AppTextInput value={email} onChangeText={setEmail} placeholder="Email" />
      <AppTextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
      />
      <AppText style={styles.appName}>Start E-commerce</AppText>

      <AppButton title="Login" onPress={() => {}} />
      <AppButton
        title="Sign Up"
        style={styles.regiserButton}
        textColor={AppColors.primary}
        onPress={() => {}}
      />
    </AppSafeView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: paddingHorizontal,
  },
  logo: {
    width: s(150),
    height: s(150),
    marginBottom: vs(30),
  },

  appName: {
    fontSize: s(16),
    marginBottom: vs(15),
  },

  regiserButton: {
    marginTop: vs(15),
    backgroundColor: AppColors.white,
    borderWidth: 1,
    borderColor: AppColors.primary,
  },
});
