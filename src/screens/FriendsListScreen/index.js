import React, { useState, useEffect } from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";
import { Header, Item, Input, Icon, Button } from "native-base";
import { COLORS } from "../../Constants/COLORS";
import styles from "../FriendsListScreen/style";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../Redux/Search/actions";
import FriendsList from "../../components/FriendsList";
import database from "../../Database/database";
import { useRoute } from "@react-navigation/core";

const FriendsListScreen = ({ route }) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState(''); 
  const { userID } = route.params;

  const onChange = (input) => {
    setQuery(input);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        searchBar
        rounded
        style={{ backgroundColor: COLORS.background_dark }}
      >
        <Item style={{ backgroundColor: COLORS.secondary }}>
          <Icon name="ios-search" />
          <Input
            placeholder="Search"
            onChangeText={(input) => onChange(input)}
            style={{ color: COLORS.font }}
          />
        </Item>
        <StatusBar backgroundColor={COLORS.background_dark} />
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
      <FriendsList userID={userID} query={query}/>
    </SafeAreaView>
  );
};

export default FriendsListScreen;
