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
      <View style={styles.left}>
        <ProfilePicture uri={user.avatar} border={false} />
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <View style={styles.messageView}>
        <Text style={styles.messageText}>
          {lastmessage}
        </Text>
        <Text style={styles.postedAt}>
          {moment(timestamp, "YYYYMMDDhhmmss").fromNow()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Chat;
