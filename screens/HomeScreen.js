import React from "react";
import { View } from "react-native";
import { Icon, Text } from "react-native-elements";
import { TouchableHighlight } from "react-native-gesture-handler";
import SafeView from "../components/SafeView";
import StatsCard from "../components/StatsCard";
import { palette, sizes } from "../constants/theme";

const getRandomValue = (min = 0, max = 1000) => {
  return Math.round(Math.random() * max);
};

const STATS = [
  {
    icon: "file-text",
    title: "Documents",
    iconColor: "#f57c36",
    value: getRandomValue(),
  },
  {
    icon: "download",
    title: "Downloads",
    iconColor: "#46c9d5",
    value: getRandomValue(),
  },
  {
    icon: "clock",
    title: "Recents",
    iconColor: "#c8d936",
    value: getRandomValue(),
  },
  {
    icon: "image",
    title: "Images",
    iconColor: "#46bca5",
    value: getRandomValue(),
  },
  {
    icon: "video",
    title: "Videos",
    iconColor: "#5877ea",
    value: getRandomValue(),
  },
  {
    icon: "music",
    title: "Audio",
    iconColor: "#d82b65",
    value: getRandomValue(),
  },
];

const HomeScreen = (props) => {
  return (
    <SafeView style={{ paddingHorizontal: 4 }}>
      <TouchableHighlight>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "baseline",
            paddingHorizontal: sizes.xs / 4,
          }}
        >
          <Text style={{ color: palette.gray }}>
            Available 69.46 GB / 128 GB
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ color: palette.gray, fontSize: sizes.xs * 0.75 }}>
              Details
            </Text>
            <Icon
              name="chevron-right"
              type="feather"
              color={palette.gray}
              size={sizes.xs}
            />
          </View>
        </View>
      </TouchableHighlight>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignContent: "center",
          justifyContent: "space-between",
          marginVertical: sizes.xs,
        }}
      >
        {STATS.map((stat, index) => (
          <StatsCard {...stat} key={index} />
        ))}
      </View>
    </SafeView>
  );
};

export default HomeScreen;
