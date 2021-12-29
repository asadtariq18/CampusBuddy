import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StatusBar
} from "react-native";

import styles from "./style";
import database from "../../../Database/database";
import DonationFeed from "../../../components/DonationFeed";
import { Header, Left, Body, Icon, Title, Button, Right } from "native-base";
import { COLORS } from "../../../Constants/COLORS";
import { useNavigation } from "@react-navigation/core";

const DonationHome = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    let posts = database.getDonationPosts();
    if (posts) {
      setPosts(posts);
    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header}>
        <StatusBar backgroundColor={COLORS.background_dark} />
        <Body style={styles.header}>
          <Title style={styles.headerText}>Donation</Title>

        </Body>
        <Right>
          <Button
            transparent
            onPress={() => navigation.navigate("CreateDonationPostScreen")}
          >
            <Icon style={{ fontSize: 30, marginTop: 2 }} name="add" />
          </Button>
        </Right>
      </Header>
      <DonationFeed posts={posts} />
    </SafeAreaView>
  );
};
export default DonationHome;
