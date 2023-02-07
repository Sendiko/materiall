import react from "react";
import { StyleSheet, SafeAreaView, Image, Text, StatusBar } from "react-native";
import PrimaryButton from "../components/custom_button";

const SplashScreen = ({ navigation }) => {
  const navigateToLogin = () => {
    navigation.navigate("HomeScreen");
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titleLarge}> MateriAll </Text>
      <Text style={styles.subtitleMedium}>
        “berani dan jelajahi olahraga bela diri dengan senang”
      </Text>
      <Image source={require("../assets/splash_icon.png")} />
      <PrimaryButton text={"Ayo Mulai"} onPress={navigateToLogin} />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fbfaff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  titleLarge: {
    fontSize: 32,
    marginTop: 32,
    fontWeight: "900",
  },
  subtitleMedium: {
    marginHorizontal: 64,
    textAlign: "center",
    fontSize: 16,
  },
});
