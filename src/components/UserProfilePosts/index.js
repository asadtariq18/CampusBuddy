import React, { useState, useEffect } from "react";
import { FlatList, ScrollView, View } from "react-native";
import styles from "./style";
import PostPreview from "../PostPreview";
import database from "../../Database/database";

const UserProfilePosts = ({ posts, user }) => {
  const [postsArray, setPostsArray] = useState(posts);
  useEffect(() => {
    setPostsArray(
      Object.keys(posts).map(function (_) {
        return posts[_];
      })
    );
  }, [posts]);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        contentContainerStyle={[styles.container, { flexWrap: "wrap" }]}
        data={postsArray}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => {
          if (item.userID === user.userID) {
            return <PostPreview post={item} />;
          }
          return null;
        }}
      />
    </ScrollView>
  );
};

export default UserProfilePosts;
