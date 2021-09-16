import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, View } from "react-native";
import ProfilePicture from "../ProfilePicture";

import styles from "./style";

const CommentHead = ({ imageUri, name, comment }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate();
  };

  return (
    <View style={styles.container}>
      <ProfilePicture uri={imageUri} size={25} border={false} />
      <View style={styles.content}>
        <Text style={styles.name}>{name} </Text>
        <Text style={styles.commentText}>{comment}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
      </View>
    </View>
  );
};

export default CommentHead;
