import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, View } from "react-native";
import ProfilePicture from "../ProfilePicture";

import styles from "./style";

const CommentHead = ({ avatar, name, commentText }) => {
   console.log(commentText)
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("UserProfile",{});
  };

  return (
    <View style={styles.container}>
      <ProfilePicture uri={avatar} size={25} border={false} />
      <View style={styles.content}>
        <Text style={styles.name}>{name} </Text>
        <Text style={styles.commentText}>{commentText}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
      </View>
    </View>
  );
};

export default CommentHead;
