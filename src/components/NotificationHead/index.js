import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, View } from "react-native";
import ProfilePicture from "../ProfilePicture";

import styles from "./style";
import database from "../../Database/database";

const Notification = ({ userID, image, name, notification }) => {
  const navigation = useNavigation();
  const onPress = () => {
    const user = database.getUser(userID)
    navigation.navigate("UserProfile", { user: user });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.left}>
        <ProfilePicture uri={image} border={false} />
        <Text style={styles.name}>{name} </Text>
        <Text style={styles.notificationText}>{notification}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Notification;
