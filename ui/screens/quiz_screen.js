import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import IconButton from "../components/buttons/icon_button";
import TertiaryButton from "../components/buttons/tertiary_button";

const questions = {
  questions: [
    {
      id: 1,
      question:
        "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      answerChoice: [
        {
          id: 1,
          answer: "A. Lorem ipsum dolor sit amet",
        },
        {
          id: 2,
          answer: "B. Lorem ipsum dolor sit amet",
        },
        {
          id: 3,
          answer: "C. Lorem ipsum dolor sit amet",
        },
        {
          id: 4,
          answer: "D. Lorem ipsum dolor sit amet",
        },
      ],
    },
    {
      id: 2,
      question:
        "2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      answerChoice: [
        {
          id: 5,
          answer: "A. Lorem ipsum dolor sit amet",
        },
        {
          id: 6,
          answer: "B. Lorem ipsum dolor sit amet",
        },
        {
          id: 7,
          answer: "C. Lorem ipsum dolor sit amet",
        },
        {
          id: 8,
          answer: "D. Lorem ipsum dolor sit amet",
        },
      ],
    },
    {
      id: 3,
      question:
        "3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      answerChoice: [
        {
          id: 9,
          answer: "A. Lorem ipsum dolor sit amet",
        },
        {
          id: 10,
          answer: "B. Lorem ipsum dolor sit amet",
        },
        {
          id: 11,
          answer: "C. Lorem ipsum dolor sit amet",
        },
        {
          id: 12,
          answer: "D. Lorem ipsum dolor sit amet",
        },
      ],
    },
  ],
};

const QuizScreen = ({ navigation, route }) => {
  const { sport } = route.params;
  const [isChosen, setIsChosen] = useState(false);
  const navigate = (route) => {
    navigation.navigate(route, { sport: sport });
  };
  const notifyMessage = (msg) => {
    if (Platform.OS === "android") {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
      AlertIOS.alert(msg);
    }
  };
  console.log(questions);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton
          icon={require("../assets/arrow_back.png")}
          onPress={() => navigate("SportsScreen")}
        />
        <Text style={styles.title}>{sport.name}</Text>
      </View>
      <FlatList
        data={questions.questions}
        ListFooterComponent={
          <TertiaryButton text={"Selesai"} onPress={() => notifyMessage("Finish Button clicked!")} />
        }
        renderItem={({ item }) => (
          <View style={styles.questionBox}>
            <Text style={styles.question}>{item.question}</Text>
            <FlatList
              data={item.answerChoice}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.answerBox}
                  onPress={() => {
                    setIsChosen(true);
                  }}
                >
                  <Text>{item.answer}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
      />
    </View>
  );
};

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
    verticalAlign: "center",
    alignContent: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  title: {
    alignSelf: "center",
    fontSize: 24,
    color: "#FBFAFF",
    paddingStart: 16,
  },
  questionBox: {
    flexDirection: "column",
    padding: 16,
    backgroundColor: "#FBFAFF",
    borderRadius: 16,
    margin: 16,
  },
  question: {
    color: "black",
    textAlign: "justify",
    fontWeight: "700",
    fontSize: 18,
  },
  answerBox: {
    flexDirection: "column",
    verticalAlign: "center",
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#333333",
    padding: 16,
    marginTop: 16,
  },
  answerBoxChosen: {
    flexDirection: "column",
    verticalAlign: "center",
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#FBFAFF",
    padding: 16,
    marginTop: 16,
    backgroundColor: "#333333",
  },
  answerChosen: {
    fontSize: 16,
    color: "#FBFAFF",
  },
  answer: {
    fontSize: 16,
  },
  smallVerticalSpacer: {
    height: 16,
  },
});

export default QuizScreen;
