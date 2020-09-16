import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon, Text } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
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
  },
});

const StatsCard = ({ icon, iconColor, value, title }) => {
  return (
    <View style={{ flexBasis: "32%" }}>
      <TouchableOpacity>
        <View
          style={{
            paddingVertical: sizes.xs,
            paddingHorizontal: sizes.xs * 0.75,
            backgroundColor: palette.card,
            borderRadius: sizes.xs / 2,
            marginBottom: sizes.xs / 2,
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Icon
            color={iconColor}
            type="feather"
            name={icon}
            size={sizes.lg}
            style={{ minHeight: sizes.xl }}
          />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{value} items</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default StatsCard;
