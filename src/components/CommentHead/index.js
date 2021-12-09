import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, View } from "react-native";
import ProfilePicture from "../ProfilePicture";

import styles from "./style";
import database from "../../Database/database";
import moment from "moment";

const CommentHead = ({ comment }) => {
  const navigation = useNavigation();
  const [user, setUser] = useState(database.getUser(comment.userID));
  const onPress = () => {
    navigation.navigate("UserProfile", {user});
  };
  useEffect(() => {
    setUser(database.getUser(comment.userID));
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> navigation.navigate("UserProfile", { user: user })}>
        <ProfilePicture uri={user.avatar} size={25} border={false} />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.name}>{user.name} </Text>
        <Text style={styles.commentText}>{comment.commentText}</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Text style={styles.timestamp}>
          {moment(comment.timestamp, "YYYYMMDDhhmmss").fromNow()}
        </Text>
      </View>
    </View>
  );
};

export default CommentHead;
