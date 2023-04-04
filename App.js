import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./ui/screens/splashscreen";
import HomeScreen from "./ui/screens/home_screen";
import SportsScreen from "./ui/screens/sports_screen";
import QuizScreen from "./ui/screens/quiz_screen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splashscreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SportsScreen"
          component={SportsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuizScreen"
          component={QuizScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
