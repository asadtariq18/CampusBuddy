import React from "react";
import { FlatList, ScrollView } from "react-native";
import MessageView from "../MessageView/index";
import messagesData from "../../Data/ChatData/ChatMessages";

const MessageList = () => {
  return (
    <ScrollView scrollsToTop={false}>
      <FlatList
        data={messagesData.messages}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <MessageView
            user={item.user}
            message={item.content}
            createdAt={item.createdAt}
          />
        )}
      />
    </ScrollView>
  );
};
export default MessageList;
