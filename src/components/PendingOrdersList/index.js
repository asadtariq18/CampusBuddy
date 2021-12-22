import React from "react";
import { FlatList } from "react-native";
import OrderHead from "./OrderHead";

const PendingOrdersList = ({ pendingOrders }) => {
  let sortedList = pendingOrders.sort(function (a, b) {
    return a.timestamp < b.timestamp;
  });

  return (
    <FlatList
      contentContainerStyle={{
        justifyContent: "center",
        paddingBottom: 20,
      }}
      showsVerticalScrollIndicator={false}
      data={sortedList}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <OrderHead
          orderID={item.orderID}
          status={item.status}
          timestamp={item.timestamp}
          cafeName={item.cafeName}
          cafeID={item.cafeID}
        />
      )}
    />
  );
};
export default PendingOrdersList;
