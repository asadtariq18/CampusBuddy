import React, { useState, useEffect } from "react";
import { FlatList, ScrollView, View} from "react-native";
import styles from "./style";
import PostPreview from "../PostPreview";

const TimelinePosts = ({ posts }) => {
  const [postsArray, setPostsArray] = useState(posts);
  useEffect(() => {
    console.log("UseEffect runs")
    setPostsArray(
      Object.keys(posts).map(function (_) {
        return posts[_];
      })
    );
  }, [posts]);
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <FlatList
      contentContainerStyle={[styles.container, {flexWrap: "wrap"}]}
      data={postsArray}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => {
        return <PostPreview post={item} />;
      }}
    />
    </ScrollView>
  );
};

export default TimelinePosts;
