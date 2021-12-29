import React, { useEffect } from "react";
import { View } from "react-native";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import styles from "./style";

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <Header post={post} />
      <Body post={post} />
      <Footer post={post} />
    </View>
  );
};

export default Post;
