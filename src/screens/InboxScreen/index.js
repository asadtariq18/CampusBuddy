// @refresh reset

import React, { useState, useEffect, useCallback } from "react";
import { GiftedChat } from "react-native-gifted-chat";
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

const InboxScreen = ({route}) => {
  const [user, setUser] = useState(null);
  const {userID} = route.params;
  const chatsRef = db.collection(`Chat_${userID}_&_${database.getCurrentUser().userID}`);
  const avtr = database.getCurrentUser().profile_picture;
  const [messages, setMessages] = useState([]);

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
    const writes = messages.map((m) => chatsRef.add(m));
    await Promise.all(writes);
  }

  return (
    <GiftedChat
    showUserAvatar
      alwaysShowSend
      messagesContainerStyle={{ backgroundColor: COLORS.background_dark }}
      isTyping
      style={styles.container}
      messages={messages}
      user={user}
      onSend={handleSend}
    />
  );
};

export default InboxScreen;
