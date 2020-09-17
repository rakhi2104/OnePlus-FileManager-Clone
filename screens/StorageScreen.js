// import { ProgressBar } from "@react-native-community/progress-bar-android";
import React, { useEffect, useRef, useState } from "react";
import { View, Animated } from "react-native";
import { Text } from "react-native-elements";
import CustomProgressBar from "../components/CustomProgressBar";
import SafeView from "../components/SafeView";
import StorageProgress from "../components/StorageProgress";
import { STATS, TOTAL, USED_SIZE } from "../constants/data";
import { palette, sizes } from "../constants/theme";

const StorageScreen = (props) => {
  const [storageValue, setStorageValue] = useState(0);
  const animvationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    function init() {
      animvationValue.addListener(({ value }) => {
        setStorageValue(Math.round((storageValue + value) * 100) / 100);
      });
      Animated.timing(animvationValue, {
        toValue: USED_SIZE,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
    init();
    return () => {
      animvationValue.removeAllListeners();
    };
  }, []);

  return (
    <SafeView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          alignContent: "flex-end",
        }}
      >
        <Animated.Text
          style={{
            fontWeight: "normal",
            fontSize: sizes.xxl * 1.25,
            margin: 0,
            padding: 0,
            color: palette.white,
          }}
        >
          {storageValue}
        </Animated.Text>
        <Text
          style={{
            marginBottom: sizes.xs * 0.6,
            marginHorizontal: sizes.xs * 0.4,
          }}
        >
          GB used
        </Text>
      </View>
      <CustomProgressBar
        animated
        progress={0.58}
        color={palette.primary}
        large
      />
      <Text style={{ color: palette.gray, fontSize: sizes.xs - 2 }}>
        Total Storage {TOTAL} GB
      </Text>

      <View style={{ marginVertical: sizes.xxl }}>
        {STATS.sort((a, b) => a.size < b.size).map((item, index) => (
          <StorageProgress
            key={index}
            index={index}
            value={item.size}
            color={item.color}
            title={item.title}
            total={TOTAL}
          />
        ))}
      </View>
    </SafeView>
  );
};

export default StorageScreen;
