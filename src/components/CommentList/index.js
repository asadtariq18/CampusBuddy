import React from "react";
import { FlatList, RefreshControl, ScrollView, ToastAndroid } from "react-native";
import CommentHead from "../CommentHead/index";
import data from "../../Data/CommentData/commentData";
import { COLORS } from "../../Constants/COLORS";

const CommentList = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    if (false) {
      try {
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
      data={data}
      keyExtractor={({ id }) => id}
      refreshControl={
        <RefreshControl
          progressBackgroundColor={COLORS.secondary}
          colors={[COLORS.primary]}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      renderItem={({ item }) => (
        <CommentHead
          imageUri={item.imageUri}
          name={item.name}
          comment={item.comment}
        />
      )}
    />
  );
};

export default CommentList;
