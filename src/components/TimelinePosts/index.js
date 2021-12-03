import React, { useState, useEffect } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import styles from "./style";
import PostPreview from "../PostPreview";
import database from "../../Database/database";
import { COLORS } from "../../Constants/COLORS";

const TimelinePosts = ({ posts, user }) => {
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
      {user.posts_count === 0 ? (
        <View style = {{marginStart: 140}}>
          <Text
            style={[
              styles.text,
              {
                fontSize: 24,
                color: COLORS.font_secondary,
                marginTop: 50,
                alignSelf: "center"
              },
            ]}
          >
            {" "}
            NO POSTS{" "}
          </Text>
        </View>
        ) : (
      <FlatList
        contentContainerStyle={[styles.container, { flexWrap: "wrap" }]}
        data={postsArray}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => {
          //console.log(item)
          if (item.userID === user.userID) {
            return <PostPreview post={item} />;
          }
          return null;
        }}
      />
        )}
    </ScrollView>
  );
};

export default TimelinePosts;
