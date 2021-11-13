import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from "react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import styles from "./style";
import { COLORS } from "../../../Constants/COLORS";
import database from "../../../Database/database";
import { useDispatch, useSelector } from "react-redux";
import { setCardDetails, setAmount } from "../../../Redux/Donate/actions";

const DonateScreen = () => {
  const dispatch = useDispatch();
  const cardDetails = useSelector((state) => state.donate.cardDetails);
  const amount = useSelector((state) => state.donate.amount);

  const { confirmPayment, loading } = useConfirmPayment();

  const fetchPaymentIntentClientSecret = async () => {};

  const onPress = async () => {
    if (!cardDetails?.complete || amount === 0) {
      ToastAndroid.show("Fill the required card fields", ToastAndroid.SHORT);
      return;
    } else {
      const billingDetails = {
        amount: amount,
      };
      database.uploadDonationHistory(cardDetails, amount);
      ToastAndroid.show("Payment Successful", ToastAndroid.LONG);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://www.shareicon.net/data/128x128/2016/09/07/826989_heart_512x512.png",
        }}
      />
      <Text style={styles.text}>Card Information</Text>
      <CardField
        placeholder={{ number: "4200 4200 4200 4200" }}
        postalCodeEnabled={false}
        cardStyle={styles.card}
        style={styles.cardContainer}
        onCardChange={(cardDetails) => {
          dispatch(setCardDetails(cardDetails));
        }}
      />
      <TextInput
        placeholder="Amount"
        keyboardType={"number-pad"}
        placeholderTextColor={COLORS.font_secondary}
        selectionColor={COLORS.primary}
        style={styles.textInput}
        onChangeText={(value) => dispatch(setAmount(value.trim()))}
      ></TextInput>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonView}>
          <Text style={styles.button2}>Donate</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default DonateScreen;
