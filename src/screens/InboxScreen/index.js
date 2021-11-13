// @refresh reset

import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Keyboard } from "react-native";
import { Icon, Button } from "native-base";
import {
  GiftedChat,
  InputToolbar,
  Send,
  Bubble,
} from "react-native-gifted-chat";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Audio } from "expo-av";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LogBox } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import styles from "../InboxScreen/style";
import { COLORS } from "../../Constants/COLORS";
import database from "../../Database/database";
import { useDispatch, useSelector } from "react-redux";
import {
  setUser,
  setMessages,
  setImage,
  setAudio,
  setOnFocus,
} from "../../Redux/Inbox/actions";

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
  const dispatch = useDispatch();
  let recording = new Audio.Recording();
  const user = useSelector((state) => state.inbox.user);
  const { userID } = route.params;
  const chatsRef = db.collection(
    `Chat_${userID}_&_${database.getCurrentUser().userID}`
  );

  const [messages, setMessages] = useState([])
  const image = useSelector((state) => state.inbox.image);
  const audio = useSelector((state) => state.inbox.audio);
  const onFocus = useSelector((state) => state.inbox.onFocus);

  useEffect(() => {
    readUser();
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      dispatch(setOnFocus(true));
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      dispatch(setOnFocus(false));
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  useEffect(() => {
    readUser();
    console.log(messages);
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
        )
    },
    [messages]
  );

  async function readUser() {
    const user = await AsyncStorage.getItem("user");
    if (user) {
      dispatch(setUser(JSON.parse(user)));
    }
  }

  async function handleSend(messages) {
    const writes = messages.map((m) => {
      if (image) {
        m.image = image;
        dispatch(setImage(null));
      }
      if (audio) {
        m.audio = audio;
        dispatch(setAudio(null));
      }
      chatsRef.add(m);
    });
    await Promise.all(writes);
  }

  async function startRecording() {
    try {
      console.log("Requesting permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log("Starting recording..");
      await recording.prepareToRecordAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      await recording.startAsync();
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    dispatch(setAudio(uri));
    console.log("Recording stopped and stored at", uri);
  }
  const camPress = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA);
    if (granted) {
      let data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      dispatch(setImage(data.uri));
    } else {
      Alert.alert("you need to give permission to work");
    }
  };

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
            ></InputToolbar>
          );
        }}
        renderAvatar={null}
        renderSend={(props) => {
          return (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Button transparent style={styles.button3} onPress={camPress}>
                <Icon name="ios-camera" />
              </Button>
              {onFocus ? null : (
                <Button
                  transparent
                  style={styles.button3}
                  onPressIn={startRecording}
                  onPressOut={stopRecording}
                >
                  <Icon name="ios-mic" />
                </Button>
              )}
              <Send
                {...props}
                containerStyle={styles.button2}
                textStyle={styles.text2}
              />
            </View>
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
