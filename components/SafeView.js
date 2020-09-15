import React from "react";
import { ScrollView } from "react-native";
import { ThemeProvider } from "react-native-elements";
import { palette, sizes, theme } from "../constants/theme";

const SafeView = ({ children, ...otherProps }) => {
  const { style } = otherProps;
  return (
    <ThemeProvider theme={theme}>
      <ScrollView
        style={{
          paddingHorizontal: sizes.md,
          paddingVertical: sizes.xl,
          flex: 1,
          backgroundColor: palette.black,
          ...style,
        }}
      >
        {children}
      </ScrollView>
    </ThemeProvider>
  );
};

export default SafeView;
