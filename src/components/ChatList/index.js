import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import ChatHead from "../ChatHead";

const ChatList = ({ chatsObj }) => {
  const [chats, setChats] = useState(chatsObj);
  const [chatsArray, setChatsArray] = useState([]);
  useEffect(() => {
    setChats(chatsObj);
    setChatsArray(
      Object.values(chats).sort(function (a, b) {
        return b.timestamp > a.timestamp;
      })
    );
  }, [chats]);
  return (
    <FlatList
      style={{marginTop: 8}}
      data={chatsArray}
      keyExtractor={({ name }) => name}
      renderItem={({ item }) => (
        <ChatHead userID={item.userID} timestamp={item.timestamp} lastmessage={item.lastMessage} />
      )}
    />
  );
};
export default ChatList;
