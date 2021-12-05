import React,{useState, useEffect} from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, View } from "react-native";
import ProfilePicture from "../ProfilePicture";

import styles from "./style";
import database from "../../Database/database";

const FriendHead = ({ userID }) => {
  const navigation = useNavigation();
  const [user, setUser] = useState({})
  const onPress = () => {
    navigation.navigate("UserProfile", { user: user });
  };
  useEffect(() => {
   setUser(database.getUser(userID))
  }, [userID])

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.left}>
        <ProfilePicture uri={user.avatar} size={50} border={false} />
        <View style={{ marginTop: 10 }}>
          <Text style={styles.name}>{user.name} </Text>
          <Text style={styles.text2}>@{user.userID}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FriendHead;
