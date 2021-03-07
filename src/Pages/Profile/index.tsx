import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import api from "../../services/api";
import styles from "./styles";

export default function Profile({ route }: { route: any }) {
  const name = route.params?.name;
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    async function getProfile() {
      await api
        .get(`users/${name}`)
        .then((response) => {
          setProfile(response.data);
        })
        .catch((err) => {
          alert("Error");
          console.error(err);
        });
    }

    getProfile();
    console.log(profile);
  }, [name]);
  return (
    <View style={styles.container}>
      <Text>Hello world, {name}</Text>
    </View>
  );
}
