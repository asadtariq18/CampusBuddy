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
import { useDispatch, useSelector } from "react-redux";
import {
  setName,
  setRegNo,
  setReason,
} from "../../../Redux/ApplyDonation/actions";
import styles from "./style";
import { COLORS } from "../../../Constants/COLORS";

const RequestScreen = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.applyDonation.name);
  const regNo = useSelector((state) => state.applyDonation.regNo);
  const reason = useSelector((state) => state.applyDonation.reason);

  const onPress = () => {
    if (name === "" || regNo === "" || reason === "") {
      ToastAndroid.show("Fill the required fields", ToastAndroid.SHORT);
    } else {
      alert(
        "You application has been sent to the accounts management. You will get the confirmation email from university."
      );
      dispatch(setName(""));
      dispatch(setRegNo(""));
      dispatch(setReason(""));
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://www.kindpng.com/picc/m/182-1822049_donation-png-free-download-international-day-for-charity.png",
        }}
      />
      <TextInput
        placeholder="Name"
        placeholderTextColor={COLORS.font_secondary}
        selectionColor={COLORS.primary}
        style={styles.textInput}
        onChangeText={(value) => dispatch(setName(value.trim()))}
      ></TextInput>
      <TextInput
        placeholder="Registration Number"
        placeholderTextColor={COLORS.font_secondary}
        selectionColor={COLORS.primary}
        style={styles.textInput}
        onChangeText={(value) => dispatch(setRegNo(value.trim()))}
      ></TextInput>
      <TextInput
        placeholder="Reason"
        placeholderTextColor={COLORS.font_secondary}
        selectionColor={COLORS.primary}
        multiline
        style={styles.textInput2}
        onChangeText={(value) => dispatch(setReason(value.trim()))}
      ></TextInput>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonView}>
          <Text style={styles.button2}>Apply</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default RequestScreen;
