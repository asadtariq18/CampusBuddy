import React, {useEffect} from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, View, Image } from "react-native";
import ProfilePicture from "../ProfilePicture";

import styles from "./style";

const PostPreview = ({post}) => {
  let image = post.image;
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("StoryScreen", { username: name });
  };
  return (
    <TouchableOpacity onPress={onPress}>

               <ProfilePicture uri={image} />

    </TouchableOpacity>
  );
};

export default PostPreview;
