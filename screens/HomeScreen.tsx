import React, { useContext, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { light, dark } from "../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainContext from "../contexts/MainContext";
import { Ionicons } from "@expo/vector-icons";

interface Subject {
  id: number;
  name: string;
  icon: any;
}

function HomeScreen() {
  const { loggedIn, theme } = useContext(MainContext);
  const styles = theme === "light" ? light : dark;

  const subjects: Subject[] = [
    { id: 1, name: "Vocabulary", icon: "ios-book" },
    { id: 2, name: "Grammar", icon: "ios-document-text" },
    { id: 3, name: "Listening", icon: "ios-volume-high" },
    { id: 4, name: "Speaking", icon: "ios-chatbubble-ellipses" },
    { id: 5, name: "Reading", icon: "ios-book-outline" },
    { id: 6, name: "Writing", icon: "ios-create" },
    // Add more subjects or lessons here
  ];

  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

  const handleSubjectPress = (subject: Subject) => {
    setSelectedSubject(subject);
  };

  const handleCloseSubject = () => {
    setSelectedSubject(null);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {selectedSubject ? (
          <View style={styles.subjectDetailsContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleCloseSubject}
            >
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.subjectDetailsTitle}>
              Subject Details: {selectedSubject.name}
            </Text>
            {/* Render additional details about the subject */}
            {/* Replace the following text with your subject details */}
            <Text style={styles.subjectDetailsText}>
              This is the content for {selectedSubject.name}.
            </Text>
          </View>
        ) : (
          <View style={styles.fabsContainer}>
            {subjects.map((subject, index) => (
              <React.Fragment key={subject.id}>
                {index > 0 && <View style={styles.line} />}
                <TouchableOpacity
                  style={styles.fabButton}
                  onPress={() => handleSubjectPress(subject)}
                >
                  <Ionicons name={subject.icon} size={24} color="white" />
                  <Text style={styles.fabButtonText}>{subject.name}</Text>
                </TouchableOpacity>
              </React.Fragment>
            ))}
          </View>
        )}
      </ScrollView>
      <StatusBar
        style={theme === "light" ? "dark" : "light"}
        backgroundColor={theme === "light" ? "white" : "black"}
        translucent
      />
    </View>
  );
}

export default HomeScreen;