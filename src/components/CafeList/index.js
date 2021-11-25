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

const CafeList = () => {
  const cafeList = [
    {
      rating: 4.5,
      name: "Alaska",
      image:
        "https://img.freepik.com/free-vector/coffee-shop-badge-vintage-style_1176-95.jpg?size=626&ext=jpg",
    },
    {
      rating: 4.3,
      name: "Majeed Cafe",
      image:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/coffee-bar-logo-cafe-logo-restaurant-logo-hot-design-template-329df9b033a19d100f99c3ef110ffc67_screen.jpg?ts=1588031580",
    },
    {
      rating: 3.5,
      name: "Umar Cafe",
      image:
        "https://images-platform.99static.com/QhArmXSM6mtXJJkzfAkZHPu_TDw=/0x0:1652x1652/500x500/top/smart/99designs-contests-attachments/119/119903/attachment_119903893",
    },
    {
      rating: 4.5,
      name: "Umar Cafe",
      image:
        "https://images-platform.99static.com/QhArmXSM6mtXJJkzfAkZHPu_TDw=/0x0:1652x1652/500x500/top/smart/99designs-contests-attachments/119/119903/attachment_119903893",
    },
    {
      rating: 4.9,
      name: "Umar Cafe",
      image:
        "https://images-platform.99static.com/QhArmXSM6mtXJJkzfAkZHPu_TDw=/0x0:1652x1652/500x500/top/smart/99designs-contests-attachments/119/119903/attachment_119903893",
    },
    {
      rating: 4.0,
      name: "Umar Cafe",
      image:
        "https://images-platform.99static.com/QhArmXSM6mtXJJkzfAkZHPu_TDw=/0x0:1652x1652/500x500/top/smart/99designs-contests-attachments/119/119903/attachment_119903893",
    },
    {
      name: "Alaska",
      image:
        "https://img.freepik.com/free-vector/coffee-shop-badge-vintage-style_1176-95.jpg?size=626&ext=jpg",
    },
    {
      name: "Majeed Cafe",
      image:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/coffee-bar-logo-cafe-logo-restaurant-logo-hot-design-template-329df9b033a19d100f99c3ef110ffc67_screen.jpg?ts=1588031580",
    },
    {
      name: "Umar Cafe",
      image:
        "https://images-platform.99static.com/QhArmXSM6mtXJJkzfAkZHPu_TDw=/0x0:1652x1652/500x500/top/smart/99designs-contests-attachments/119/119903/attachment_119903893",
    },
    {
      name: "Umar Cafeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      image:
        "https://images-platform.99static.com/QhArmXSM6mtXJJkzfAkZHPu_TDw=/0x0:1652x1652/500x500/top/smart/99designs-contests-attachments/119/119903/attachment_119903893",
    },
    {
      name: "Umar Cafe",
      image:
        "https://images-platform.99static.com/QhArmXSM6mtXJJkzfAkZHPu_TDw=/0x0:1652x1652/500x500/top/smart/99designs-contests-attachments/119/119903/attachment_119903893",
    },
    {
      name: "Umar Cafe",
      image:
        "https://images-platform.99static.com/QhArmXSM6mtXJJkzfAkZHPu_TDw=/0x0:1652x1652/500x500/top/smart/99designs-contests-attachments/119/119903/attachment_119903893",
    },
    {
      name: "Alaska",
      image:
        "https://img.freepik.com/free-vector/coffee-shop-badge-vintage-style_1176-95.jpg?size=626&ext=jpg",
    },
    {
      name: "Majeed Cafe",
      image:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/coffee-bar-logo-cafe-logo-restaurant-logo-hot-design-template-329df9b033a19d100f99c3ef110ffc67_screen.jpg?ts=1588031580",
    },
    {
      name: "Umar Cafe",
      image:
        "https://images-platform.99static.com/QhArmXSM6mtXJJkzfAkZHPu_TDw=/0x0:1652x1652/500x500/top/smart/99designs-contests-attachments/119/119903/attachment_119903893",
    },
    {
      name: "Umar Cafe",
      image:
        "https://images-platform.99static.com/QhArmXSM6mtXJJkzfAkZHPu_TDw=/0x0:1652x1652/500x500/top/smart/99designs-contests-attachments/119/119903/attachment_119903893",
    },
    {
      name: "Umar Cafe",
      image:
        "https://images-platform.99static.com/QhArmXSM6mtXJJkzfAkZHPu_TDw=/0x0:1652x1652/500x500/top/smart/99designs-contests-attachments/119/119903/attachment_119903893",
    },
    {
      name: "Umar Cafe",
      image:
        "https://images-platform.99static.com/QhArmXSM6mtXJJkzfAkZHPu_TDw=/0x0:1652x1652/500x500/top/smart/99designs-contests-attachments/119/119903/attachment_119903893",
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
        paddingBottom: 20,
      }}
      showsVerticalScrollIndicator={false}
      data={cafeList}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <CafeHead image={item.image} name={item.name} rating={item.rating} />
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
export default CafeList;
