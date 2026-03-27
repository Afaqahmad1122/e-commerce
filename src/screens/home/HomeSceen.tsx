import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import HomeHeader from "../../components/heeaders/HomeHeader";

const HomeSceen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <Text>HomeSceen</Text>
    </AppSafeView>
  );
};

export default HomeSceen;

const styles = StyleSheet.create({});
