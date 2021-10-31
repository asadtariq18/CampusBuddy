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
import Database from "../../Database/database";

const CreatePostScreen = () => {
  const [caption, setCaption] = useState("");
  const [type, setType] = useState("status");
  const [privacy, setPrivacy] = useState("public");
  const [image, setImage] = useState("");

  const navigation = useNavigation();
  const onChangeCaption = (input) => {
    setCaption(input);
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
      setImage(data.uri)
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
      setImage(data.uri);
    } else {
      Alert.alert("you need to give permission to work");
    }
  };

  const postPressed = () => {
    if (image==="") {
      ToastAndroid.show("No image selected", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("Uploading your post", ToastAndroid.LONG);
      Database.uploadUserPost(caption, privacy, type, image)
      setCaption(null)
      setImage(null)
      navigation.navigate("Home");
      ToastAndroid.show("Post Uploaded", ToastAndroid.SHORT);
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
          placeholderTextColor={COLORS.font_secondary}
          selectionColor={COLORS.primary + "99"}
          style={styles.textInput}
          onChangeText={onChangeCaption}
          placeholder={"caption..."}
        ></TextInput>
      </View>

      <Text style={styles.h2text}>Select privacy</Text>
      <View style={styles.cardView}>
        <TouchableWithoutFeedback onPress={() => setPrivacy("public")}>
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
        <TouchableWithoutFeedback onPress={() => setPrivacy("private")}>
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
      <View>
        <Text style={styles.h2text}>Select type</Text>
        <View style={styles.cardView}>
          <TouchableWithoutFeedback onPress={() => setType("status")}>
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
          <TouchableWithoutFeedback onPress={() => setType("ask")}>
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
          <TouchableWithoutFeedback onPress={() => setType("lost")}>
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
          <TouchableWithoutFeedback onPress={() => setType("found")}>
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
