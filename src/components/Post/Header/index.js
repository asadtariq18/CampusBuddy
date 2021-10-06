import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ProfilePicture from "../../ProfilePicture";
import styles from "./style";
import Icon from "react-native-vector-icons/Entypo";

const Header = ({ profile_picture, name, caption }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.left}>
          <ProfilePicture uri={profile_picture} size={40} border={false} />
          <Text style={styles.name}>{name}</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.right}>
            <Icon name="dots-three-vertical" size={20} color="#eee" />
          </View>
        </TouchableOpacity>
      </View>
      {caption === "" ? null : (
        <View style={styles.bottom}>
          <Text style={styles.caption}>{caption}</Text>
        </View>
      )}
    </View>
  );
};
export default Header;
