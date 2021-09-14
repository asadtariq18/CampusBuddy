import { Row } from "native-base";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
  GestureRecognizer,
} from "react-native";
import { COLORS } from "../../../Constants/COLORS";
import CommentList from "../../CommentList/index";
import styles from "./style";

const Footer = ({ likesCount: likesCountProp, postedAt }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [comment, setComment] = useState("");

  const onLikePressed = () => {
    const amount = isLiked ? -1 : 1;
    setLikesCount(likesCount + amount);
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

  useEffect(() => {
    setLikesCount(likesCountProp);
  }, []);
  return (
    <View keyboardShouldPersistTaps="always" style={styles.container}>
      <View style={styles.iconContainer}>
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
        <Text style={styles.postedAt}>{postedAt}</Text>
      </View>
      <Modal
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
          <View style={styles.modalView}>
            <View style={{ alignSelf: "center", marginBottom: 10 }}>
              <Text style={styles.modalText}>Comments</Text>
            </View>
            <ScrollView
              keyboardShouldPersistTaps={"handled"}
              contentContainerStyle={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CommentList />
            </ScrollView>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextInput
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
