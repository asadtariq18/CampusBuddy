import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ProfilePicture from "../../ProfilePicture";
import styles from "./style";
import Icon from "react-native-vector-icons/Entypo";
import database from "../../../Database/database";
import { useNavigation } from "@react-navigation/native";

const Header = ({ avatar, name, userID, caption }) => {
  const navigation = useNavigation()
  let user = database.getUser(userID)
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("UserProfile", { user: user })}
        >
          <View style={styles.left}>
            <ProfilePicture uri={avatar} size={45} border={false} />
            <View style={{ marginTop: 10 }}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.userID}>@{userID}</Text>
            </View>
          </View>
        </TouchableOpacity>
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
