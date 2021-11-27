import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  View,
  ScrollView,
  StatusBar,
  Modal,
} from "react-native";
import Basket from "../../../components/Basket";
import MenuList from "../../../components/MenuList";
import { useDispatch, useSelector } from "react-redux";
import { setTotal } from "../../../Redux/OrderFood/actions";
import { COLORS } from "../../../Constants/COLORS";
import styles from "./style";

const MenuScreen = ({ route }) => {
  const dispatch = useDispatch();
  const total = useSelector((state)=> state.orderFood.total);
  const [modal, setModal] = useState(false);
  const basket = useSelector((state) => state.orderFood.basket);
  const cafe = {
    name: route.params.name,
    image: route.params.image,
    rating: route.params.rating,
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
        <Text style={styles.cafeName}> {cafe.name}</Text>
        <Text style={styles.rating}> {cafe.rating} </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "flex-end",
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity onPress={basketPress}>
          <Text style={styles.Button2}> Basket </Text>
        </TouchableOpacity>

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
        <Text style={styles.headerText}> Menu </Text>
        <Text style={styles.text}> Tap item to add to basket </Text>
        <MenuList basket={basket} />
      </View>
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
          <Text style={styles.Button3}>Place</Text>
        </View>
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
    </SafeAreaView>
  );
};

export default MenuScreen;
