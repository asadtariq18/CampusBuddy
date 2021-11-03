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

const EditProfileScreen = ({ route }) => {
  const gender = route.params.gender;
  const mail = route.params.mail;
  const [isDone, setIsDone] = useState(false);
  const [image, setImage] = useState(
    gender === "Female"
      ? "https://www.terrainhopperusa.com/wp-content/uploads/2019/01/avatar-woman.png"
      : "https://www.terrainhopperusa.com/wp-content/uploads/2019/01/avatar-man.png"
  );
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
      if (!data.cancelled) setImage(data.uri);
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
      if (data === null) setImage(data.uri);
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
  const finishPressed = () => {
    if (info !== "") {
      database.updateProfile_Picture(mail, image);
      Keyboard.dismiss();
      ToastAndroid.showWithGravity(
        "You are all set. Log in now",
        ToastAndroid.TOP,
        ToastAndroid.LONG
      );
      navigation.navigate("SignIn");
    } else {
      Keyboard.dismiss();
      ToastAndroid.showWithGravity(
        "Fields empty",
        ToastAndroid.TOP,
        ToastAndroid.SHORT
      );
    }
  };

  const skipPressed = () => {
    navigation.navigate("SignIn");
    Keyboard.dismiss();
    ToastAndroid.showWithGravity(
      "Log in now",
      ToastAndroid.TOP,
      ToastAndroid.LONG
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header}>
        <StatusBar backgroundColor={COLORS.background_dark} />
        <View style={styles.header}>
          <Text style={styles.headerText}>Set up your profile</Text>
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

      <TouchableWithoutFeedback onPress={finishPressed}>
        <Text style={isDone ? styles.Button2 : styles.Button1}>Finish</Text>
      </TouchableWithoutFeedback>
      <TouchableOpacity onPress={skipPressed}>
        <Text style={styles.text}>Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default EditProfileScreen;
