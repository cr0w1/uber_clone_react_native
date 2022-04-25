import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/homeScreen/screen";



const Home = createNativeStackNavigator();

const HomeStack = () => {
  return(
    <Home.Navigator>
      <Home.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Home.Navigator>
  )
}

export default HomeStack;