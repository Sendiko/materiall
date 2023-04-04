import axios from "axios";
import { useEffect, useState } from "react";
import { View, StyleSheet, Text, ActivityIndicator, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import IconButton from "../components/buttons/icon_button";
import SecondaryButton from "../components/buttons/secondary_button";
import Ionicons from "@expo/vector-icons/Ionicons"

const URL = "http://10.212.79.11:3000/api";

const SportsScreen = ({ navigation, route }) => {
  const { sport } = route.params;
  const [contentTitle, setContentTitle] = useState("");
  const [isScrolled, setScrolled] = useState(false);
  const [newSubbab, setNewSubbab] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const navigate = (route) => {
    navigation.navigate(route, { sport: sport });
  };
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${URL}/materi/${sport.id}`)
      .then((response) => {
        setContentTitle(response.data.materi.judul);
        setNewSubbab(response.data.subbab);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);
  if (isLoading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
  if (isError) {
    return (
      <View style={[styles.container, styles.center]}>
        <Ionicons name="cloud-offline-outline" size={128}/>
        <Text style={styles.subtitle}>Server error.</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton
          icon={require("../assets/arrow_back.png")}
          onPress={() => navigate("HomeScreen")}
        />
      </View>
      <View style={styles.content}>
        <FlatList
          data={newSubbab}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <>
              <View style={styles.bigVerticalSpacer} />
              <SecondaryButton
                text={"Coba kuis"}
                onPress={() => {
                  navigate("QuizScreen");
                }}
              />
              <View style={styles.smallVerticalSpacer} />
            </>
          }
          ListHeaderComponent={
            <Text style={styles.titleLarge}>{contentTitle}</Text>
          }
          renderItem={({ item }) => (
            <View>
              <View style={styles.smallVerticalSpacer} />
              <Text style={styles.subtitle}>{item.judul}</Text>
              <View style={styles.smallVerticalSpacer} />
              <Text style={styles.normalText}>{item.isi}</Text>
            </View>
          )}
        />
      </View>
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
  alsoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
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
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 32,
  },
  titleLarge: {
    fontSize: 36,
    fontWeight: "900",
  },
  titlePage: {
    alignSelf: "center",
    fontSize: 24,
    color: "#FBFAFF",
    paddingStart: 16,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "700",
  },
  normalText: {
    fontSize: 16,
    textAlign: "justify",
  },
  bigVerticalSpacer: {
    height: 64,
  },
  smallVerticalSpacer: {
    height: 16,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
});
