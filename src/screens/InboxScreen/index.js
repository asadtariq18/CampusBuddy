// @refresh reset

import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Keyboard, Dimensions, Image } from "react-native";
import { Icon, Button } from "native-base";
import {
  GiftedChat,
  InputToolbar,
  Send,
  Bubble,
  Avatar,
} from "react-native-gifted-chat";
import { LinearProgress } from "react-native-elements";
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
  setLastMessage,
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
  const [user, setUser] = useState();

  let id = `${route.params.userID}+${database.getCurrentUser().userID}`;
  const chatID = sort(id);
  const chatsRef = db.collection(`Chats/c/${chatID}`);

  const [messages, setMessages] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const image = useSelector((state) => state.inbox.image);
  const audio = useSelector((state) => state.inbox.audio);
  const onFocus = useSelector((state) => state.inbox.onFocus);
  const lastMessage = useSelector((state) => state.inbox.lastMessage);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    let user = {
      userID: database.getCurrentUser().userID,
      name: database.getCurrentUser().name,
    };

    setUser(user);
    //readUser();
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

  function sort(id) {
    return id.split("").sort().join("");
  }
  useEffect(() => {
    //readUser();
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
      console.log("USer: ", user);
      // dispatch(
      //   setUser({
      //     userID: JSON.parse(user).userID,
      //     name: JSON.parse(user).name,
      //   })
      // );
    }
  }

  async function handleSend(messages) {
    let lm;
    const writes = messages.map(async (m) => {
      if (image) {
        setSending(true);
        const imageURL = await database.uploadImage(image);
        m.image = image;
        dispatch(setImage(null));
        dispatch(setLastMessage("*IMAGE*"));
        lm = "*IMAGE*";
        chatsRef.add(m);
        setSending(false);
      } else if (audio) {
        m.audio = audio;
        dispatch(setAudio(null));
        dispatch(setLastMessage("*VOICE MESSAGE*"));
        lm = "*VOICE MESSAGE*";
        chatsRef.add(m);
      } else {
        dispatch(setLastMessage(m.text));
        lm = m.text;
        chatsRef.add(m);
        // console.log(m);
      }
    });
    await Promise.all(writes).then(() => {
      database.addToChatList(chatID, route.params.userID, lm);
    });
  }

  async function startRecording() {
    try {
      console.log(user);
      console.log("Requesting permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      setIsRecording(true);
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
    setIsRecording(false);
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
      alert("you need to give permission to work");
    }
  };
  const pickFromGallery = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (granted) {
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      dispatch(setImage(data.uri));
    } else {
      Alert.alert("you need to give permission to work");
    }
  };

  return (
    <View style={styles.container}>
      {sending ? (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
          }}
        >
          <Text style={styles.text2}> Sending image... </Text>
          <LinearProgress
            value={1}
            style={{
              marginVertical: 5,
              width: Dimensions.get("window").width / 2,
            }}
            color={COLORS.primary}
            trackColor={COLORS.secondary2}
          />
        </View>
      ) : null}
      {isRecording ? (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
          }}
        >
          <Text style={styles.text2}> Recording... </Text>
          <LinearProgress
            value={1}
            style={{
              marginVertical: 5,
              width: Dimensions.get("window").width / 2,
            }}
            color={COLORS.primary}
            trackColor={COLORS.secondary2}
          />
        </View>
      ) : null}
      {user != undefined ? (
        <GiftedChat
          renderBubble={(props) => {
            return (
              <Bubble
                {...props}
                textStyle={{
                  left: {
                    color: COLORS.font,
                  },
                }}
                wrapperStyle={{
                  right: {
                    backgroundColor: COLORS.primary,
                  },
                  left: {
                    backgroundColor: COLORS.secondary2,
                  },
                }}
              />
            );
          }}
          alwaysShowSend
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
          renderLoadEarlier={(props) => {
            return (
              <LinearProgress
                {...props}
                value={1}
                style={{
                  marginVertical: 10,
                  width: Dimensions.get("window").width / 2,
                  backgroundColor: "transparent",
                }}
                color={COLORS.primary}
                trackColor={COLORS.secondary2}
              />
            );
          }}
          renderSend={(props) => {
            return (
              <View>
                {image ? (
                  <Image
                    style={styles.image}
                    source={{
                      uri: image,
                    }}
                  />
                ) : null}
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {image ? null : (
                    <Button
                      transparent
                      style={styles.button3}
                      onPress={pickFromGallery}
                    >
                      <Icon name="ios-camera" />
                    </Button>
                  )}
                  {onFocus || image ? null : (
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
                <LinearProgress
                  value={1}
                  style={{
                    marginVertical: 10,
                    width: Dimensions.get("window").width / 2,
                  }}
                  color={COLORS.primary}
                  trackColor={COLORS.secondary2}
                />

                <Text style={styles.text}> No Messages, Start your chat </Text>
              </View>
            );
          }}
          renderLoading={(props) => {
            return (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "transparent",
                }}
              >
                <LinearProgress
                  {...props}
                  value={1}
                  style={{
                    marginBottom: Dimensions.get("window").height / 2.2,
                    width: Dimensions.get("window").width,
                  }}
                  color={COLORS.primary}
                  trackColor={COLORS.secondary2}
                />
                <Text style={styles.text2}> Loading Messages... </Text>
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
          user={{
            _id: database.getCurrentUser().userID,
            name: database.getCurrentUser().name,
          }}
          onSend={handleSend}
        />
      ) : null}
    </View>
  );
};

export default InboxScreen;
