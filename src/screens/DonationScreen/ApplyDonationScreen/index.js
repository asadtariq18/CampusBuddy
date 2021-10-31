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

const RequestScreen = () => {
  const [isValid, setIsValid] = useState(false);
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [reason, setReason] = useState("");

  const onPress = () => {
    if (name === "" || regNo === "" || reason === "") {
      alert("Fill the required fields");
    } else {
      alert(
        "You application has been sent to the accounts management. You will get the confirmation email from university."
      );
      setName('')
      setRegNo('')
      setReason('')
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
        onChangeText={(value) => setName(value.trim())}
      ></TextInput>
      <TextInput
        placeholder="Registration Number"
        placeholderTextColor={COLORS.font_secondary}
        selectionColor={COLORS.primary}
        style={styles.textInput}
        onChangeText={(value) => setRegNo(value.trim())}
      ></TextInput>
      <TextInput
        placeholder="Reason"
        placeholderTextColor={COLORS.font_secondary}
        selectionColor={COLORS.primary}
        multiline
        style={styles.textInput2}
        onChangeText={(value) => setReason(value.trim())}
      ></TextInput>
      <TouchableOpacity onPress={onPress}>
        {!isValid ? (
          <View style={styles.buttonView}>
            <Text style={styles.button2}>Apply</Text>
          </View>
        ) : (
          <View style={styles.buttonView}>
            <Text style={styles.button1}>Apply</Text>
          </View>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default RequestScreen;
