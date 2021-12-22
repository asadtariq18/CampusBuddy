import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, View } from "react-native";
import ProfilePicture from "../ProfilePicture";
import styles from "./style";
import database from "../../Database/database";
import moment from "moment";

const Chat = ({ userID, lastmessage, timestamp }) => {
  const [user, setUser] = useState(database.getUser(userID));
  useEffect(() => {
    let user = database.getUser(userID);
    setUser(user);
  }, [userID]);
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("InboxScreen", {
      name: user.name,
      userID,
      imageUri: user.avatar,
    });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ProfilePicture uri={user.avatar} size={45} border={false} />
      <View style={styles.content}>
        <Text style={styles.name}>{user.name} </Text>
        <Text style={styles.commentText}>{lastmessage}</Text>
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
          {moment(timestamp, "YYYYMMDDHHmmss").fromNow()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Chat;
