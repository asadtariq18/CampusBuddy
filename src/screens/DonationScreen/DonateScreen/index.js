import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import styles from "./style";
import { COLORS } from "../../../Constants/COLORS";

const DonateScreen = () => {
  const [isValid, setIsValid] = useState(false);
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [amount, setAmount] = useState(0);

  const onPress = () => {
    if (cardHolder === "" || cardNumber === "" || expiryDate === "" || amount === 0) {
      alert("Fill the required fields");
    } else {
      alert(
        "Donated Successfully"
      );

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
      <TextInput
        placeholder="Card Number"
        placeholderTextColor={COLORS.font_secondary}
        selectionColor={COLORS.primary}
        style={styles.textInput}
        onChangeText={(value) => setCardNumber(value.trim())}
      ></TextInput>
      <TextInput
        placeholder="Card Holder Name"
        placeholderTextColor={COLORS.font_secondary}
        selectionColor={COLORS.primary}
        style={styles.textInput}
        onChangeText={(value) => setCardHolder(value.trim())}
      ></TextInput>
      <TextInput
        placeholder="Expiry Date"
        placeholderTextColor={COLORS.font_secondary}
        selectionColor={COLORS.primary}
        style={styles.textInput}
        onChangeText={(value) => setExpiryDate(value.trim())}
      ></TextInput>
      <TextInput
        placeholder="Amount"
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
