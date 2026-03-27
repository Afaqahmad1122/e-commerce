import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import HomeHeader from "../../components/heeaders/HomeHeader";
import { s } from "react-native-size-matters";
import { AppFonts } from "../../styles/fonts";

const HomeSceen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <Text style={{ fontFamily: AppFonts.Bold, fontSize: s(20) }}>
        HomeSceen
      </Text>
      <Text style={{ fontFamily: AppFonts.Medium, fontSize: s(16) }}>
        HomeSceen
      </Text>
    </AppSafeView>
  );
};

export default HomeSceen;

const styles = StyleSheet.create({});
