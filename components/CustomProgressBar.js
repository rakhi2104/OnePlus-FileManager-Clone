import React from "react";
import { View } from "react-native";
import { palette } from "../constants/theme";
import * as Animatable from "react-native-animatable";

const progressBarTransition = (value) => ({
  0: {
    width: "0%",
  },
  0.8: {
    width: value * 0.95 + "%",
  },
  1: {
    width: value + "%",
  },
});

const CustomProgressBar = ({
  color,
  progress,
  animated = false,
  large = false,
}) => {
  return (
    <View
      style={{
        minHeight: 24,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          height: large ? 8 : 2,
          width: "100%",
          backgroundColor: palette.card,
        }}
      >
        {!animated ? (
          <View
            style={{
              width: progress * 100 + "%",
              backgroundColor: color,
              top: 0,
              left: 0,
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          />
        ) : (
          <Animatable.View
            animation={progressBarTransition(progress * 100)}
            duration={300}
            style={{
              width: progress * 100 + "%",
              backgroundColor: color,
              top: 0,
              left: 0,
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          />
        )}
      </View>
    </View>
  );
};

export default CustomProgressBar;
