import React, { useState, useEffect } from "react";
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
  ActivityIndicator,
  Keyboard,
} from "react-native";
import { Header } from "native-base";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import { COLORS } from "../../Constants/COLORS";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Database from "../../Database/database";
import { useDispatch, useSelector } from "react-redux";
import { setIsDone, setImage, setInfo } from "../../Redux/EditProfile/actions";
import { setUser } from "../../Redux/Profile/actions";

const EditProfileScreen = () => {
  const dispatch = useDispatch();
  const isDone = useSelector((state) => state.editProfile.isDone);
  const image = useSelector((state) => state.editProfile.image);
  const info = useSelector((state) => state.editProfile.info);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    dispatch(setImage(Database.getCurrentUser().avatar));
  }, []);

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
        dispatch(setImage(data.uri));
        dispatch(setIsDone(true));
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
        dispatch(setImage(data.uri));
        dispatch(setIsDone(true));
      }
    } else {
      Alert.alert("Campus Buddy wants permission to access camera");
    }
  };
  const onChangeText = (value) => {
    dispatch(setInfo(value));
    if (value !== "") {
      dispatch(setIsDone(true));
    } else {
      dispatch(setIsDone(false));
    }
  };
  const savePressed = async () => {
    let newData = new Object();
    newData = {
      image: image,
      bio: info,
    };
    if (isDone) {
      setLoading(true);
      Keyboard.dismiss();
      await Database.updateProfile(newData).then(() => {
        setLoading(false);
        dispatch(setIsDone(false));
      });
      navigation.navigate("Feed");
      dispatch(setUser(Database.getCurrentUser()));
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
      {loading ? (
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.textView}>Uploading...</Text>
          <ActivityIndicator color={COLORS.primary} size={30} />
        </View>
      ) : null}
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
