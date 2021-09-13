import React from "react";
import { Text, View } from "react-native";
import moment from "moment";
import styles from "./styles";
import { COLORS } from "../../Constants/COLORS";
import { TouchableOpacity } from "react-native-gesture-handler";
import {useClipboard} from "@react-native-community/clipboard";

const MessageView = ({ user, message, createdAt }) => {
  const isMyMessage = () => {
    return user.id === "u1";
  };

  return (
    <TouchableOpacity style={styles.container}>
      <View
        style={
          (styles.messageBox,
          {
            backgroundColor: isMyMessage() ? COLORS.primary : COLORS.secondary,
            marginLeft: isMyMessage() ? 50 : 0,
            marginRight: isMyMessage() ? 0 : 50,
            borderRadius: 20,
            padding: 10,
          })
        }
      >
        <Text style={styles.message}>{message}</Text>
        <View style={styles.timeView}>
          <Text style={styles.time}>{moment(createdAt).fromNow()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MessageView;
