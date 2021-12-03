import React from "react";
import {
  FlatList,
  RefreshControl,
  ScrollView,
  ToastAndroid,
} from "react-native";
import CommentHead from "../CommentHead/index";
import data from "../../Data/CommentData/commentData";
import { COLORS } from "../../Constants/COLORS";
import { View } from "native-base";
import database from "../../Database/database";

const CommentList = ({ post }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [comments, setComments] = React.useState(post.comments);
  const [commentsArray, setCommentsArray] = React.useState();

  React.useEffect(() => {
    setComments(database.getComments(post.postID));
    setCommentsArray(
      Object.keys(comments).map(function (_) {
        return comments[_];
      })
    );
  }, [post]);
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    if (true) {
      try {
        setComments(database.getComments(post.postID));
        setCommentsArray(
          Object.keys(comments).map(function (_) {
            return comments[_];
          })
        );
        setRefreshing(false);
        ToastAndroid.show("Updated", ToastAndroid.SHORT);
      } catch (error) {
        console.error(error);
      }
    } else {
      ToastAndroid.show("No more new comments", ToastAndroid.SHORT);
      setRefreshing(false);
    }
  }, [refreshing]);
  return (
    <FlatList
      keyboardShouldPersistTaps="handled"
      data={commentsArray}
      keyExtractor={({ id }) => id}
      refreshControl={
        <RefreshControl
          progressBackgroundColor={COLORS.secondary}
          colors={[COLORS.primary]}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      renderItem={({ item }) => {
        let comment = {};
        Object.keys(item).forEach(function (key) {
          comment = item[key];
        });
        return (
          <CommentHead
            avatar={comment.avatar}
            name={comment.userName}
            commentText={comment.commentText}
          />
        );
      }}
    />
  );
};

export default CommentList;
