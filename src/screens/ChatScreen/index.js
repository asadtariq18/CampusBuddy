import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  RefreshControl,
  ActivityIndicator,
  Text,
} from "react-native";
import ChatList from "../../components/ChatList";
import { COLORS } from "../../Constants/COLORS";
import database from "../../Database/database";
import styles from "./style";

const ChatScreen = () => {
  const [chats, setChats] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    let chats = database.getChatList();
    setChats(chats);
  }, []);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      setChats(database.getChatList());
      setRefreshing(false);
    } catch (error) {
      setRefreshing(false);
      console.error(error);
    }
  }, [refreshing]);
  // console.log(chats);
  return (
    <ScrollView
      onRefresh={onRefresh}
      refreshControl={
        <RefreshControl
          progressBackgroundColor={COLORS.background_dark}
          colors={[COLORS.primary]}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      style={styles.container}
    >
      <View style={styles.container}>
        {chats ? (
          <ChatList chatsObj={chats} />
        ) : (
          <Text
            style={{
              fontSize: 18,
              color: COLORS.font_secondary,
              marginTop: 30,
              alignSelf: "center",
            }}
          >
            {" "}
            No Chats{" "}
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default ChatScreen;
