import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, View, Image } from "react-native";

import styles from "./style";

const CafeHead = ({ image, name, rating, cafeID }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("CafeMenu", {cafeName: name, rating: rating, image: image, cafeID: cafeID});
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
      <View style={{ backgroundColor: "#3249", justifyContent: "center" }}>
        <Text numberOfLines={1} style={styles.rating}>
          Ratings: {rating}{" "}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CafeHead;
