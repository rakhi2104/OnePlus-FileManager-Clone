import React from "react";
import { Text, View } from "react-native";
import { ListItem } from "react-native-elements";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import IconListItem from "../components/IconListItem";
import SafeView from "../components/SafeView";
import StatsCard from "../components/StatsCard";
import { FILE_CATEGORIES, STATS, TOTAL, USED_SIZE } from "../constants/data";
import { palette, sizes } from "../constants/theme";

const HomeScreen = (props) => {
  const { navigation } = props;
  return (
    <SafeView style={{ paddingHorizontal: sizes.xs / 2 }}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(palette.card, false)}
      >
        <ListItem
          containerStyle={{
            backgroundColor: palette.black,
            paddingStart: 0,
            paddingEnd: 0,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
          onPress={() => {
            navigation.navigate("Storage Information");
          }}
        >
          <ListItem.Title
            style={{
              color: palette.gray,
              fontSize: sizes.xs - 2,
            }}
          >
            Available {USED_SIZE} GB / {TOTAL} GB
          </ListItem.Title>
          <ListItem.Chevron color={palette.gray} />
        </ListItem>
      </TouchableNativeFeedback>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignContent: "center",
          justifyContent: "space-between",
          marginBottom: sizes.sm,
        }}
      >
        {STATS.map((stat, index) => (
          <StatsCard {...stat} key={index} />
        ))}
      </View>

      <View
        style={{
          display: "flex",
          marginBottom: sizes.xxl,
        }}
      >
        {FILE_CATEGORIES.map((item, index) => (
          <IconListItem {...item} key={index} />
        ))}
      </View>
    </SafeView>
  );
};

export default HomeScreen;
