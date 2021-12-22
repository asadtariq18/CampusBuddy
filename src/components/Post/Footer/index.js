import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
  TextInput,
  ToastAndroid,
  Share
} from "react-native";
import moment from "moment";
import { COLORS } from "../../../Constants/COLORS";
import CommentList from "../../CommentList/index";
import styles from "./style";
import database from "../../../Database/database";
import { setCommentsArray } from "../../../Redux/Post/actions";
import { useDispatch, useSelector } from "react-redux";
// import Share from "react-native-share";

const Footer = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes_count);
  const [modalVisible, setModalVisible] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [comment, setComment] = useState("");
  const commentsArray = useSelector((state) => state.post.commentsArray);
  const [refreshing, setRefreshing] = React.useState(false);
  const options = {
    title: post.caption,
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCommentsArray(database.getComments(post.postID)));
  }, [post]);
  const onLikePressed = () => {
    const amount = isLiked ? -1 : 1;
    setLikesCount(likesCount + amount);
    if (amount === 1) {
      database.likeAction(likesCount + 1, post.postID);
    } else {
      database.likeAction(likesCount - 1, post.postID);
    }
    setIsLiked(!isLiked);
  };

  const onCommentPressed = () => {
    if (database.getComments(post.postID)) {
      dispatch(setCommentsArray(database.getComments(post.postID)));
    }
    setModalVisible(true);
  };

  const onPostCommentPress = () => {
    if (comment) {
      database.uploadComment(post.postID, comment);
      dispatch(setCommentsArray(database.getComments(post.postID)));
      setComment("");
      onRefresh();
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

const onShare = async () => {
  try {
    const result = await Share.share(
      {
        message: `Please check this post from Campus Buddy\n${post.image}`,
      },
      {
        title: "Please check this post from Campus Buddy",
      }
    );
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        ToastAndroid.show("Post Shared", ToastAndroid.LONG)
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    if (true) {
      try {
        dispatch(setCommentsArray(database.getComments(post.postID)));
        setRefreshing(false);
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
              {post.type === "ask" ? (
                <Text style={styles.footer_button}>Answer</Text>
              ) : (
                <Text style={styles.footer_button}>Comment</Text>
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onShare}>
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
        <Text style={styles.timestamp}>
          {moment(post.timestamp, "YYYYMMDDHHmmss").fromNow()}
        </Text>
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
              {post.type === "ask" ? (
                <Text style={styles.modalText}>Answers</Text>
              ) : (
                <Text style={styles.modalText}>Comments</Text>
              )}
            </View>
            {commentsArray ? (
              <CommentList post={post} />
            ) : (
              <View
                style={
                  (styles.centeredView,
                  [{ flex: 1, justifyContent: "center", alignItems: "center" }])
                }
              >
                <Text style={{ fontSize: 18, color: COLORS.font }}>
                  Be the first to comment
                </Text>
              </View>
            )}

            <View
              keyboardShouldPersistTaps="always"
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextInput
                placeholder="Comment"
                value={comment}
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
