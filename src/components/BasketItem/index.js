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
import { setBasket, setTotal } from "../../Redux/OrderFood/actions";
import styles from "./style";
import { Icon } from "native-base";
import { COLORS } from "../../Constants/COLORS";

const BasketItem = ({ image, name, price }) => {
  const item = {
    price: price,
    name: name,
    image: image,
  };
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const total = useSelector((state) => state.orderFood.total);
  const basket = useSelector((state) => state.orderFood.basket);
  const navigation = useNavigation();
  const removePress = () => {
    basket.splice(
      basket.findIndex((v) => v.name === name),
      1
    );
    dispatch(setBasket(basket));
    dispatch(setTotal(total - price))
    ToastAndroid.show("Removed", ToastAndroid.SHORT);
  };

  return (
    <View style={{ justifyContent: "center", flexDirection: "row" }}>
      <View style={styles.container}>
        <View style={{ alignSelf: "center", flexDirection: "row" }}>
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 10,
            }}
            source={{ uri: image }}
          />
          <View style={{ alignSelf: "center" }}>
            <Text numberOfLines={1} style={styles.name}>
              {name}{" "}
            </Text>
            <Text numberOfLines={1} style={styles.rating}>
              Price: {price}{" "}
            </Text>
          </View>
        </View>
        <View
          style={{ flexDirection: "row", alignSelf: "center", marginEnd: 10 }}
        >
          <Icon
            type="FontAwesome"
            style={{
              alignSelf: "center",
              padding: 5,
              fontSize: 25,
              color: COLORS.font,
            }}
            name="minus"
            onPress={() => {
              if (quantity > 1) {{
                setQuantity(quantity - 1);
            dispatch(setTotal(total - item.price));  
            }
              }
            }}
          />
          <Text
            numberOfLines={1}
            style={{
              padding: 5,
              color: COLORS.font,
              alignSelf: "center",
              fontSize: 20,
            }}
          >
            {quantity}{" "}
          </Text>
          <Icon
            type="FontAwesome"
            style={{
              alignSelf: "center",
              padding: 5,
              fontSize: 25,
              color: COLORS.font,
            }}
            name="plus"
            onPress={() => {setQuantity(quantity + 1)
            dispatch(setTotal(total + item.price))
            }}
          />
          <Icon
            type="FontAwesome"
            style={{
              marginStart: 20,
              fontSize: 35,
              color: COLORS.background_dark,
            }}
            name="minus-circle"
            onPress={removePress}
          />
        </View>
      </View>
    </View>
  );
};

export default BasketItem;
