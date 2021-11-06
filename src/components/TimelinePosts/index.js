import React, { useState, useEffect } from "react";
import { FlatList, ScrollView, View } from "react-native";
import styles from "./style";
import PostPreview from "../PostPreview";
import database from "../../Database/database";

const TimelinePosts = ({ posts }) => {
  const [postsArray, setPostsArray] = useState(posts);
  const user = database.getCurrentUser();
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
            console.log(item.userID)
            return <PostPreview post={item} />;
          }
          return null;
        }}
      />
    </ScrollView>
  );
};

export default TimelinePosts;
