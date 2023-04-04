import React from "react";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const IconButton = (props) => {
  return (
    <TouchableOpacity style={style.iconButton} onPress={props.onPress}>
      <Image source={props.icon} />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  iconButton: {
    flexWrap: "wrap",
    alignContent: "center",
    width: 36,
    height: 36
  },
});

export default IconButton;
