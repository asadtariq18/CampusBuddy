import React from "react";
import {
  FlatList,
  RefreshControl,
  ScrollView,
  View,
  ToastAndroid,
} from "react-native";
import { COLORS } from "../../Constants/COLORS";
import CafeHead from "../CafeHead";
import FoodItem from "../FoodItem";

const MenuList = () => {
  const MenuList = [
    {
      price: "100",
      name: "Fries",
      image:
        "https://image.freepik.com/free-photo/side-view-french-fries-with-seasoning_141793-4899.jpg",
    },
    {
      price: "160",
      name: "Burger",
      image:
        "https://image.freepik.com/free-photo/front-view-meat-burger-with-salad-cheese-tomatoes-dark-background_140725-89540.jpg",
    },
    {
      price: "120",
      name: "Sandwich",
      image:
        "https://image.freepik.com/free-photo/club-sandwich-panini-with-ham-cheese-tomato-herbs_2829-19928.jpg",
    },
    {
      price: "150",
      name: "Roll Paratha",
      image:
        "https://image.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg",
    },
    {
      price: "150",
      name: "Biryani",
      image:
        "https://image.freepik.com/free-photo/pakistani-style-spicy-chicken-biryani-with-raita_162831-18.jpg",
    },
    {
      price: "100",
      name: "Fries",
      image:
        "https://image.freepik.com/free-photo/side-view-french-fries-with-seasoning_141793-4899.jpg",
    },
    {
      price: "160",
      name: "Burger",
      image:
        "https://image.freepik.com/free-photo/front-view-meat-burger-with-salad-cheese-tomatoes-dark-background_140725-89540.jpg",
    },
    {
      price: "120",
      name: "Sandwich",
      image:
        "https://image.freepik.com/free-photo/club-sandwich-panini-with-ham-cheese-tomato-herbs_2829-19928.jpg",
    },
    {
      price: "150",
      name: "Roll Paratha",
      image:
        "https://image.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg",
    },
    {
      price: "150",
      name: "Biryani",
      image:
        "https://image.freepik.com/free-photo/pakistani-style-spicy-chicken-biryani-with-raita_162831-18.jpg",
    },
    {
      price: "100",
      name: "Fries",
      image:
        "https://image.freepik.com/free-photo/side-view-french-fries-with-seasoning_141793-4899.jpg",
    },
    {
      price: "160",
      name: "Burger",
      image:
        "https://image.freepik.com/free-photo/front-view-meat-burger-with-salad-cheese-tomatoes-dark-background_140725-89540.jpg",
    },
    {
      price: "120",
      name: "Sandwich",
      image:
        "https://image.freepik.com/free-photo/club-sandwich-panini-with-ham-cheese-tomato-herbs_2829-19928.jpg",
    },
    {
      price: "150",
      name: "Roll Paratha",
      image:
        "https://image.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg",
    },
    {
      price: "150",
      name: "Biryani",
      image:
        "https://image.freepik.com/free-photo/pakistani-style-spicy-chicken-biryani-with-raita_162831-18.jpg",
    },
  ];

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
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        paddingVertical: 5,
      }}
      showsVerticalScrollIndicator={false}
      data={MenuList}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <FoodItem image={item.image} name={item.name} price={item.price} />
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
export default MenuList;
