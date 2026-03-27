import {
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from "react-native";
import React, { FC } from "react";
import AppText from "../text/AppText";
import { AppColors } from "../../styles/colors";
import { s, vs } from "react-native-size-matters";

interface AppButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle | ViewStyle[];
  styleTitle?: TextStyle | TextStyle[];
  disabled?: boolean;
}

const AppButton: FC<AppButtonProps> = ({
  onPress,
  title,
  backgroundColor = AppColors.primary,
  textColor = AppColors.white,
  style,
  styleTitle,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
      style={[
        styles.button,
        {
          backgroundColor: disabled ? AppColors.disabledGray : backgroundColor,
        },
        style,
      ]}
    >
      <AppText
        style={[
          styles.textTitle,
          { color: textColor },
          ...(Array.isArray(styleTitle)
            ? styleTitle
            : styleTitle
              ? [styleTitle]
              : []),
        ]}
      >
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: vs(40),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: s(25),
    alignSelf: "center",
  },

  textTitle: {
    fontSize: s(16),
  },
});
