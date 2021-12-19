import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ProfilePicture from "../../ProfilePicture";
import styles from "./style";
import Icon from "react-native-vector-icons/Entypo";
import database from "../../../Database/database";
import { useNavigation } from "@react-navigation/native";
import ContextMenu from "react-native-context-menu-view";

const Header = ({ avatar, name, userID, caption }) => {
  const navigation = useNavigation();
  let user = database.getUser(userID);
  let self = database.getCurrentUser();
  const [showMenu, setShowMenu] = useState(false);
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
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.userID}>@{userID}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setShowMenu(!showMenu);
          }}
        >
          <View style={styles.right}>
            <Icon name="dots-three-vertical" size={20} color="#eee" />
          </View>
        </TouchableOpacity>
        {showMenu ? (
          <ContextMenu
            actions={[{ title: "Delete Post" }, { title: "Edit Post" }]}
            onPress={(e) => {
              console.warn(
                `Pressed ${e.nativeEvent.name} at index ${e.nativeEvent.index}`
              );
            }}
          >
            <View style={styles.yourOwnStyles} />
          </ContextMenu>
        ) : null}
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
