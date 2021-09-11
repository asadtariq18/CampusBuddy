import React from "react";
import { Text, View } from "react-native";
import moment from "moment";
import styles from "./styles";
import { COLORS } from "../../Constants/COLORS";

const MessageView = ({ user, message, createdAt }) => {
  const isMyMessage = () => {
    return user.id === "u1";
  };
  return (
    <View style={styles.container}>
      <View
        style={
          (styles.messageBox,
          {
            backgroundColor: isMyMessage()
              ? COLORS.primary + "99"
              : COLORS.secondary,
            marginLeft: isMyMessage() ? 50 : 0,
            marginRight: isMyMessage() ? 0 : 50,
            borderRadius: 20,
            padding: 10,
          })
        }
      >
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.time}>{moment(createdAt).fromNow()}</Text>
      </View>
    </View>
  );
};

export default MessageView;
