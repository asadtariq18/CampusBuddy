import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, View, Image } from "react-native";
import ProfilePicture from "../ProfilePicture";

import styles from "./style";

const PostPreview = (props) => {
  const {
      story:{
    user: { imageUri, name },
      }
  } = props;
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("StoryScreen", { username: name });
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <ProfilePicture uri={imageUri} />
      </View>
    </TouchableOpacity>
  );
};

export default PostPreview;
