import { TouchableOpacity, StyleSheet, Text } from "react-native";

const TertiaryButton = (props) => {
  return (
    <TouchableOpacity style={styles.tertiaryButton} onPress={props.onPress}>
      <Text style={styles.onTertiaryButton}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tertiaryButton: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    backgroundColor: "#FBFAFF",
    borderRadius: 100,
    justifyContent: "center",
    margin: 16,
    position: "relative",
    alignSelf: "flex-end"
  },
  onTertiaryButton: {
    color: "black",
    fontSize: 18,
    fontWeight: "800",
    paddingVertical: 16,
    paddingHorizontal: 32
  },
});

export default TertiaryButton;
