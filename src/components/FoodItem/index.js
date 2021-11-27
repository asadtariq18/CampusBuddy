import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ToastAndroid,
} from "react-native";

import styles from "./style";
import { COLORS } from "../../Constants/COLORS";
import { useDispatch, useSelector } from "react-redux";
import { setBasket, setTotal } from "../../Redux/OrderFood/actions";

const FoodItem = ({ item }) => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.orderFood.basket);
  const total = useSelector((state) => state.orderFood.total);
  const navigation = useNavigation();
  const onPress = () => {
    if (basket.findIndex((v) => v.name === item.name) !== -1) {
      ToastAndroid.show("Already Added", ToastAndroid.SHORT);
    } else {
      dispatch(setTotal(total+item.price))
      basket.unshift(item);
      dispatch(setBasket(basket));
      ToastAndroid.show("Added to Basket", ToastAndroid.SHORT);
    }
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
        source={{ uri: item.image }}
      />
      <Text numberOfLines={1} style={styles.name}>
        {item.name}{" "}
      </Text>
      <View
        style={{ backgroundColor: COLORS.secondary2, justifyContent: "center" }}
      >
        <Text numberOfLines={1} style={styles.name}>
          RS. {item.price}{" "}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FoodItem;
