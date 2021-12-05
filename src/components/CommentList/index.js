import React from "react";
import {
  FlatList,
  RefreshControl,
  ScrollView,
  ToastAndroid,
} from "react-native";
import CommentHead from "../CommentHead/index";
import { COLORS } from "../../Constants/COLORS";
import database from "../../Database/database";
import { setCommentsArray } from "../../Redux/Post/actions";
import { useDispatch, useSelector } from "react-redux";

const CommentList = ({ post }) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = React.useState(false);
  const commentsArray = useSelector((state) => state.post.commentsArray);

  React.useEffect(() => {
    dispatch(setCommentsArray(database.getComments(post.postID)));
    onRefresh();
  }, [post]);
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    if (true) {
      try {
        dispatch(setCommentsArray(database.getComments(post.postID)));
        setRefreshing(false);
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
        return <CommentHead comment={item} />;
      }}
    />
  );
};

export default CommentList;
