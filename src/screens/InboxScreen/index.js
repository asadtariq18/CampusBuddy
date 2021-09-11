import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  FlatList,
  ScrollView
} from "react-native";
import MessagesList from "../../components/MessagesList/index";
import { COLORS } from "../../Constants/COLORS";
import styles from "./style";

const InboxScreen = () => {
  const route = useRoute();
  const [textInput, setTextInput] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

  const onChange = (message) => {
    setTextInput(message);
    if (message === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };
  const onSendPress = () => {
    if (textInput !== "") {
      alert(textInput);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
          <MessagesList />
      </ScrollView>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          multiline
          placeholder="Type here..."
          placeholderTextColor={COLORS.font_secondary}
          selectionColor={COLORS.primary + "99"}
          style={styles.textInput}
          onChangeText={(value) => onChange(value)}
        ></TextInput>
        <TouchableWithoutFeedback onPress={onSendPress}>
          {isEmpty ? (
            <View style={styles.buttonView}>
              <Text style={styles.button1}>Send</Text>
            </View>
          ) : (
            <View style={styles.buttonView}>
              <Text style={styles.button2}>Send</Text>
            </View>
          )}
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default InboxScreen;
