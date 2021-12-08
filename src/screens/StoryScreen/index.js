import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
  ActivityIndicator,
  Dimensions,
  View,
  TextInput,
} from "react-native";
import moment from "moment";
import { useRoute, useNavigation } from "@react-navigation/native";
import stories from "../../Data/StoriesData/stories";
import { COLORS } from "../../Constants/COLORS";
import ProfilePicture from "../../components/ProfilePicture";
import database from "../../Database/database";
import styles from "./style";

const StoryScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [username, setUsername] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [userID, setUserID] = useState(null);
  const [userStories, setUserStories] = useState(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);
  const [activeStory, setActiveStory] = useState(null);
  const [emptyInput, setEmptyInput] = useState(true);
  const [messageText, setMessageText] = useState("");

  useEffect(() => {
    setUsername(route.params.username);
    setImageUri(route.params.imageUri);
    setUserID(route.params.userID);
    setUserStories(route.params.stories);
    setActiveStoryIndex(0);
  }, []);

  useEffect(() => {
    if (userStories && userStories.length > activeStoryIndex - 1) {
      setActiveStory(userStories[activeStoryIndex]);
    }
  }, [activeStoryIndex]);

  const onChangeHandle = () => {
    if (messageText !== "") {
      setEmptyInput(false);
    } else {
      setEmptyInput(true);
    }
  };

  const handleMessage = () => {
    alert(userID + messageText);
  };
    const handleDelete = () => {
      alert("Delete Story");
    };
  const handleNextStory = () => {
    if (activeStoryIndex >= stories.length - 1) {
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePrevStory = () => {
    if (activeStoryIndex <= 0) {
        navigation.goBack()
      return;
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  };

  const handlePress = (evt) => {
    const x = evt.nativeEvent.locationX;
    const screenWidth = Dimensions.get("window").width;

    if (x < screenWidth / 2) {
      handlePrevStory();
    } else {
      handleNextStory();
    }
  };
  const onPress = () => navigation.navigate("Feed");
  //   console.log(activeStory);
  if (!activeStory) {
    return (
      <TouchableHighlight onPress={onPress}>
        <SafeAreaView style={styles.container}>
          <ActivityIndicator color={COLORS.primary} size={60} />
        </SafeAreaView>
      </TouchableHighlight>
    );
  }
  return (
    <TouchableHighlight onPress={handlePress}>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={{ uri: activeStory.imageUri }}
        >
          <View style={styles.top}>
            <ProfilePicture border={0} size={35} uri={imageUri} />
            <Text style={styles.userName}>{username}</Text>
            <Text style={styles.postedTime}>
              {moment(activeStory.postedAt, "YYYYMMDDhhmmss").fromNow()}
            </Text>
          </View>

          {userID === database.getCurrentUser().userID ? (
            <View style={styles.bottomContainer}>
                <View style={{flexDirection: "row"}}>
              <Text style={styles.messageButton2}>Views</Text>
              <Text style={styles.viewsCount}>{activeStory.views}</Text>
                </View>
              <TouchableOpacity  onPress={handleDelete}>
                <Text style={styles.messageButton2}>Delete</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.bottomContainer}>
              <View style={styles.textInputContainer}>
                <TextInput
                  onChangeText={(text) => {
                    setMessageText(text);
                    onChangeHandle();
                  }}
                  style={styles.textInput}
                  placeholder={"Type..."}
                  placeholderTextColor={COLORS.font_secondary}
                />
              </View>
              {!emptyInput ? (
                <TouchableOpacity>
                  <Text style={styles.messageButton}>Message</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={handleMessage}>
                  <Text style={styles.messageButton2}>Message</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        </ImageBackground>
      </SafeAreaView>
    </TouchableHighlight>
  );
};

export default StoryScreen;
