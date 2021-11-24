import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, View, Image } from "react-native";

import styles from "./style";

const CafeHead = ({ image, name }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={{justifyContent: 'flex-start'}}>
      <View style={styles.left}>
        <Image
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 70,
            height: 70,
            marginBottom: 5,
            borderRadius: 40,
          }}
          source={{ uri: image }}
        />
        <Text style={styles.name}>{name} </Text>
      </View>
      </View>
    </TouchableOpacity>
  );
};

export default CafeHead;
