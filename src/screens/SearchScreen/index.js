import React from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";
import {
  Header,
  Item,
  Input,
  Icon,
  Button,
} from "native-base";
import { COLORS } from "../../Constants/COLORS";
import styles from "../SearchScreen/style";

const SearchScreen = () => (
  <SafeAreaView style={styles.container}>
    <Header
      searchBar
      rounded
      style={{ backgroundColor: COLORS.background_dark }}
    >
      <Item style={{ backgroundColor: COLORS.secondary }}>
        <Icon name="ios-search" />
        <Input placeholder="Search" />
      </Item>
      <StatusBar backgroundColor={COLORS.background_dark} />
      <Button transparent>
        <Text>Search</Text>
      </Button>
    </Header>
  </SafeAreaView>
);

export default SearchScreen;
