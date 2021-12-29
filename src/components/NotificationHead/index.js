import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, View } from "react-native";
import ProfilePicture from "../ProfilePicture";

import styles from "./style";
import database from "../../Database/database";

const Notification = ({ userID, notification, avatar, name }) => {
  console.log(userID)
  const navigation = useNavigation();
  const [user, setUser] = useState();
  const onPress = () => {
    navigation.navigate("UserProfile", { user: user });
  };
  useEffect(() => {

  }, []);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.left}>
        <ProfilePicture uri={avatar} border={false} />
        <Text style={styles.name}>{name} </Text>
        <Text style={styles.notificationText}>{notification}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Notification;
