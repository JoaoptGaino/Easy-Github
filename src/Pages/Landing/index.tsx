import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import landing from "../../assets/images/landing.png";
import { RectButton, TextInput } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
export default function Landing() {
  const { navigate } = useNavigation();
  const [user, setUser] = useState("");

  function handleNavigateToProfile() {
    navigate("Profile", { name: user });
  }
  return (
    <View style={styles.container}>
      <Image source={landing} style={styles.banner} />
      <Text style={styles.title}>
        Welcome to {"\n"} <Text style={styles.titleBold}>EasyGithub</Text>
        <FontAwesome name="github-alt" size={50} />
      </Text>
      <View style={styles.searchForm}>
        <View style={styles.inputGroup}>
          <View style={styles.inputBlock}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#000"
              onChangeText={(text) => setUser(text)}
            />
          </View>
        </View>
        <RectButton
          style={styles.submitButton}
          onPress={handleNavigateToProfile}
        >
          <Text style={styles.submitButtonText}>Search</Text>
        </RectButton>
      </View>
    </View>
  );
}
