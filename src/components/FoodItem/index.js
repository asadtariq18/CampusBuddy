import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, View, Image } from "react-native";

import styles from "./style";
import { COLORS } from "../../Constants/COLORS";

const FoodItem = ({ image, name, price }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("CafeMenu");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 170,
          height: 170,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
        source={{ uri: image }}
      />
      <Text numberOfLines={1} style={styles.name}>
        {name}{" "}
      </Text>
      <View style={{backgroundColor: COLORS.secondary2, justifyContent: "center"}} >
      <Text numberOfLines={1} style={styles.name}>
        RS. {price}{" "}
      </Text>
      </View>
          
    </TouchableOpacity>
  );
};

export default FoodItem;
