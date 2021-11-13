import React, { useState, useEffect } from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";
import { Header, Item, Input, Icon, Button } from "native-base";
import { COLORS } from "../../Constants/COLORS";
import styles from "../SearchScreen/style";
import SearchList from "../../components/SearchList";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../Redux/Search/actions";

const SearchScreen = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);

  const onChange = (input) => {
    dispatch(setQuery(input));
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
      <SearchList query={query} />
    </SafeAreaView>
  );
};

export default SearchScreen;
