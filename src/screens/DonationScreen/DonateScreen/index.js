import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";
import {
  CardField,
  useConfirmPayment,
  useStripe,
} from "@stripe/stripe-react-native";
import styles from "./style";
import { COLORS } from "../../../Constants/COLORS";
import database from "../../../Database/database";
import { useDispatch, useSelector } from "react-redux";
import { setCardDetails, setAmount } from "../../../Redux/Donate/actions";
import axios from "axios";

const DonateScreen = () => {
  const dispatch = useDispatch();
  const cardDetails = useSelector((state) => state.donate.cardDetails);
  const [amount, setAmount] = useState(0);
  const [key, setKey] = useState("");

  const [loading, setLoading] = useState(false);
  const { confirmPayment } = useStripe();
  useEffect(() => {
    getSecretKey();
  }, []);
  useEffect(() => {
    console.log(amount);
  }, [amount]);

  const getSecretKey = () => {
    axios
      .post("http://192.168.1.100:3030/create-payment-intent", {
        amount,
      })
      .then((response) => {
        console.log(response.data.clientSecret);
        setKey(response.data.clientSecret);
      })
      .catch((err) => console.log("Errr", err));
  };

  // const { confirmPayment, loading } = useConfirmPayment();
  const handlePayment = async () => {
    
    getSecretKey();
    setLoading(true);
    const { error } = await confirmPayment(key, {
      type: "Card",
      billingDetails: {
        email: database.getCurrentUser().mail,
      },
    });
    setLoading(false);
    if (error) {
      console.log(error, error.message);
    } else {
      alert("Payment Successful!");
    }
  };

  // const onPress = async () => {
  //   if (!cardDetails?.complete || amount === 0) {
  //     ToastAndroid.show("Fill the required card fields", ToastAndroid.SHORT);
  //     return;
  //   } else {
  //     const billingDetails = {
  //       amount: amount,
  //     };
  //     database.uploadDonationHistory(cardDetails, amount);
  //     ToastAndroid.show("Payment Successful", ToastAndroid.LONG);
  //   }
  // };

  const changeAmount = (value) => {
    setAmount(value);
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
        onChangeText={(value) => {
          changeAmount(value.trim());
        }}
      ></TextInput>
      <TouchableOpacity onPress={handlePayment}>
        <View style={styles.buttonView}>
          {loading ? (
            <ActivityIndicator size={30} color={COLORS.font} />
          ) : (
            <Text style={styles.button2}>Donate</Text>
          )}
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default DonateScreen;
