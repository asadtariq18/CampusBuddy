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
import ContextMenu from "react-native-context-menu-view";
import { setPosts} from "../../../Redux/Home/actions";
import { useDispatch } from "react-redux";
const Header = ({ avatar, name, userID, caption, privacy, type, postID }) => {
  const dispatch = useDispatch()
  const navigation = useNavigation();
  let user = database.getUser(userID);
  let self = database.getCurrentUser();
  const [showMenu, setShowMenu] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const onClose = () => {
    setModalVisible(!modalVisible);
  };
  const handleDelete = () => {
    database.deletePost(postID);
    dispatch(setPosts(database.getPosts()))
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
            <ProfilePicture uri={avatar} size={45} border={false} />
            <View style={{ marginTop: 10 }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.name}>{name}</Text>
                {type === "status" ? (
                  <Text style={styles.type}> posted a photo.</Text>
                ) : null}
                {type === "found" ? (
                  <Text style={styles.type}> found something.</Text>
                ) : null}
                {type === "lost" ? (
                  <Text style={styles.type}> lost something.</Text>
                ) : null}
                {type === "ask" ? (
                  <Text style={styles.type}> asked a question.</Text>
                ) : null}
              </View>
              <View style={{ flexDirection: "row", marginTop: 2 }}>
                <Text style={styles.userID}>@{userID} - </Text>
                {privacy == "public" ? (
                  <Image
                    source={require("../../../assets/images/public.png")}
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: 10,
                      marginStart: 5,
                      marginTop: 2,
                    }}
                  />
                ) : (
                  <Image
                    source={require("../../../assets/images/private.png")}
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: 10,
                      marginStart: 5,
                      marginTop: 2,
                    }}
                  />
                )}
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.right}>
          {userID === database.getCurrentUser().userID ? (
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
      {caption === "" ? null : (
        <View style={styles.bottom}>
          <Text style={styles.caption}>{caption}</Text>
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
