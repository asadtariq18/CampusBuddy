import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ToastAndroid,
  Image,
  SafeAreaView,
} from "react-native";
import { Header } from "native-base";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { COLORS } from "../../Constants/COLORS";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Database from "../../Database/database";
import { useDispatch, useSelector } from "react-redux";
import { setCaption, setType, setPrivacy, setImage } from "../../Redux/CreatePost/actions";
const CreatePostScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const icon = "https://icon-library.com/images/add-photo-icon/add-photo-icon-19.jpg"
  const caption = useSelector((state)=> state.createPost.caption);
  const type = useSelector((state)=> state.createPost.type);
  const privacy = useSelector((state)=> state.createPost.privacy);
  const image = useSelector((state)=> state.createPost.image);

  const onChangeCaption = (input) => {
    dispatch(setCaption(input));
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

  const camPress = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA);
    if (granted) {
      let data = await ImagePicker.launchCameraAsync({
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

  const postPressed = () => {
    try {
      if (image === icon) {
        ToastAndroid.show("No image selected", ToastAndroid.SHORT);
      } else {
        ToastAndroid.show("Uploading your post", ToastAndroid.LONG);
        Database.uploadUserPost(caption, privacy, type, image);
        navigation.navigate("Home");
        dispatch(setCaption(""));
        dispatch(setImage(icon));
        dispatch(setType("status"));
        dispatch(setPrivacy("public"));
        ToastAndroid.show("Post Uploaded", ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log(error)
      ToastAndroid.show(error, ToastAndroid.SHORT);
    }
  };

  const discardPressed = () => {
    navigation.navigate("Home");
    dispatch(setCaption(""));
    dispatch(setImage(icon));
    dispatch(setType("status"));
    dispatch(setPrivacy("public"));
    ToastAndroid.show("Post cancelled", ToastAndroid.LONG);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header}>
        <StatusBar backgroundColor={COLORS.background_dark} />
        <View style={styles.header}>
          <Text style={styles.headerText}>Create a post</Text>
        </View>
      </Header>
      <ScrollView style={styles.container}>
        <View>
          <TextInput
            multiline
            placeholderTextColor={COLORS.font_secondary}
            selectionColor={COLORS.primary + "99"}
            style={styles.textInput}
            onChangeText={onChangeCaption}
            placeholder={"caption..."}
          ></TextInput>
        </View>

        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}
          />
          <View style={{ flexDirection: "row", marginTop: 8 }}>
            <TouchableOpacity onPress={camPress}>
              <Text style={styles.button}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={pickFromGallery}>
              <Text style={styles.button}>Gallery</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.cardView}>
        <View style={{ flexDirection: "row", marginTop: 8 }}>
          <TouchableWithoutFeedback onPress={() => dispatch(setPrivacy("public"))}>
            {privacy === "public" ? (
              <View style={styles.buttonView}>
                <Text style={styles.button_pressed}>Public</Text>
              </View>
            ) : (
              <View style={styles.buttonView}>
                <Text style={styles.button}>Public</Text>
              </View>
            )}
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => dispatch(setPrivacy("private"))}>
            {privacy === "private" ? (
              <View style={styles.buttonView}>
                <Text style={styles.button_pressed}>Private</Text>
              </View>
            ) : (
              <View style={styles.buttonView}>
                <Text style={styles.button}>Private</Text>
              </View>
            )}
          </TouchableWithoutFeedback>
          </View>
          <View style={{ flexDirection: "row", marginTop: 8 }}>
            <TouchableWithoutFeedback onPress={() => dispatch(setType("status"))}>
              {type === "status" ? (
                <View style={styles.buttonView}>
                  <Text style={styles.button_pressed}>Status</Text>
                </View>
              ) : (
                <View style={styles.buttonView}>
                  <Text style={styles.button}>Status</Text>
                </View>
              )}
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => dispatch(setType("ask"))}>
              {type === "ask" ? (
                <View style={styles.buttonView}>
                  <Text style={styles.button_pressed}>Ask</Text>
                </View>
              ) : (
                <View style={styles.buttonView}>
                  <Text style={styles.button}>Ask</Text>
                </View>
              )}
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => dispatch(setType("lost"))}>
              {type === "lost" ? (
                <View style={styles.buttonView}>
                  <Text style={styles.button_pressed}>Lost</Text>
                </View>
              ) : (
                <View style={styles.buttonView}>
                  <Text style={styles.button}>Lost</Text>
                </View>
              )}
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => dispatch(setType("found"))}>
              {type === "found" ? (
                <View style={styles.buttonView}>
                  <Text style={styles.button_pressed}>Found</Text>
                </View>
              ) : (
                <View style={styles.buttonView}>
                  <Text style={styles.button}>Found</Text>
                </View>
              )}
            </TouchableWithoutFeedback>
        </View>
      </View>
      <View></View>
      <TouchableWithoutFeedback onPress={postPressed}>
        <View style={styles.postButton}>
          <Text style={styles.h1text}>Post</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={discardPressed}>
        <Text style={styles.discardButton}>Discard</Text>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
export default CreatePostScreen;
