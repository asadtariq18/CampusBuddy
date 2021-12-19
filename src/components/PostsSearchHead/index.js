import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, View, Image } from "react-native";
import ProfilePicture from "../ProfilePicture";

import styles from "./style";

const PostsSearchHead = ({ result }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("ViewPost", { post: result });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={{ margin: 5, marginTop: 5 }}>
          <Text style={styles.name}>{result.owner} </Text>
          <Text style={styles.text2}>{result.caption}</Text>
        <Image style={{height: 123, width: 123, borderRadius: 10, marginTop: 4 }} source={{uri: result.image}}/>
      </View>
    </TouchableOpacity>
  );
};

export default PostsSearchHead;
