import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import Post from "../Post";
import Stories from "../../components/Stories";
import { View } from "native-base";
import database from "../../Database/database";

const Feed = ({ posts }) => {
  const [postsArray, setPostsArray] = useState(posts);
  useEffect(() => {
    setPostsArray(
      Object.keys(posts).map(function (_) {
        return posts[_];
      })
    );
  }, [posts]);

  return (
    <View style={{ paddingBottom: 50 }}>
      
      <FlatList
      inverted
        data={postsArray}
        showsVerticalScrollIndicator={false}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => {
          return <Post post={item} />;
        }}
        ListFooterComponent={Stories}
      />
    </View>
  );
};

export default Feed;
