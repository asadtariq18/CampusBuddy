import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import ProfilePicture from "../ProfilePicture";
import { LinearProgress } from "react-native-elements";
import styles from "./style";
import database from "../../Database/database";
import { COLORS } from "../../Constants/COLORS";
import { useDispatch, useSelector } from "react-redux";
import { setSuggestionList } from "../../Redux/FriendSuggestion/actions";

const FriendSuggestionHead = ({ userID }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [user, setUser] = useState({});
  const [requestSent, setRequestSent] = useState(false);

  const onPress = () => {
    navigation.navigate("UserProfile", { user: user });
  };
  const handleAddFriend = () => {
    setRequestSent(true);
    database.sendFriendRequest(userID);
    dispatch(setSuggestionList(database.getUsers()))
    ToastAndroid.show("Request sent");
  };
  const handleCancelRequest = () => {
    database.removeFriendRequest(userID);
    setRequestSent(false);
    ToastAndroid.show("Request Removed");
  };
  useEffect(() => {
    console.log("loadedd");
    let user = database.getUser(userID);
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  }, []);

  if (user) {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image style={styles.image} source={{ uri: user.avatar }} />

        <View style={{ marginTop: 10 }}>
          <Text style={styles.name}>{user.name} </Text>
          <Text style={styles.text2}>@{user.userID}</Text>
          {!requestSent ? (
            <TouchableOpacity onPress={handleAddFriend}>
              <Text style={styles.button}> Add Friend</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleCancelRequest}>
              <Text style={styles.button2}> Cancel Request</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    );
  } else {
    return <ActivityIndicator size={30} />;
  }
};

export default FriendSuggestionHead;
