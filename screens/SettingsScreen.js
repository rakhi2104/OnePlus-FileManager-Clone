import React from "react";
import { Text } from "react-native-elements";
import SafeView from "../components/SafeView";

const SettingsScreen = (props) => {
  return (
    <SafeView>
      <Text h1>Settings</Text>
      <Text h4> {props?.params?.data}</Text>
    </SafeView>
  );
};

export default SettingsScreen;
