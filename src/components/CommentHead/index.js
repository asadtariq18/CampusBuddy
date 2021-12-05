import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, View } from "react-native";
import ProfilePicture from "../ProfilePicture";

import styles from "./style";

const CommentHead = ({ comment}) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("UserProfile",{});
  };

  return (
    <View style={styles.container}>
      <ProfilePicture uri={comment.avatar} size={25} border={false} />
      <View style={styles.content}>
        <Text style={styles.name}>{comment.userName} </Text>
        <Text style={styles.commentText}>{comment.commentText}</Text>
      </View>
      <View style={ {flex: 1,flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
        <Text style={styles.timestamp}>{comment.timestamp}</Text>
      </View>
    </View>
  );
};

export default CommentHead;
