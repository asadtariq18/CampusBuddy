import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import Post from "../Post";
import Stories from "../../components/Stories";
import { useDispatch, useSelector } from "react-redux";
import { setPostsArray } from "../../Redux/Feed/actions";
import FriendSuggestionList from "../FriendSuggestionList";

const Feed = ({ posts, storiesData }) => {
  const dispatch = useDispatch();
  const [postsArray, setPostsArray] = useState(null);

  const [tempArray, setTempArray] = useState(null);
  // const postsArray = useSelector((state)=> state.feed.postsArray)
  useEffect(() => {
    setTempArray(Object.values(posts));
    if (tempArray) {
      setPostsArray(
        tempArray.sort(function (a, b) {
          return b.timestamp < a.timestamp;
        })
      );
    }
  }, [posts]);

  return (
    <View style={{ paddingBottom: 50 }}>
      <Stories storiesData={storiesData} />
      {/* <FriendSuggestionList /> */}
      <FlatList
        inverted
        data={postsArray}
        showsVerticalScrollIndicator={false}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => {
          return <Post post={item} />;
        }}
        // ListFooterComponent={Stories}
      />
    </View>
  );
};

export default Feed;
