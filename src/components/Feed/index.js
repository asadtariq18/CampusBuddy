import React from "react";
import { FlatList, RefreshControl, ToastAndroid } from "react-native";
import Post from "../Post";
import Stories from "../../components/Stories";
import postsData from "../../Data/PostData/posts";
import { View } from "native-base";

const Feed = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    if (postsData.length < 1) {
      try {
        setRefreshing(false);
        ToastAndroid.show("Updated", ToastAndroid.SHORT);
      } catch (error) {
        console.error(error);
      }
    } else {
      ToastAndroid.show("No more new posts", ToastAndroid.SHORT);
      setRefreshing(false);
    }
  }, [refreshing]);
  return (
    <View style={{ paddingBottom: 50 }}>
      <FlatList
        data={postsData}
        showsVerticalScrollIndicator={false}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <Post post={item} />}
        ListHeaderComponent={Stories}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default Feed;
