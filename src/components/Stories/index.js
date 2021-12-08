import React, { useState, useEffect } from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import StoryPreview from "../Story";
import styles from "./style";
import data from "../../Data/StoriesData/stories";
import database from "../../Database/database";
import { COLORS } from "../../Constants/COLORS";
import { useSelector } from "react-redux";
const Stories = () => {
  const storiesData = database.getUserStories();
  const myStory = useSelector((state) => state.story.myStory);
  const pickFromGallery = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (granted) {
      let media = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      database.uploadUserStory(media.uri);
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
        database.uploadUserStory(media.uri);
      } else {
        Alert.alert("you need to give up permission to work");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderStory = (item) => {
    return (
      <StoryPreview
        userStoriesObj={item}
        color={COLORS.secondary2}
        borderColor={COLORS.primary}
      />
    );

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
      <TouchableOpacity onPress={camPress}>
        <View style={styles.plusIcon}>
          <Icon name="pluscircleo" color="gray" size={50} />
          <Text style={styles.name}>Add</Text>
        </View>
      </TouchableOpacity>
      {myStory ? (
        <StoryPreview
          userStoriesObj={myStory}
          color={COLORS.primary}
          borderColor={COLORS.secondary}
        />
      ) : null}
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
