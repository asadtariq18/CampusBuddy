import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Modal,
  ToastAndroid,
} from "react-native";
import ProfilePicture from "../../ProfilePicture";
import styles from "./style";
import Icon from "react-native-vector-icons/Entypo";
import database from "../../../Database/database";
import { useNavigation } from "@react-navigation/native";

const Header = ({ post}) => {
  const navigation = useNavigation();
  let user = database.getUser(post.userID);
  let self = database.getCurrentUser();
  const [modalVisible, setModalVisible] = useState(false);
  const onClose = () => {
    setModalVisible(!modalVisible);
  };
  const handleDelete = () => {
    database.deletePost(post.postID);
    setModalVisible(false);
    navigation.navigate("Feed")
    ToastAndroid.show("Post Deleted", ToastAndroid.LONG);
  };
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            self.userID !== user.userID
              ? navigation.navigate("UserProfile", { user: user })
              : navigation.navigate("Profile");
          }}
        >
          <View style={styles.left}>
            <ProfilePicture uri={user.avatar} size={45} border={false} />
            <View style={{ marginTop: 10 }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.name}>{user.name}</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 2 }}>
                <Text style={styles.userID}>@{user.userID}</Text>
               
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.right}>
          {user.userID === self.userID ? (
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Icon style={{paddingHorizontal: 4, marginEnd: 5}} name="dots-three-vertical" size={20} color="#eee" />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      {post.description === "" ? null : (
        <View style={styles.bottom}>
          <Text style={styles.caption}>{post.description}</Text>
        </View>
      )}
      <Modal
        keyboardShouldPersistTaps={"handled"}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <TouchableOpacity
            onPressIn={onClose}
            style={styles.modalClose}
          ></TouchableOpacity>
          <View style={styles.modalView}>
            <TouchableOpacity onPressIn={handleDelete}>
              <Text style={styles.modalText}>Delete post</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default Header;
