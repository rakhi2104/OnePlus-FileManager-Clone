import React from "react";
import { Icon, ListItem, ThemeProvider } from "react-native-elements";
import { palette, sizes, theme } from "../constants/theme";

const IconListItem = ({ icon, title, subtitle }) => {
  return (
    <ListItem
      containerStyle={{
        backgroundColor: palette.black,
      }}
    >
      <Icon name={icon} type="feather" color={palette.gray} />
      <ListItem.Content>
        <ListItem.Title>{title}</ListItem.Title>
        {subtitle && (
          <ListItem.Subtitle
            style={{ color: palette.gray, fontSize: sizes.xs - 2 }}
          >
            {subtitle}
          </ListItem.Subtitle>
        )}
      </ListItem.Content>
    </ListItem>
  );
};

export default IconListItem;
