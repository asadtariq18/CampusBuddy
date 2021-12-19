import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  View,
  ScrollView,
  StatusBar,
  Modal
} from "react-native";
import CafeList from "../../../components/CafeList";
import PendingOrdersList from "../../../components/PendingOrdersList";
import { COLORS } from "../../../Constants/COLORS";
import database from "../../../Database/database";
import styles from "./style";

const FoodHomeScreen = () => {
const [pendingOrders, setPendingOrders] = useState([])
  const [modal, setModal] = useState(false);

const handlePendingOrdersPress=()=>{
  let orders = database.getPendingOrders(database.getCurrentUser().userID);
  if(orders){
    setPendingOrders(Object.values(orders));
  }
  console.log(pendingOrders)
  setModal(!modal)
}
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar showHideTransition backgroundColor={COLORS.primary} />
      <View
        style={{
          flexDirection: "row",
          alignSelf: "flex-start",
        }}
      >
        <Text style={styles.Header}> Food Buddy</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignSelf: "flex-end",
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity onPress={handlePendingOrdersPress}>
          <Text style={styles.Button2}> Pending Orders </Text>
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
        <Text style={styles.headerText}> Select Cafe </Text>

        <CafeList />
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
            <Text style={styles.headerText}> Pending Orders </Text>
            {pendingOrders.length === 0 ? (
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
                <Text style={styles.headerText2}> No pending order</Text>
              </View>
            ) : (
              <PendingOrdersList pendingOrders={pendingOrders} />
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default FoodHomeScreen;
