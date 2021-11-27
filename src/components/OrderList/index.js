import React from "react";
import {
  FlatList,
  RefreshControl,
  ToastAndroid,
  View,
  Text
} from "react-native";
import { COLORS } from "../../Constants/COLORS";
import Item from './Item'
import { useDispatch, useSelector } from "react-redux";
import styles from "./Item/style";

const OrderList = () => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.orderFood.basket);

  return (
    <View style={{}}>
      <View style={{flexDirection: "row", alignSelf: "flex-end"}}>
        <Text style={styles.label}> Quantity </Text>
        <Text style={styles.label}> Price </Text>
      </View>
      <FlatList
        contentContainerStyle={{
          justifyContent: "center",
          paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
        data={basket}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <Item image={item.image} name={item.name} price={item.price} quantity={item.quantity} />
        )}
      />
    </View>
  );
};
export default OrderList;
