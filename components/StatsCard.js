import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon, Text } from "react-native-elements";
import TouchableScale from "react-native-touchable-scale";
import { palette, sizes } from "../constants/theme";

const styles = StyleSheet.create({
  title: {
    fontSize: sizes.xs,
    fontWeight: "bold",
    marginTop: sizes.xs,
    marginBottom: sizes.xs / 6,
  },
  description: {
    fontSize: sizes.xs - 4,
    fontWeight: "normal",
    color: palette.gray,
  },
});

const StatsCard = ({ icon, color, value, title }) => {
  return (
    <View style={{ flexBasis: "32%" }}>
      <TouchableScale activeScale={0.95} tension={100} friction={90}>
        <TouchableOpacity activeOpacity={0.75}>
          <View
            style={{
              paddingVertical: sizes.sm * 1.25,
              paddingHorizontal: sizes.xs * 0.75,
              backgroundColor: palette.card,
              borderRadius: sizes.xs / 2,
              marginBottom: sizes.xs / 2,
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Icon
              color={color}
              type="feather"
              name={icon}
              size={sizes.md}
              style={{ minHeight: sizes.xl }}
            />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{value} items</Text>
          </View>
        </TouchableOpacity>
      </TouchableScale>
    </View>
  );
};

export default StatsCard;
