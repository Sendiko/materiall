import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  ToastAndroid,
  View,
  StatusBar,
  FlatList,
} from "react-native";
import SportCards from "../components/sports_card";

const sports = [
  {
    id: 1,
    name: "Karate",
    image: require("../assets/sports_icon/Karate.png"),
  },
  {
    id: 2,
    name: "Kungfu",
    image: require("../assets/sports_icon/Kungfu.png"),
  },
  {
    id: 3,
    name: "Capoeira",
    image: require("../assets/sports_icon/Capoeira.png"),
  },
  {
    id: 4,
    name: "Judo",
    image: require("../assets/sports_icon/Judo.png"),
  },
  {
    id: 5,
    name: "Boxing",
    image: require("../assets/sports_icon/Boxing.png"),
  },
  {
    id: 6,
    name: "Taekwondo",
    image: require("../assets/sports_icon/Taekwondo.png"),
  },
];

const HomeScreen = ({ navigation }) => {
  const navigateToScreen = (sport) => {
    navigation.navigate("SportsScreen", {sport: sport});
    notifyMessage(`${sport.name} clicked!`);
  };
  const notifyMessage = (msg) => {
    if (Platform.OS === "android") {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
      AlertIOS.alert(msg);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titleMedium}> Apa Yang Anda Ingin Ketahui?</Text>
      <View style={{ marginTop: 20 }}>
        <FlatList
          horizontal={true}
          data={sports}
          renderItem={({ item }) => (
            <SportCards
              source={item.image}
              title={item.name}
              onPress={() => navigateToScreen(item)}
            />
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}
        />
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
    verticalAlign: "center",
  },
  scrollView: {
    backgroundColor: "#FBFAFF",
    paddingLeft: "15%",
    paddingRight: "10%",
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
