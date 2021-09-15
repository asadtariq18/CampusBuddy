import React from "react";
import { FlatList, RefreshControl, ToastAndroid } from "react-native";
import styles from "./style";
import ChatHead from "../ChatHead";
import ChatData from "../../Data/ChatData/chatdata";

const ChatList = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    if (ChatData.length < 1) {
      try {
        setRefreshing(false);
        ToastAndroid.show("Updated", ToastAndroid.SHORT);
      } catch (error) {
        console.error(error);
      }
    } else {
      ToastAndroid.show("No more new chats", ToastAndroid.SHORT);
      setRefreshing(false);
    }
  }, [refreshing]);
  return (
    <FlatList
      style={styles.container}
      data={ChatData}
      keyExtractor={({ name }) => name}
      renderItem={({ item }) => (
        <ChatHead
          imageUri={item.imageUri}
          name={item.name}
          lastmessage={item.lastmessage}
        />
      )}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};
export default ChatList;
