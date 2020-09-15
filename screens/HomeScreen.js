import React from "react";
import { Dimensions } from "react-native";
import { Button, Text, withTheme } from "react-native-elements";
import SafeView from "../components/SafeView";
import { sizes } from "../constants/theme";

const { width, height } = Dimensions.get("window");

const HomeScreen = (props) => {
  const { navigation } = props;

  return (
    <SafeView>
      <Text h1 style={{ marginBottom: sizes.xxl }}>
        Welcome
      </Text>
      <Button
        title="Go to Settings"
        onPress={() =>
          navigation.navigate("Settings", { data: "Hello from Home Screen" })
        }
      />
    </SafeView>
  );
};

export default withTheme(HomeScreen);
