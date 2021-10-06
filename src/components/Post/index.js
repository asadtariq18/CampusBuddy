import React from "react";
import { View } from "react-native";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import styles from "./style";
import { useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import database from "../../Database/database";

const Post = () => {
  const routes = useRoute()
  let post = routes.params.post;
  const profile_picture = database.getUpdatedUserData(post.mail).profile_picture
  return (
    <View style={styles.container}>
      <Header
        profile_picture={profile_picture}
        name={post.owner}
        caption={post.caption}
      />
      <Body image={post.image} />
      <Footer likes_count={post.likes_count} postedAt={post.timestamp} />
    </View>
  );
};

export default Post;
