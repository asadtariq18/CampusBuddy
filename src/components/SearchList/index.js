import React, { useState, useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import SearchHead from "../SearchHead/index";
import database from "../../Database/database";
import { COLORS } from "../../Constants/COLORS";

const SearchList = ({ query }) => {
  let users = database.searchUsers();
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    users = database.searchUsers();
    setSearchResult(
      Object.keys(users).map(function (_) {
        return users[_];
      })
    );
  }, [query]);
  var filteredResults = searchResult.filter(function (obj) {
    return (
      obj.name.toLowerCase().includes(query.toLowerCase()) ||
      obj.userID.includes(query.toLowerCase())
    );
  });

  if (filteredResults.length === 0) {
    return (
      <Text
        style={{
          fontSize: 18,
          color: COLORS.font_secondary,
          marginTop: 30,
          alignSelf: "center",
        }}
      >
        {" "}
        No Search results{" "}
      </Text>
    );
  } else {
    return (
      <View>
        <Text
          style={{
            color: COLORS.font_secondary,
            marginStart: 10,
            marginBottom: 2,
            fontSize: 16,
          }}
        >
          {" "}
          Users{" "}
        </Text>
        <FlatList
          data={filteredResults}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => {
            if (item.userID !== database.getCurrentUser().userID) {
              return <SearchHead result={item} />;
            }
            return null;
          }}
        />
      </View>
    );
  }
};
export default SearchList;
