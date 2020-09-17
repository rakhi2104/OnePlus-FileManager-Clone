import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import { palette, sizes } from "../constants/theme";
import CustomProgressBar from "./CustomProgressBar";

const StorageProgress = (props) => {
  const { value = 0, color, title, total, index } = props;
  const transition = {
    0: {
      translateY: 200,
      opacity: 0,
    },
    1: {
      translateY: 0,
      opacity: 1,
    },
  };

  return (
    <Animatable.View
      animation={transition}
      delay={25 * (index + 2)}
      easing="ease-out-circ"
      duration={100}
      style={{ marginBottom: sizes.md }}
      useNativeDriver
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <Text style={{ color: palette.white, padding: 0, fontSize: sizes.sm }}>
          {title}
        </Text>
        <Text
          style={{ color: palette.gray, padding: 0, fontSize: sizes.xs - 2 }}
        >
          {value} GB
        </Text>
      </View>
      <CustomProgressBar progress={value / total} color={color} />
    </Animatable.View>
  );
};

export default StorageProgress;
