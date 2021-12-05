import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import Post from "../Post";
import Stories from "../../components/Stories";
import { useDispatch, useSelector } from "react-redux";
import { setPostsArray } from "../../Redux/Feed/actions";

const Feed = ({ posts }) => {
  const dispatch = useDispatch();
  const [postsArray, setPostsArray] = useState(posts);
  // const postsArray = useSelector((state)=> state.feed.postsArray)
  useEffect(() => {
    // dispatch(setPostsArray(
    //   Object.keys(posts).map(function (_) {
    //     return posts[_];
    //   })
    // ));

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
