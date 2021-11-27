import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  View,
  StatusBar,
  Modal,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { COLORS } from "../../../Constants/COLORS";
import styles from "./style";
import { useNavigation } from "@react-navigation/core";
import OrderList from "../../../components/OrderList";
import Basket from '../../../components/Basket'

const ConfirmOrderScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [modal, setModal] = useState(false)
  const total = useSelector((state) => state.orderFood.total);
  const basket = useSelector((state) => state.orderFood.basket);

  const confirmOrder = () => {
    alert("Order Placed");
    // navigation.navigate("ConfirmOrder");
  };
    const basketPress = () => {
      setModal(!modal);
    };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar showHideTransition backgroundColor={COLORS.primary} />
      <View
        style={{
          flexDirection: "row",
          alignSelf: "flex-start",
        }}
      >
        <Text numberOfLines={1} style={styles.cafeName}>
          Confirm Order
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "flex-end",
          paddingVertical: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignSelf: "flex-start",
          }}
        >
          <TouchableOpacity onPress={basketPress}>
            <Text style={styles.Button2}> Basket </Text>
          </TouchableOpacity>
          <Text style={styles.count}> {basket.length} </Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.Button2}> View Order </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button2}> History </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          backgroundColor: COLORS.tertiary,
          borderTopEndRadius: 60,
          borderTopStartRadius: 60,
        }}
      >
        <Text style={styles.headerText}> Order Details </Text>

        <OrderList basket={basket} />
      </View>
      <Modal
        keyboardShouldPersistTaps={"always"}
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setModal(!modal);
        }}
      >
        <View style={styles.centeredView}>
          <TouchableOpacity
            onPressIn={() => {
              setModal(false);
            }}
            style={styles.modalClose}
          ></TouchableOpacity>
          <View style={styles.modalView}>
            <Text style={styles.headerText}> Basket </Text>
            {basket.length === 0 ? (
              <View
                style={{
                  alignSelf: "center",
                  marginTop: 100,
                }}
              >
                <Image
                  style={styles.image}
                  source={require("../../../Constants/emptyCart.png")}
                />
                <Text style={styles.headerText2}> Empty Basket</Text>
              </View>
            ) : (
              <Basket basket={basket} />
            )}
          </View>
        </View>
      </Modal>
      <View
        style={{
          alignSelf: "center",
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          height: "12%",
          flexDirection: "row",
          backgroundColor: COLORS.primary,
        }}
      >
        <View style={{ alignSelf: "center", marginEnd: 110 }}>
          <Text style={styles.headerText}>Total: {total}</Text>
          <Text style={styles.text}>Rs. 10 delivery charges</Text>
        </View>
        <View style={{ alignSelf: "center" }}>
          <Text style={styles.text}>Your Order</Text>
          <TouchableOpacity onPress={confirmOrder}>
            <Text style={styles.Button3}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmOrderScreen;
