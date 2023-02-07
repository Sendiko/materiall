import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
} from "react-native";
import SportCards from "../components/sports_card";

const sports = [
  {
    id: 1,
    name: "Karate",
    image: "../assets/sports_icon/karate.png",
  },
  {
    id: 2,
    name: "Kungfu",
    image: "../assets/sports_icon/Kungfu.png",
  },
  {
    id: 3,
    name: "Capoeira",
    image: "../assets/sports_icon/Capoeira.png",
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titleMedium}> Apa Yang Anda Ingin Ketahui?</Text>
      <View style={{ marginTop: 20 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
          <SportCards
            source={require("../assets/sports_icon/Karate.png")}
            title={"Karate"}
          />
          <SportCards
            source={require("../assets/sports_icon/Kungfu.png")}
            title={"Kungfu"}
          />
          <SportCards
            source={require("../assets/sports_icon/Capoeira.png")}
            title={"Capoeira"}
          />
          <SportCards
            source={require("../assets/sports_icon/Judo.png")}
            title={"Judo"}
          />
          <SportCards
            source={require("../assets/sports_icon/Boxing.png")}
            title={"Boxing"}
          />
          <SportCards
            source={require("../assets/sports_icon/Taekwondo.png")}
            title={"Taekwondo"}
          />
          <View style={styles.invisPlaceHolder}/>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFAFF",
    flexDirection: "column",
    justifyContent: "center",
    verticalAlign: "center"
  },
  scrollView: {
    backgroundColor: "#fbfaff",
    flexDirection: "column",
    paddingLeft: "15%",
    flexWrap: "wrap",
  },
  titleMedium: {
    fontSize: 24,
    marginHorizontal: 48,
    fontWeight: "900",
    textAlign: "center",
  },
  invisPlaceHolder: {
    width: 96,
  },
});
