import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, View } from "react-native";
import ProfilePicture from "../ProfilePicture";

import styles from "./style";

const Story = (props) => {
  const {
    story: {
      user: { imageUri, name },
    },
  } = props;
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("StoryScreen", { username: name });
  };
  return (
      <TouchableOpacity onPress={onPress}>
          <View style={styles.container}>
        <ProfilePicture uri={imageUri} />
        <Text style={styles.name}>{name}</Text>
    </View>
      </TouchableOpacity>
  );
};

export default Story;
