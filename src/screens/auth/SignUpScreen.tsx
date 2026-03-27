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
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigation = useNavigation();
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
      <AppTextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      />
      <AppText style={styles.appName}>Start E-commerce</AppText>

      <AppButton title="Create new account" onPress={() => {}} />
      <AppButton
        title="Go to sign in"
        style={styles.loginButton}
        textColor={AppColors.primary}
        onPress={() => navigation.navigate("SignInScreen" as never)}
      />
    </AppSafeView>
  );
};

export default SignUpScreen;

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
  loginButton: {
    marginTop: vs(15),
    backgroundColor: AppColors.white,
    borderWidth: 1,
    borderColor: AppColors.primary,
  },
});
