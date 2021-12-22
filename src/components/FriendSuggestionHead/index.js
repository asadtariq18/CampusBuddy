import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, View } from "react-native";
import ProfilePicture from "../ProfilePicture";
import { LinearProgress } from "react-native-elements";
import styles from "./style";
import database from "../../Database/database";
import { COLORS } from "../../Constants/COLORS";

const FriendSuggestionHead = ({ userID}) => {
  const navigation = useNavigation();
  const [user, setUser] = useState({});
  const onPress = () => {
    navigation.navigate("UserProfile", { user: user });
  };
  useEffect(() => {
    setUser(database.getUser(userID));
  }, [userID]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.left}>
        <ProfilePicture uri={user.avatar} size={45} border={false} />
        {/* <LinearProgress
            value={1}
            style={{}}
            color={COLORS.primary}
            trackColor={COLORS.secondary2}
          /> */}

        <View style={{ marginTop: 10 }}>
          <Text style={styles.name}>{user.name} </Text>
          <Text style={styles.text2}>@{user.userID}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FriendSuggestionHead;
