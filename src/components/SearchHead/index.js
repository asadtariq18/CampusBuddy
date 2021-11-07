import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, View } from "react-native";
import ProfilePicture from "../ProfilePicture";

import styles from "./style";

const SearchHead = ({ result }) => {
  const navigation = useNavigation();
  const onPress = () => {
      alert(`${result.name} profile`)
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.left}>
        <ProfilePicture uri={result.avatar} border={false} />
        <Text style={styles.name}>{result.name} </Text>
        <Text style={styles.notificationText}>{result.userID}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchHead;
