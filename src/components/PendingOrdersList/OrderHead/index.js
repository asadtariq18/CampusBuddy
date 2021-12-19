import moment from "moment";
import React from "react";
import {
  Text,
  View,
} from "react-native";
import { COLORS } from "../../../Constants/COLORS";
import styles from "./style";

const OrderHead = ({ orderID, status, timestamp, cafeName }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        flexDirection: "row",
        paddingVertical: 5,
      }}
    >
      <View style={styles.container}>
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
          <Text numberOfLines={1} style={{ color: COLORS.font, marginTop: 5 }}>
            {moment(timestamp, "YYYYMMDDhhmmss").fromNow()}{" "}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderHead;
