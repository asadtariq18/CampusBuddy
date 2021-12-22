import moment from "moment";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../../Constants/COLORS";
import database from "../../../Database/database";
import styles from "./style";

const OrderHead = ({ orderID, status, timestamp, cafeName, cafeID }) => {
  const handleReceived = ()=>{
    database.setOrderStatus(orderID, cafeID)
  }

    const handleDelete = () => {
      alert("delete")
      database.deleteItem(orderID, cafeID);
    };
  if (status === "New") {
    return (
      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
          paddingVertical: 5,
        }}
      >
        <View style={styles.container2}>
          <View style={{ flexDirection: "row", marginLeft: 5 }}>
            <View style={{ alignSelf: "center" }}>
              <Text numberOfLines={1} style={styles.cafeName}>
                {cafeName}{" "}
              </Text>
              <Text numberOfLines={1} style={styles.name}>
                {orderID} -
              </Text>
              <Text numberOfLines={1} style={styles.rating}>
                Status: {status}{" "}
              </Text>
            </View>
            <Text
              numberOfLines={1}
              style={{ color: COLORS.font, marginTop: 5 }}
            >
              {moment(timestamp, "YYYYMMDDhhmmss").fromNow()}{" "}
            </Text>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View
      style={{
        justifyContent: "center",
        flexDirection: "row",
        paddingVertical: 5,
      }}
    >
      {status === "Completed" ? (
        <TouchableOpacity onPress={handleDelete} style={styles.container}>
          <View style={{ flexDirection: "row", marginLeft: 5 }}>
            <View style={{ alignSelf: "center" }}>
              <Text numberOfLines={1} style={styles.cafeName}>
                {cafeName}{" "}
              </Text>
              <Text numberOfLines={1} style={styles.name}>
                {orderID} -
              </Text>
              <Text numberOfLines={1} style={styles.rating}>
                Status: {status}{" "}
              </Text>
            </View>
            <Text
              numberOfLines={1}
              style={{ color: COLORS.font, marginTop: 5 }}
            >
              {moment(timestamp, "YYYYMMDDhhmmss").fromNow()}{" "}
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <View style={styles.container3}>
          <View style={{ flexDirection: "row", marginLeft: 5 }}>
            <View style={{ alignSelf: "center" }}>
              <Text numberOfLines={1} style={styles.cafeName}>
                {cafeName}{" "}
              </Text>
              <Text numberOfLines={1} style={styles.name}>
                {orderID} -
              </Text>
              <Text numberOfLines={1} style={styles.rating}>
                Status: {status}{" "}
              </Text>
            </View>
            <Text
              numberOfLines={1}
              style={{ color: COLORS.font, marginTop: 5 }}
            >
              {moment(timestamp, "YYYYMMDDhhmmss").fromNow()}{" "}
            </Text>
            <TouchableOpacity onPress={handleReceived}>
              <Text style={styles.Button2}>Received</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default OrderHead;
