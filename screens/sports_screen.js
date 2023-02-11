import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import IconButton from "../components/buttons/icon_button";
import SecondaryButton from "../components/buttons/secondary_button";

const SportsScreen = ({ navigation, route }) => {
  const { sport } = route.params
  const navigate = (route) => {
    navigation.navigate(route);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton
          icon={require("../assets/arrow_back.png")}
          onPress={() => navigate("HomeScreen")}
        />
      </View>
      <ScrollView onScroll={()=>{}} contentContainerStyle={styles.content}>
        <Text style={styles.titleLarge}>{sport.name}</Text>
        <View style={styles.bigVerticalSpacer}/>
        <Text style={styles.subtitle}>Definisi</Text>
        <View style={styles.smallVerticalSpacer}/>
        <Text style={styles.normalText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <View style={styles.smallVerticalSpacer}/>
        <Text style={styles.subtitle}>Ukuran Lapangan</Text>
        <View style={styles.smallVerticalSpacer}/>
        <Text style={styles.normalText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <View style={styles.smallVerticalSpacer}/>
        <Text style={styles.subtitle}>Juri yang menilai</Text>
        <View style={styles.smallVerticalSpacer}/>
        <Text style={styles.normalText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <View style={styles.smallVerticalSpacer}/>
        <Text style={styles.subtitle}>Seragam Pertandigan</Text>
        <View style={styles.smallVerticalSpacer}/>
        <Text style={styles.normalText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <View style={styles.smallVerticalSpacer}/>
        <Text style={styles.subtitle}>Peraturan Pertandigan</Text>
        <View style={styles.smallVerticalSpacer}/>
        <Text style={styles.normalText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <View style={styles.smallVerticalSpacer}/>
        <SecondaryButton text={"Coba kuis"} onPress={()=>{}}/>
      </ScrollView>
    </View>
  );
};

export default SportsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9D0000",
    flexDirection: "column",
    alignContent: "flex-start",
    flex: 1,
  },
  header: {
    width: "100%",
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  content: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: "#FBFAFF",
    paddingHorizontal: 32,
    paddingTop: 32,
    paddingBottom: 16,
  },
  titleLarge: {
    fontSize: 36,
    fontWeight: "900",
  },
  subtitle: {
    fontSize: 22,
  },
  normalText: {
    fontSize: 16,
    textAlign: "justify"
  },
  bigVerticalSpacer: {
    height: 64
  },
  smallVerticalSpacer: {
    height: 16
  }
});
