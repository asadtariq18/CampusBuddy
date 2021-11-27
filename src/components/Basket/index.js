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
    const dispatch = useDispatch()
    const basket = useSelector((state) => state.orderFood.basket);
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      setRefreshing(false);
      ToastAndroid.show("Updated", ToastAndroid.SHORT);
    } catch (error) {
      console.error(error);
    }
  }, [refreshing]);
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
        <BasketItem image={item.image} name={item.name} price={item.price} />
      )}
      refreshControl={
        <RefreshControl
          progressBackgroundColor={COLORS.background_dark}
          colors={[COLORS.primary]}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    />
  );
};
export default Basket;
