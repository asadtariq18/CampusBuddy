import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import styles from "./style";

const Footer = ({ likesCount: likesCountProp, postedAt }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const onLikePressed = () => {
    const amount = isLiked ? -1 : 1;
    setLikesCount(likesCount + amount);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    setLikesCount(likesCountProp);
  }, []);
  return (
    <View style={styles.container}>
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
          <TouchableOpacity>
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
    </View>
  );
};
export default Footer;
