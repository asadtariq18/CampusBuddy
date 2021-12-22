import React, { useState, useEffect } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import styles from "./style";
import PostPreview from "../PostPreview";
import database from "../../Database/database";
import { COLORS } from "../../Constants/COLORS";

const TimelinePosts = ({ posts, user }) => {
  const [postsArray, setPostsArray] = useState(posts);
  const [tempArray, setTempArray] = useState(null);
  useEffect(() => {
    setTempArray(Object.values(posts));
    if (tempArray) {
      setPostsArray(
        tempArray.sort(function (a, b) {
          return a.timestamp > b.timestamp;
        })
      );
    }
  }, [posts]);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {user.posts_count === 0 ? (
        <View style={{ marginStart: 140 }}>
          <Text
            style={[
              styles.text,
              {
                fontSize: 24,
                color: COLORS.font_secondary,
                marginTop: 50,
                alignSelf: "center",
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
          data={tempArray}
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
