import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import StoryPreview from "../Story";
import styles from "./style";
import data from "../../Data/StoriesData/stories";
import database from "../../Database/database";
import { COLORS } from "../../Constants/COLORS";
import { useSelector } from "react-redux";
import MyStory from "../MyStory";
import moment from "moment";
const Stories = () => {
  const [storiesData, setStoriesData] = useState(null);
  // const myStory = useSelector((state) => state.story.myStory);
  const [myStory, setMyStory] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    setStoriesData(database.getUserStories());
  }, []);
  const pickFromGallery = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (granted) {
      let media = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      if (!media.cancelled) {
        setUploading(true);
        await database.uploadUserStory(media.uri);
        setUploading(false);
        setStoriesData(database.getUserStories());
        ToastAndroid.show("Story Uploaded", ToastAndroid.SHORT);
      }
    } else {
      Alert.alert("you need to give up permission to work");
    }
  };

  const camPress = async () => {
    try {
      const { granted } = await Permissions.askAsync(Permissions.CAMERA);
      if (granted) {
        let media = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [9, 16],
          quality: 1,
        });
        if (!media.cancelled) {
          setUploading(true);
          database.uploadUserStory(media.uri).then(() => {
            setUploading(false);
            setStoriesData(database.getUserStories());
            ToastAndroid.show("Story Uploaded", ToastAndroid.SHORT);
          });
        }
      } else {
        Alert.alert("you need to give up permission to work");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderStory = (item) => {
    if (moment().format("YYYYMMDDHHmmss") - item.user.lastStoryTime < 86400) {
      return (
        <StoryPreview
          userStoriesObj={item}
          color={COLORS.primary}
          borderColor={COLORS.secondary2}
        />
      );
    } else {
      return (
null
      );
    }

    //   friendsList.filter((value) =>{ console.log(value.userID)
    //   console.log(Object.values(item.user)[0])
    //   }
    //   )
    // if (
    //   friendsList.filter(function (n) {
    //     return Object.values(item.user).indexOf(n) !== -1;
    //   })
    // ) {
    // return <StoryPreview userStoriesObj={item} myStories={myStories} />;
    // } else {
    //   null;
    // }
  };
  return (
    <View style={styles.container}>
      {uploading ? (
        <View style={styles.loadingView}>
          <ActivityIndicator color={COLORS.primary} size={"small"} />
          <Text style={styles.name}>Uploading</Text>
        </View>
      ) : (
        <TouchableOpacity onPress={camPress}>
          <View style={styles.plusIcon}>
            <Icon
              style={{ marginBottom: 4 }}
              name="pluscircleo"
              color="gray"
              size={50}
            />
            <Text style={styles.name}>Add</Text>
          </View>
        </TouchableOpacity>
      )}
      {/* {myStory ? (
        <MyStory
          userStoriesObj={myStory}
          color={COLORS.primary}
          borderColor={COLORS.secondary}
        />
      ) : null} */}
      <View style={styles.container}>
        <FlatList
          style={styles.storiesContainer}
          data={storiesData}
          keyExtractor={({ id }) => id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => renderStory(item)}
        />
      </View>
    </View>
  );
};

export default Stories;
