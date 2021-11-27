import React from "react";
import {
  FlatList,
  RefreshControl,
  ScrollView,
  View,
  ToastAndroid,
} from "react-native";
import { COLORS } from "../../Constants/COLORS";
import BasketItem from "../BasketItem";
import { useDispatch, useSelector } from "react-redux";
import { setBasket } from "../../Redux/OrderFood/actions";

const Basket = () => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.orderFood.basket);
  return (
    <FlatList
      contentContainerStyle={{
        justifyContent: "center",
        paddingBottom: 20,
      }}
      showsVerticalScrollIndicator={false}
      data={basket}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <BasketItem
          image={item.image}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        />
      )}
    />
  );
};
export default Basket;
