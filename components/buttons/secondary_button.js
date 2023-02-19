import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";

const SecondaryButton = (props) => {
  return (
    <TouchableOpacity style={style.secondaryButton} onPress={props.onPress}>
      <Text style={style.onSecondaryButton}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  secondaryButton: {
    backgroundColor: "#FDDE39",
    borderRadius: 100,
    width: "100%",
    alignSelf: "center"
  },
  onSecondaryButton: {
    color: "#030303",
    margin: 16,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default SecondaryButton;
