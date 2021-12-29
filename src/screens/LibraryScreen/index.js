import React, { useEffect, useState } from "react";
import { SafeAreaView, Image, Text, ScrollView, RefreshControl } from "react-native";
import { COLORS } from "../../Constants/COLORS";
import styles from "./style";
import axios from "axios";
import FriendSuggestionList from "../../components/FriendSuggestionList";
import database from "../../Database/database";

const LibraryScreen = () => {
    const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    // ScraperHandler();
    // console.log(database.getUsers())
  }, []);
  const ScraperHandler = () => {
    axios
      .get("http://10.113.52.53:3020/scrape-data")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };



  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: COLORS.background_dark,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
      // refreshControl={
      //   <RefreshControl
      //     progressBackgroundColor={COLORS.background_dark}
      //     colors={[COLORS.primary]}
      //     refreshing={refreshing}
      //     onRefresh={onRefresh}
      //   />
      // }
    >
      <Text style={styles.text}>Library</Text>
    </ScrollView>
  );
};
export default LibraryScreen;
