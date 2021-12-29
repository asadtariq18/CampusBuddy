import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ToastAndroid,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard
} from "react-native";
import styles from "./style";
import { COLORS } from "../../../Constants/COLORS";
import database from "../../../Database/database";
import {useNavigation } from "@react-navigation/native";


const CreateDonationPostScreen = () => {
  const navigation = useNavigation()
  const [bankName, setBankName] = useState("");
const [onFocus, setOnFocus] = useState(false)
  const [accountType, setAccountType] = useState("");
  const [accountTitle, setAccountTitle] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [description, setDescription] = useState("");

  const onPress = () => {
    if (accountTitle==="" || accountType === "" || accountNumber === "" || description === "") {
      ToastAndroid.show("Fill the required fields", ToastAndroid.SHORT);
    } else {
      if (accountType === "Bank Account" && bankName === "") {
        ToastAndroid.show("Enter bank name", ToastAndroid.SHORT);
      } else {
        try {
          database.uploadDonationPost(
            bankName.trim(),
            accountTitle.trim(),
            accountNumber,
            description
          );
          ToastAndroid.show("Posted Successfully", ToastAndroid.SHORT);
          setAccountType("");
          setAccountTitle("");
          setBankName("");
          setAccountNumber("");
          setDescription("");
          navigation.navigate("DonationHome")
        } catch (error) {
          ToastAndroid.show("There's an error while posting, ToastAndroid.SHORT", ToastAndroid.SHORT)
        }
      }
    }
  };
  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setOnFocus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setOnFocus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  return (
    <ScrollView
      keyboardDismissMode="true"
      contentContainerStyle={styles.container}
    >
      {onFocus ? null : (
        <Image
          style={styles.image}
          source={{
            uri: "https://thumbs.dreamstime.com/b/charity-donation-concept-donate-money-box-icon-logo-dark-background-white-charity-donation-concept-donate-money-box-132602446.jpg",
          }}
        />
      )}
      <View style={{ flexDirection: "row", marginTop: 8 }}>
        <TouchableWithoutFeedback
          onPress={() => {
            setAccountType("JazzCash");
            setBankName("JazzCash");
          }}
        >
          {accountType === "JazzCash" ? (
            <View style={styles.buttonView}>
              <Text style={styles.button_pressed}>JazzCash</Text>
            </View>
          ) : (
            <View style={styles.buttonView}>
              <Text style={styles.button}>JazzCash</Text>
            </View>
          )}
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            setAccountType("EasyPaisa");
            setBankName("EasyPaisa");
          }}
        >
          {accountType === "EasyPaisa" ? (
            <View style={styles.buttonView}>
              <Text style={styles.button_pressed}>EasyPaisa</Text>
            </View>
          ) : (
            <View style={styles.buttonView}>
              <Text style={styles.button}>EasyPaisa</Text>
            </View>
          )}
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => setAccountType("Bank Account")}
        >
          {accountType === "Bank Account" ? (
            <View style={styles.buttonView}>
              <Text style={styles.button_pressed}>Bank Account</Text>
            </View>
          ) : (
            <View style={styles.buttonView}>
              <Text style={styles.button}>Bank Account</Text>
            </View>
          )}
        </TouchableWithoutFeedback>
      </View>
      {accountType == "Bank Account" ? (
        <TextInput
          placeholder="Bank Name"
          placeholderTextColor={COLORS.font_secondary}
          selectionColor={COLORS.primary}
          value={bankName}
          style={styles.textInput}
          onChangeText={(value) => setBankName(value)}
        ></TextInput>
      ) : null}
      <TextInput
        placeholder="Account title"
        placeholderTextColor={COLORS.font_secondary}
        selectionColor={COLORS.primary}
        value={accountTitle}
        style={styles.textInput}
        onChangeText={(value) => setAccountTitle(value)}
      ></TextInput>
      <TextInput
        placeholder="Account number"
        placeholderTextColor={COLORS.font_secondary}
        selectionColor={COLORS.primary}
        keyboardType="number-pad"
        value={accountNumber}
        style={styles.textInput}
        onChangeText={(value) => setAccountNumber(value.trim())}
      ></TextInput>
      <TextInput
        placeholder="Description"
        placeholderTextColor={COLORS.font_secondary}
        selectionColor={COLORS.primary}
        value={description}
        multiline
        style={styles.textInput2}
        onChangeText={(value) => setDescription(value)}
      ></TextInput>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonView}>
          <Text style={styles.button2}>Post</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default CreateDonationPostScreen;
