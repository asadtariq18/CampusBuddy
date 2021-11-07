// @refresh reset

import React, { useState, useEffect, useCallback } from "react";
import { View, Text } from "react-native";
import {
  GiftedChat,
  InputToolbar,
  Send,
  Bubble,
  Avatar,
  onSend,
} from "react-native-gifted-chat";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LogBox } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import styles from "../InboxScreen/style";
import { COLORS } from "../../Constants/COLORS";
import database from "../../Database/database";

const firebaseConfig = {
  apiKey: "AIzaSyDUjGcux9KGVcXlBe6fqSVFSoa5nMMqHGY",
  authDomain: "campus-buddy-69dd7.firebaseapp.com",
  projectId: "campus-buddy-69dd7",
  storageBucket: "campus-buddy-69dd7.appspot.com",
  messagingSenderId: "862630618301",
  appId: "1:862630618301:web:1f34fdb33e5edbd0e603d4",
  measurementId: "G-E6Z5LCLYT0",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

LogBox.ignoreLogs(["Setting a timer for a long period of time"]);

const db = firebase.firestore();

const InboxScreen = ({ route }) => {
  const [user, setUser] = useState(null);
  const { userID } = route.params;
  const chatsRef = db.collection(
    `Chat_${userID}_&_${database.getCurrentUser().userID}`
  );
  const avtr = database.getCurrentUser().profile_picture;
  const [messages, setMessages] = useState([]);
  const [image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
  );

  useEffect(() => {
    readUser();
    const unsubscribe = chatsRef.onSnapshot((querySnapshot) => {
      const messagesFirestore = querySnapshot
        .docChanges()
        .filter(({ type }) => type === "added")
        .map(({ doc }) => {
          const message = doc.data();
          return { ...message, createdAt: message.createdAt.toDate() };
        })
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      appendMessages(messagesFirestore);
    });
    return () => unsubscribe();
  }, []);

  const appendMessages = useCallback(
    (messages) => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages)
      );
    },
    [messages]
  );

  async function readUser() {
    const user = await AsyncStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }

  async function handleSend(messages) {
    const writes = messages.map((m) => {
      if (image) {
        m.image = image;
      }
      chatsRef.add(m);
    });
    await Promise.all(writes);
  }

  return (
    <View style={styles.container}>
      <GiftedChat
        renderBubble={(props) => {
          return (
            <Bubble
              {...props}
              wrapperStyle={{
                right: {
                  backgroundColor: COLORS.primary,
                },
                left: {
                  backgroundColor: COLORS.font_secondary,
                },
              }}
            />
          );
        }}
        renderInputToolbar={(props) => {
          return (
            <InputToolbar
              {...props}
              containerStyle={styles.textInput}
              textInputStyle={{ color: COLORS.font }}
            />
          );
        }}
        renderSend={(props) => {
          return (
            <Send
              {...props}
              containerStyle={styles.button2}
              textStyle={styles.text2}
            />
          );
        }}
        renderChatEmpty={() => {
          return (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.text}> No Message, Start your chat </Text>
            </View>
          );
        }}
        messagesContainerStyle={{
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          backgroundColor: "#0f0f0f",
          paddingBottom: 60,
          height: "100%",
        }}
        style={styles.container}
        messages={messages}
        user={user}
        onSend={handleSend}
      />
    </View>
  );
};

export default InboxScreen;
