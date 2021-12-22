import React, { useEffect } from "react";
import { SafeAreaView, Image, Text } from "react-native";
import { COLORS } from "../../Constants/COLORS";
import styles from "./style";
import axios from "axios";
import FriendSuggestionList from "../../components/FriendSuggestionList";

const LibraryScreen = () => {
  useEffect(() => {
    ScraperHandler();
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
    <SafeAreaView
      style={{
        backgroundColor: COLORS.background_dark,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text style={styles.text}>Library</Text>
    {/* <FriendSuggestionList userID={"asadtariq070 "}/> */}
    </SafeAreaView>
  );
};
export default LibraryScreen;
