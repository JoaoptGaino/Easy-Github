import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

import AppLoading from "expo-app-loading";
import AppStack from "./src/Routes/AppStack";
export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }
}
