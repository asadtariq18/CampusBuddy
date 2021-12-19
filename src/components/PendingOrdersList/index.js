import React from "react";
import {
  FlatList,
} from "react-native";
import OrderHead from "./OrderHead";

const PendingOrdersList = ({pendingOrders}) => {
    console.log(pendingOrders)
  return (
    <FlatList
      contentContainerStyle={{
        justifyContent: "center",
        paddingBottom: 20,
      }}
      showsVerticalScrollIndicator={false}
      data={pendingOrders}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <OrderHead
          orderID={item.orderID}
          status={item.status}
          timestamp={item.timestamp}
          cafeName={item.cafeName}
        />
      )}
    />
  );
};
export default PendingOrdersList;
