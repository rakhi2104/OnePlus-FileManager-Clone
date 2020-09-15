import React from "react";
import { Text } from "react-native-elements";
import SafeView from "../components/SafeView";

const ProfileScreen = (props) => {
  const { navigation } = props;
  navigation.setOptions({
    title: "Profile",
  });
  return (
    <SafeView>
      <Text h1>Profile Screen </Text>
    </SafeView>
  );
};

export default ProfileScreen;
