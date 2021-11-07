import React from "react";
import { View } from "react-native";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import styles from "./style";
import database from "../../Database/database";

const Post = ({post}) => {
  const avatar = database.getUpdatedUserData(post.mail).avatar
  return (
    <View style={styles.container}>
      <Header
        avatar={avatar}
        name={post.owner}
        userID={post.userID}
        caption={post.caption}
      />
      <Body image={post.image} />
      <Footer post={post} />
    </View>
  );
};

export default Post;
