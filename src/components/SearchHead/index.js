import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, View } from "react-native";
import ProfilePicture from "../ProfilePicture";

import styles from "./style";

const SearchHead = ({ result }) => {
  const navigation = useNavigation();
  const onPress = () => {
      navigation.navigate("UserProfile", {user: result})
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.left}>
        <ProfilePicture uri={result.avatar} size={40} border={false} />
        <View style={{ marginTop: 10 }}>
        <Text style={styles.name}>{result.name} </Text>
        <Text style={styles.text2}>@{result.userID}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SearchHead;
