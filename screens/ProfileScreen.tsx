import { Text, View, TouchableOpacity, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { light, dark } from "../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useContext, useState } from "react";
import MainContext from "../contexts/MainContext";
import { API_URL } from '@env';

interface UserData {
  _id: string;
  username: string;
  lives: number;
  subject: number;
  subjectProgress: number;
  language: string;
}

function ProfileScreen() {
  const { loggedIn, setLoggedIn, theme } = useContext(MainContext);
  const styles = theme === "light" ? light : dark;
  const [username, setUsername] = useState<string | null>("");
  const [userData, setUserData] = useState<UserData | null>(null)

  useEffect(() => {
    AsyncStorage.getItem("username").then((username) => {
      setUsername(username);
    });

    AsyncStorage.getItem("userData").then((allUserData) => {
      setUserData(JSON.parse(allUserData!));
    })
  }, []);

  const handleLogout = async () => {
    fetch(`${API_URL}/logout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(async (response) => {
        if (response.message) {
          await AsyncStorage.removeItem("userData")
          setLoggedIn(false);
        }
      });
  };

  return (
    <View style={styles.container}>
      {username === null && <Text style={styles.text}>Profile Screen</Text>}
      {username && <Text style={styles.text}>{username}</Text>}
      <TouchableOpacity onPress={handleLogout}>
        <Button title="Logout" color={styles.logoutButton.color} onPress={handleLogout}></Button>
      </TouchableOpacity>
      <StatusBar style={theme === "light" ? "dark" : "light"} backgroundColor={theme === "light" ? "white" : "black"} translucent />
    </View>
  );
}

export default ProfileScreen;
