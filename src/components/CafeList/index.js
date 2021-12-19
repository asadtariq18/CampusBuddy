import React from "react";
import {
  FlatList,
  RefreshControl,
  ScrollView,
  View,
  ToastAndroid,
} from "react-native";
import cafeList from "../../Data/PostData/posts";
import { COLORS } from "../../Constants/COLORS";
import CafeHead from "../CafeHead";

const CafeList = () => {

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
        <CafeHead image={item.image} name={item.name} rating={item.rating} cafeID={item.cafeID} />
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
