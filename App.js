import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, ThemeProvider } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, ProgressBarAndroidBase, View } from "react-native";
import { colors, Icon } from "react-native-elements";
import { TouchableHighlight } from "react-native-gesture-handler";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { palette, sizes, theme } from "./constants/theme";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import StorageScreen from "./screens/StorageScreen";

const BOTTOM_BAR_HEIGHT = sizes.xs * 4;
const TOP_BAR_HEIGHT = BOTTOM_BAR_HEIGHT * 1.5;

const Tabs = createBottomTabNavigator();
const Stack = createSharedElementStackNavigator();

const TabsNavigation = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Explore"
      tabBarOptions={{
        activeTintColor: palette.primary,
        style: {
          height: BOTTOM_BAR_HEIGHT,
          backgroundColor: palette.black,
          borderTopWidth: 0.5,
          borderTopColor: colors.grey0,
        },
        inactiveTintColor: colors.grey2,
        tabStyle: {
          paddingBottom: sizes.xs / 2,
        },
      }}
    >
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" type="feather" color={color} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" type="feather" color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const getHeader = (route) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || "Home";

  switch (routeName) {
    case "Profile":
      return { headerShown: false };
    case "Explore":
    case "Home":
      return { headerShown: true, headerTitle: "File Manager" };
    default:
      return { headerShown: false };
  }
};

const TopBarIcon = ({ iconName, color, onPress }) => {
  return (
    <TouchableHighlight style={{ marginRight: sizes.xs }}>
      <Icon
        color={color}
        size={sizes.md}
        type="feather"
        name={iconName}
        onPress={onPress}
      />
    </TouchableHighlight>
  );
};

const getHeaderRightIcons = (route) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || "Home";

  const IconsRight = () => (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <TopBarIcon
        color={palette.white}
        iconName={"search"}
        onPress={() => {}}
      />
      <TopBarIcon
        color={palette.white}
        iconName={"more-vertical"}
        onPress={() => {}}
      />
    </View>
  );

  switch (routeName) {
    case "Profile":
      return null;
    case "Explore":
    case "Home":
      return IconsRight;
    case "Storage Information":
      return "Storage information";
    default:
      return null;
  }
};

const StackNavigation = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: palette.white,
        headerTitleStyle: {
          fontSize: sizes.sm,
          color: palette.white,
        },
        headerRightContainerStyle: {
          alignItems: "center",
          alignContent: "center",
        },
        headerStyle: {
          height: TOP_BAR_HEIGHT,
          backgroundColor: palette.black,
          borderBottomWidth: 0.5,
          borderBottomColor: colors.grey0,
        },
      }}
    >
      <Stack.Screen
        name="Explore"
        component={TabsNavigation}
        options={({ route }) => {
          return {
            headerRight: getHeaderRightIcons(route),
            ...getHeader(route),
          };
        }}
      />
      <Stack.Screen
        name="Storage Information"
        component={StorageScreen}
        options={{
          cardStyleInterpolator: ({ current }) => ({
            containerStyle: {
              opacity: current.progress,
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [-2, 0, 0],
                  }),
                  scale: current.progress.interpolate({
                    inputRange: [0.99999, 1],
                    outputRange: [1, 1],
                  }),
                },
              ],
            },
          }),
        }}
      />
    </Stack.Navigator>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <StatusBar style="light" translucent backgroundColor="transparent" />
        <StackNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
