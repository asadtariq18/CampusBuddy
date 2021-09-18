import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { Header } from "native-base";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { COLORS } from "../../Constants/COLORS";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const CreatePostScreen = () => {
  const [caption, setCaption] = useState("");
  const [isSelected_Status, setIsSelected_Status] = useState(true);
  const [isSelected_Ask, setIsSelected_Ask] = useState(false);
  const [isSelected_Lost, setIsSelected_Lost] = useState(false);
  const [isSelected_Found, setIsSelected_Found] = useState(false);

  const navigation = useNavigation();
  const onChangeCaption = (input) => {
    setCaption(input);
  };
  const onSelect = (buttonTitle) => {
    if (buttonTitle === "status") {
      setIsSelected_Status(!isSelected_Status);
      setIsSelected_Ask(false);
      setIsSelected_Lost(false);
      setIsSelected_Found(false);
    }
    if (buttonTitle === "ask") {
      setIsSelected_Status(false);
      setIsSelected_Ask(!isSelected_Ask);
      setIsSelected_Lost(false);
      setIsSelected_Found(false);
    }
    if (buttonTitle === "lost") {
      setIsSelected_Status(false);
      setIsSelected_Ask(false);
      setIsSelected_Lost(!isSelected_Lost);
      setIsSelected_Found(false);
    }
    if (buttonTitle === "found") {
      setIsSelected_Status(false);
      setIsSelected_Ask(false);
      setIsSelected_Lost(false);
      setIsSelected_Found(!isSelected_Found);
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
    } else {
      Alert.alert("you need to give up permission to work");
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
    } else {
      Alert.alert("you need to give up permission to work");
    }
  };

  const postPressed = () => {
    if (caption === "") {
      ToastAndroid.show("Please write something", ToastAndroid.SHORT);
    } else {
      navigation.navigate("Feed");
      ToastAndroid.show("Uploading your post", ToastAndroid.LONG);
    }
  };

  const discardPressed = () => {
    navigation.navigate("Feed");
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
      <View>
        <Text style={styles.h2text}>Write caption</Text>
        <TextInput
          multiline
          contextMenuHidden={true}
          selectionColor={COLORS.primary + "99"}
          style={styles.textInput}
          onChangeText={onChangeCaption}
        ></TextInput>
        <Text style={styles.h2text}>Select category</Text>
        <View style={styles.cardView}>
          <TouchableWithoutFeedback onPress={() => onSelect("status")}>
            {isSelected_Status ? (
              <View style={styles.buttonView}>
                <Text style={styles.button_pressed}>Status</Text>
              </View>
            ) : (
              <View style={styles.buttonView}>
                <Text style={styles.button}>Status</Text>
              </View>
            )}
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => onSelect("ask")}>
            {isSelected_Ask ? (
              <View style={styles.buttonView}>
                <Text style={styles.button_pressed}>Ask</Text>
              </View>
            ) : (
              <View style={styles.buttonView}>
                <Text style={styles.button}>Ask</Text>
              </View>
            )}
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => onSelect("lost")}>
            {isSelected_Lost ? (
              <View style={styles.buttonView}>
                <Text style={styles.button_pressed}>Lost</Text>
              </View>
            ) : (
              <View style={styles.buttonView}>
                <Text style={styles.button}>Lost</Text>
              </View>
            )}
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => onSelect("found")}>
            {isSelected_Found ? (
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
      <Text style={styles.h2text}>Insert image</Text>
      <View style={styles.cardView}>
        <TouchableOpacity onPress={camPress}>
          <Text style={styles.button}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={pickFromGallery}>
          <Text style={styles.button}>Gallery</Text>
        </TouchableOpacity>
      </View>
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
