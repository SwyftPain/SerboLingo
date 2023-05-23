import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { HomeScreen, ProfileScreen, SettingsScreen } from "./screens";
import { light, dark } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainContext from "./contexts/MainContext";
import { API_URL } from "@env";

const Tab = createBottomTabNavigator();

function AuthScreen({ login }: any) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const styles = theme === "light" ? light : dark;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const checkTheme = async () => {
      const value = await AsyncStorage.getItem("theme");
      if (value === null || value === "light") {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    };
    checkTheme();
  }, []);

  const handleLogin = async () => {
    await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then(async (data) => {
        if (data.message) {
          await AsyncStorage.setItem("username", data.user.username);
          const AllUserData = {
            _id: data.user._id,
            username: data.user.username,
            lives: data.user.lives,
            subject: data.user.subject,
            subjectProgress: data.user.subjectProgress,
            language: data.user.language,
          };
          await AsyncStorage.setItem("userData", JSON.stringify(AllUserData));
          login();
        } else {
          alert(data.error);
        }
      });
  };

  const handleRegister = async () => {
    await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.message) {
          alert("Registered successfully");
        } else {
          alert(response.error);
        }
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
        autoComplete="username"
        autoCorrect={false}
        onChangeText={(text) => setUsername(text)}
        value={username}
        placeholderTextColor={theme === "light" ? "black" : "lightgray"}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        autoCapitalize="none"
        autoComplete="password"
        autoCorrect={false}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholderTextColor={theme === "light" ? "black" : "lightgray"}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          color={theme === "dark" ? "#00B0FF" : undefined}
          onPress={handleLogin}
        />
        <Button
          title="Register"
          color={styles.registerButton.color}
          onPress={handleRegister}
        />
      </View>
      <StatusBar
        style={theme === "light" ? "dark" : "light"}
        backgroundColor={theme === "light" ? "white" : "black"}
        translucent
      />
    </View>
  );
}

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const checkTheme = async () => {
      const value = await AsyncStorage.getItem("theme");
      if (value === null || value === "light") {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    };
    checkTheme();
  }, []);

  useEffect(() => {
    const checkLoggedIn = async () => {
      await fetch("https://7460-178-254-183-219.ngrok-free.app/isLoggedIn", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.isLoggedIn) {
            setLoggedIn(true);
          } else {
            setLoggedIn(false);
          }
        })
        .catch((err) => console.log(err));
    };
    checkLoggedIn();
  }, []);

  const login = () => {
    setLoggedIn(true);
  };

  const switchTheme = async () => {
    await AsyncStorage.setItem("theme", theme === "light" ? "dark" : "light");
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <MainContext.Provider
      value={{ loggedIn: loggedIn, setLoggedIn: setLoggedIn, theme: theme }}
    >
      <SafeAreaProvider>
        <NavigationContainer>
          {loggedIn ? (
            <Tab.Navigator
              screenOptions={{
                headerRight: () => {
                  return (
                    <TouchableOpacity
                      style={{ marginRight: 15 }}
                      onPress={switchTheme}
                    >
                      <Ionicons
                        name={theme === "light" ? "moon-sharp" : "sunny-sharp"}
                        color={theme === "light" ? "silver" : "orange"}
                        onPress={switchTheme}
                        size={24}
                      />
                    </TouchableOpacity>
                  );
                },
                headerStyle: {
                  backgroundColor: theme === "light" ? "#263238" : "#202020",
                },
                headerTitleStyle: {
                  color: theme === "light" ? "white" : "white",
                },
                tabBarStyle: {
                  backgroundColor: theme === "light" ? "#263238" : "#202020",
                },
                tabBarLabelStyle: {
                  color: theme === "light" ? "black" : "white",
                },
                tabBarIconStyle: {
                  color: theme === "light" ? "black" : "white",
                  backgroundColor: theme === "light" ? "black" : "white",
                },
                tabBarShowLabel: false,
              }}
            >
              <Tab.Screen
                name="Home"
                options={{
                  tabBarIcon: ({ color, size, focused }) => (
                    <Ionicons
                      name="ios-home"
                      color={
                        theme === "light"
                          ? focused
                            ? "#FFC107"
                            : color
                          : color
                      }
                      size={size}
                    />
                  ),
                }}
              >
                {() => <HomeScreen />}
              </Tab.Screen>
              <Tab.Screen
                name="Profile"
                options={{
                  tabBarIcon: ({ color, size, focused }) => (
                    <Ionicons
                      name="ios-person"
                      color={
                        theme === "light"
                          ? focused
                            ? "#FFC107"
                            : color
                          : color
                      }
                      size={size}
                    />
                  ),
                }}
              >
                {() => <ProfileScreen />}
              </Tab.Screen>
              <Tab.Screen
                name="Settings"
                options={{
                  tabBarIcon: ({ color, size, focused }) => (
                    <Ionicons
                      name="ios-settings"
                      color={
                        theme === "light"
                          ? focused
                            ? "#FFC107"
                            : color
                          : color
                      }
                      size={size}
                    />
                  ),
                }}
              >
                {() => <SettingsScreen />}
              </Tab.Screen>
            </Tab.Navigator>
          ) : (
            <AuthScreen login={login} />
          )}
        </NavigationContainer>
        <StatusBar
          style={theme === "light" ? "dark" : "light"}
          backgroundColor={theme === "light" ? "white" : "black"}
          translucent
        />
      </SafeAreaProvider>
    </MainContext.Provider>
  );
}
