import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image
} from "react-native";
import { Header, Left, Body, Icon, Title, Button, Right } from "native-base";
import styles from "./style";
import { COLORS } from "../../Constants/COLORS";
import {LinearGradient} from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const DonationScreen = () => 
{const navigation = useNavigation();
return (
  <SafeAreaView style={styles.container}>
    <Header style={styles.header}>
      <StatusBar backgroundColor={COLORS.background_dark} />
      <Left>
        <Button transparent onPress={() => navigation.openDrawer()}>
          <Icon name="ios-menu" />
        </Button>
      </Left>
      <Body style={styles.header}>
        <Title style={styles.headerText}>Donation</Title>
      </Body>
    </Header>
    <Image
      style={styles.image}
      source={{
        uri: "https://thumbs.gfycat.com/GoodWeeArmyworm.webp",
      }}
    />
    <View style={styles.container}>
      <TouchableOpacity>
        <LinearGradient colors={["#1f4037", "#99f2c8"]} style={styles.cardView}>
          <Text style={styles.button}>Donate</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity>
        <LinearGradient
          colors={["#BBD2C5", "#536976", "#292E49"]}
          style={styles.cardView}
        >
          <Text style={styles.button}>Request Donation</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);};

export default DonationScreen;
