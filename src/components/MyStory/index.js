import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, View, ActivityIndicator } from "react-native";
import ProfilePicture from "../ProfilePicture";
import { LinearProgress } from "react-native-elements";

import styles from "./style";
import database from "../../Database/database";
import { COLORS } from "../../Constants/COLORS";
import { useDispatch, useSelector } from "react-redux";
import { setMyStory } from "../../Redux/Story/actions";

const MyStory = ({ userStoriesObj, borderColor, color }) => {
  const [storiesList, setStoriesList] = useState(userStoriesObj.stories);
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const myStory = useSelector((state) => state.story.myStory);
  useEffect(() => {
    let userStories = userStoriesObj;
    let user = database.getUser(userStories.user.userID);
    let storiesList = Object.values(userStories.stories);
    setStoriesList(storiesList);
    setUser(user);
  }, [userStoriesObj]);
  // console.log(storiesList)
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("StoryScreen", {
      userID: user.userID,
      username: user.name,
      stories: storiesList,
      imageUri: user.avatar,
    });
  };
  if (!user) {
    return (
      <ActivityIndicator
        style={{ marginTop: 20, marginHorizontal: 40 }}
        color={COLORS.primary}
        size={25}
      />
    );
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { backgroundColor: color }]}>
        <LinearProgress
          value={1}
          style={{}}
          color={COLORS.primary}
          trackColor={COLORS.secondary2}
        />
        <ProfilePicture borderColor={borderColor} uri={user.avatar} />
        <Text style={styles.name}>{user.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyStory;
