import React from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import StoryPreview from "../Story";
import styles from "./style";
import data from "../../Data/StoriesData/stories";
import database from "../../Database/database";
const Stories = () => {
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
          aspect: [1, 1],
          quality: 0.5,
        });
        database.uploadUserStory(media.uri);
      } else {
        Alert.alert("you need to give up permission to work");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={camPress}>
        <View style={styles.plusIcon}>
          <Icon name="pluscircleo" color="gray" size={50} />
          <Text style={styles.name}>Add</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.container}>
        <FlatList
          style={styles.storiesContainer}
          data={data}
          keyExtractor={({ id }) => id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <StoryPreview story={item} />}
        />
      </View>
    </View>
  );
};

export default Stories;
