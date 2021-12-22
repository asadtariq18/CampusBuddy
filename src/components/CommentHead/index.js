import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, View} from "react-native";
import ProfilePicture from "../ProfilePicture";

import styles from "./style";
import database from "../../Database/database";
import moment from "moment";
import { Icon } from "native-base";
import { COLORS } from "../../Constants/COLORS";

const CommentHead = ({ comment }) => {
  const navigation = useNavigation();
  const [user, setUser] = useState(database.getUser(comment.userID));
  const onPress = () => {
    navigation.navigate("UserProfile", {user});
  };
  useEffect(() => {
    setUser(database.getUser(comment.userID));
  }, []);

  const replyPress = ()=>{
    alert("reply")
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("UserProfile", { user: user })}
      >
        <ProfilePicture uri={user.avatar} size={25} border={false} />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.name}>{user.name} </Text>
        <Text style={styles.commentText}>{comment.commentText}</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
      <TouchableOpacity onPress={replyPress}>

        <Icon
          size={8}
          style={{ fontSize: 25 ,color: COLORS.font_secondary }}
          type="Entypo"
          name="reply"
        />
      </TouchableOpacity>
        <Text style={styles.timestamp}>
          {moment(comment.timestamp, "YYYYMMDDHHmmss").fromNow()}
        </Text>
      </View>
    </View>
  );
};

export default CommentHead;
