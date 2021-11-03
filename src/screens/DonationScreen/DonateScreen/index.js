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

const DonateScreen = () => {
  const [isValid, setIsValid] = useState(false);
  const [cardDetails, setCardDetails] = useState();
  const [amount, setAmount] = useState(0);
  const {confirmPayment, loading} = useConfirmPayment();

const fetchPaymentIntentClientSecret = async()=>{
  
}

  const onPress = async () => {
    if ( !cardDetails?.complete || amount===0) {
      alert("Please enter complete Card Details and Amount");
      return
    }else{
      const billingDetails={
        amount: amount
      }
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
          setCardDetails(cardDetails);
        }}
      />
      <TextInput
        placeholder="Amount"
        keyboardType={"number-pad"}
        placeholderTextColor={COLORS.font_secondary}
        selectionColor={COLORS.primary}
        style={styles.textInput}
        onChangeText={(value) => setAmount(value.trim())}
      ></TextInput>
      <TouchableOpacity onPress={onPress}>
        {!isValid ? (
          <View style={styles.buttonView}>
            <Text style={styles.button2}>Donate</Text>
          </View>
        ) : (
          <View style={styles.buttonView}>
            <Text style={styles.button1}>Donate</Text>
          </View>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default DonateScreen;
