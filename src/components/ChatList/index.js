import React from "react";
import { FlatList } from "react-native";
import styles from "./style";
import ChatHead from "../ChatHead";
import data from "../../Data/ChatData/chatdata";

const ChatList = () => (
  <FlatList
    style={styles.container}
    data={data}
    keyExtractor={({ name }) => name}
    renderItem={({ item }) => (
      <ChatHead
        imageUri={item.imageUri}
        name={item.name}
        lastmessage={item.lastmessage}
      />
    )}
  />
);

export default ChatList;
