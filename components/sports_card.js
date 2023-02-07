import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

const SportCards = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <Image source={props.source} />
        <Text style={styles.subtitleMedium}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SportCards;

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    backgroundColor: "#fbfaff",
    flexWrap: "wrap",
    alignItems: "center",
    alignSelf: "baseline",
    justifyContent: "center",
    borderRadius: 16,
    padding: 16,
    margin: 8,
    borderWidth: 1,
    borderColor: "grey"
  },
  subtitleMedium: {
    marginHorizontal: 64,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
  },
});
