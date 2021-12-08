import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View, Image, ActivityIndicator } from "react-native";

import styles from "./style";

const PostPreview = ({ post }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("ViewPost", {post: post });
  };

  if(!post){
    return (
      <ActivityIndicator
        style={{ marginTop: 20, marginHorizontal: 40 }}
        color={COLORS.primary}
        size={25}
      />
    );
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.postView}>
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
      </View>
    </TouchableOpacity>
  );
};

export default PostPreview;
