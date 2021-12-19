import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  View,
  StatusBar,
  Modal,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { COLORS } from "../../../Constants/COLORS";
import styles from "./style";
import { useNavigation } from "@react-navigation/core";
import OrderList from "../../../components/OrderList";
import Basket from "../../../components/Basket";
import database from "../../../Database/database";
import { setBasket, setTotal } from "../../../Redux/OrderFood/actions";
import * as Location from "expo-location";

const ConfirmOrderScreen = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [modal, setModal] = useState(false);
  const total = useSelector((state) => state.orderFood.total);
  const basket = useSelector((state) => state.orderFood.basket);
  const { cafe } = route.params;
  const [loading, setLoading] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState("getting your location");
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  const confirmOrder =  async () => {
    if (basket.length >= 1) {
      if (location) {
        setLoading(true);
        await  database.placeFoodOrder(basket, total, cafe.cafeID, location, cafe.cafeName);
        setLoadingStatus("getting your location");
        setLoading(false);
        dispatch(setTotal(0));
        dispatch(setBasket([]));
        navigation.navigate("OrderPlaced");
      } else {
        alert("Please add your location");
      }
    } else {
      alert("Select some food to order");
    }
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
            marginRight: 8
          }}
        >
          <TouchableOpacity onPress={basketPress}>
            <Text style={styles.Button2}> Basket </Text>
          </TouchableOpacity>
          <Text style={styles.count}> {basket.length} </Text>
        </View>

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
        {loading ? (
          <View style={{ alignSelf: "center" }}>
            <Text style={styles.loadingText}> {loadingStatus} </Text>
            <ActivityIndicator
              style={styles.activityIndicator}
              color={COLORS.font}
              size={"large"}
              animating={loading}
            />
          </View>
        ) : (
          <View style={{ alignSelf: "center" }}>
            <Text style={styles.text}>Your Order</Text>
            <TouchableOpacity onPress={confirmOrder}>
              <Text style={styles.Button3}>Confirm</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ConfirmOrderScreen;
