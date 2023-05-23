import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { light, dark } from "../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import MainContext from "../contexts/MainContext";

function SettingsScreen() {
  const { loggedIn, theme } = useContext(MainContext)
    const styles = theme === "light" ? light : dark;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Settings Screen</Text>
        <StatusBar style={theme === "light" ? "dark" : "light"} backgroundColor={theme === "light" ? "white" : "black"} translucent />
      </View>
    );
  }

export default SettingsScreen;