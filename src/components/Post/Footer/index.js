import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
  TextInput,
  ToastAndroid,
} from "react-native";
import { COLORS } from "../../../Constants/COLORS";
import CommentList from "../../CommentList/index";
import styles from "./style";
import database from "../../../Database/database";

const Footer = ({ post }) => {

  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes_count);
  const [modalVisible, setModalVisible] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [comment, setComment] = useState("");
  const [refreshing, setRefreshing] = React.useState(false);

  const onLikePressed = () => {
    const amount = isLiked ? -1 : 1;
    setLikesCount(likesCount + amount);
    if(amount===1){
    database.likeAction(likesCount+1, post.postID)
    }else{
      database.likeAction(likesCount - 1, post.postID);
    }
    setIsLiked(!isLiked);
  };

  const onCommentPressed = () => {
    setModalVisible(true);
  };

  const onPostCommentPress = () => {
    if (comment !== "") {
      alert(comment);
    } else {
    }
  };

  const onChangeCommentInput = (value) => {
    if (value !== "") {
      setIsEmpty(false);
      setComment(value);
    } else {
      setIsEmpty(true);
      setComment(value);
    }
  };

  const onClose = () => {
    setModalVisible(!modalVisible);
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    if (true) {
      try {
        setRefreshing(false);
        ToastAndroid.show("Updated", ToastAndroid.SHORT);
      } catch (error) {
        console.error(error);
      }
    } else {
      ToastAndroid.show("No more new comments", ToastAndroid.SHORT);
      setRefreshing(false);
    }
  }, [refreshing]);
  return (
    <View keyboardShouldPersistTaps="always" style={styles.container}>
      <View keyboardShouldPersistTaps="handled">
        <View style={styles.left}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            {isLiked ? (
              <View style={styles.buttonView}>
                <Text style={styles.footer_button_pressed}>Like</Text>
              </View>
            ) : (
              <View style={styles.buttonView}>
                <Text style={styles.footer_button}>Like</Text>
              </View>
            )}
          </TouchableWithoutFeedback>
          <TouchableOpacity onPress={onCommentPressed}>
            <View style={styles.buttonView}>
              <Text style={styles.footer_button}>Comment</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.buttonView}>
              <Text style={styles.footer_button}>Share</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.left}>
        <Text style={styles.likes}>{likesCount} Likes</Text>
      </View>

      <View style={styles.left}>
        <Text style={styles.timestamp}>{post.timestamp.split(" ")[1]}</Text>
      </View>
      <Modal
        keyboardShouldPersistTaps={"handled"}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
          setComment("");
          setIsEmpty(true);
        }}
      >
        <View style={styles.centeredView}>
          <TouchableOpacity
            onPressIn={onClose}
            style={styles.modalClose}
          ></TouchableOpacity>
          <View style={styles.modalView}>
            <View style={{ alignSelf: "center", marginBottom: 10 }}>
              <Text style={styles.modalText}>Comments</Text>
            </View>

            <CommentList />

            <View
              keyboardShouldPersistTaps="always"
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextInput
                keyboardShouldPersistTaps={"always"}
                placeholder="Comment"
                multiline
                placeholderTextColor={COLORS.font_secondary}
                selectionColor={COLORS.primary}
                style={styles.textInput}
                onChangeText={(value) => onChangeCommentInput(value)}
              ></TextInput>
              <TouchableOpacity onPress={onPostCommentPress}>
                {isEmpty ? (
                  <Text style={styles.footer_button}>Post</Text>
                ) : (
                  <Text style={styles.footer_button_pressed}>Post</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default Footer;
