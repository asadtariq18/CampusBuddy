import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ToastAndroid,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setBasket, setTotal } from "../../../Redux/OrderFood/actions";
import styles from "./style";
import { Icon } from "native-base";
import { COLORS } from "../../../Constants/COLORS";

const Item = ({ image, name, price, quantity }) => {
  const item = {
    quantity: quantity,
    price: price,
    name: name,
    image: image,
  };
  const dispatch = useDispatch();
  const total = useSelector((state) => state.orderFood.total);
  const basket = useSelector((state) => state.orderFood.basket);

  return (
    <View style={{ justifyContent: "center", flexDirection: "row" }}>
      <View style={styles.container}>
        <View style={{ alignSelf: "center", flexDirection: "row" }}>
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
            }}
            source={{ uri: image }}
          />
          <View style={{ alignSelf: "center" }}>
            <Text numberOfLines={1} style={styles.name}>
              {name}{" "}
            </Text>
          </View>
        </View>
        <View style={{ alignSelf: "center", flexDirection: "row" }}>
          <Text numberOfLines={1} style={styles.text}>
            {quantity}{" "}
          </Text>

          <Text numberOfLines={1} style={styles.text}>
            RS. {price * quantity}{" "}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Item;
