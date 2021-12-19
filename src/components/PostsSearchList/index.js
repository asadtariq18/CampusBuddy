import React, { useState, useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import SearchHead from "../SearchHead/index";
import database from "../../Database/database";
import { COLORS } from "../../Constants/COLORS";
import PostsSearchHead from "../PostsSearchHead";
import styles from "./style";


const PostsSearchList = ({ query }) => {
  let posts = database.getPosts();
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    posts = database.getPosts();
    setSearchResult(
      Object.keys(posts).map(function (_) {
        return posts[_];
      })
    );
  }, [query]);
  var filteredResults = searchResult.filter(function (obj) {
    return (
      obj.owner.toLowerCase().includes(query.toLowerCase()) ||
      obj.userID.includes(query.toLowerCase())
      ||
      obj.caption.toLowerCase().includes(query.toLowerCase())
    );
  });

  return (
    <View>
      <Text
        style={{
          color: COLORS.font_secondary,
          marginStart: 10,
          marginBottom: 2,
          fontSize: 16,
        }}
      >
        {" "}
        Posts{" "}
      </Text>
      <FlatList
        contentContainerStyle={[styles.container, { flexWrap: "wrap" }]}
        ListEmptyComponent={() => {
          return (
            <Text
              style={{
                fontSize: 18,
                color: COLORS.font_secondary,
                marginTop: 30,
                alignSelf: "center",
              }}
            >
              {" "}
              No result found{" "}
            </Text>
          );
        }}
        data={filteredResults}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => {
          if (item.userID !== database.getCurrentUser().userID) {
            return <PostsSearchHead result={item} />;
          }
          return null;
        }}
      />
    </View>
  );
};
export default PostsSearchList;
