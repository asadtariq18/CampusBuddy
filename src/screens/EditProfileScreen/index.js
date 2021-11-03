import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  ToastAndroid,
  Keyboard,
} from "react-native";
import { Header } from "native-base";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import { COLORS } from "../../Constants/COLORS";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import database from "../../Database/database";

const EditProfileScreen = () => {
  const [isDone, setIsDone] = useState(false);
  const [image, setImage] = useState(database.getCurrentUser().profile_picture);
  const [info, setInfo] = useState("");
  const navigation = useNavigation();

  const pickFromGallery = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (granted) {
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      if (!data.cancelled) {
        setIsDone(true);
        setImage(data.uri);
    }
  } else {
      Alert.alert("Campus Buddy wants permission to open gallery");
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
      if (!data.cancelled) {
        setIsDone(true);
        setImage(data.uri);
      }
    } else {
      Alert.alert("Campus Buddy wants permission to access camera");
    }
  };
  const onChangeText = (value) => {
    setInfo(value);
    if (value !== "") {
      setIsDone(true);
    } else {
      setIsDone(false);
    }
  };
  const savePressed = () => {
    let newData = new Object();
    newData = {
      image: image,
      bio: info,
    };
    if (isDone) {
      Keyboard.dismiss();
      database.updateProfile(newData);
      navigation.navigate("Feed");
      ToastAndroid.showWithGravity(
        "Changes Saved",
        ToastAndroid.TOP,
        ToastAndroid.LONG
      );
    } else {
      Keyboard.dismiss();
    }
  };

  const discardPressed = () => {
    Keyboard.dismiss();
    navigation.navigate("Feed");
    ToastAndroid.showWithGravity(
      "Discarded",
      ToastAndroid.TOP,
      ToastAndroid.LONG
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header}>
        <StatusBar backgroundColor={COLORS.background_dark} />
        <View style={styles.header}>
          <Text style={styles.headerText}>Edit Profile</Text>
        </View>
      </Header>
      <View style={styles.avatar}>
        <Image source={{ uri: image }} style={styles.avatar} />
      </View>
      <View
        style={{
          justifyContent: "center",
          marginTop: 5,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={camPress}>
          <Text style={styles.button}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={pickFromGallery}>
          <Text style={styles.button}>Gallery</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Your info</Text>
      <TextInput
        placeholder={"Type here..."}
        placeholderTextColor={COLORS.font_secondary}
        multiline
        selectionColor={COLORS.primary + "99"}
        style={styles.textInput}
        onChangeText={(value) => onChangeText(value)}
      ></TextInput>

      <TouchableWithoutFeedback onPress={savePressed}>
        <Text style={isDone ? styles.Button2 : styles.Button1}>Save</Text>
      </TouchableWithoutFeedback>
      <TouchableOpacity onPress={discardPressed}>
        <Text style={styles.text}>Discard</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default EditProfileScreen;
