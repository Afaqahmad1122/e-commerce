import { StyleSheet, Text, TextProps, TextStyle } from "react-native";
import React, { FC } from "react";
import { s } from "react-native-size-matters";
import { AppFonts } from "../../styles/fonts";

interface AppTextProps extends TextProps {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
  variants?: "bold" | "medium";
}

const AppText: FC<AppTextProps> = ({
  children,
  style,
  variants = "medium",
  ...rest
}) => {
  return (
    <Text {...rest} style={[styles[variants], style]}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  bold: {
    fontSize: s(18),
    color: "#000",
    fontFamily: AppFonts.Bold,
  },
  medium: {
    fontSize: s(16),
    color: "#000",
    fontFamily: AppFonts.Medium,
  },
});
