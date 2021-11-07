import React, { useState, useEffect } from "react";
import { FlatList, Text } from "react-native";
import SearchHead from "../SearchHead/index";
import database from "../../Database/database";
import { COLORS } from "../../Constants/COLORS";
import { render } from "react-dom";

const SearchList = ({ query }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [users, setUsers] = useState(database.searchUsers());
  useEffect(() => {
    setSearchResult(
      Object.keys(users).map(function (_) {
        return users[_];
      })
    );
  }, [users]);

  if (searchResult.length === 0) {
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
        No Search result{" "}
      </Text>
    );
  } else {
    return (
      <FlatList
        data={searchResult}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <SearchHead result={item} />}
        // {
        //   item.name.includes(query) ? (
        //     render(<SearchHead result={item} />)
        //   ) : (
        //       render(
        //     <Text
        //       style={{
        //         fontSize: 18,
        //         color: COLORS.font_secondary,
        //         marginTop: 30,
        //         alignSelf: "center",
        //       }}
        //     >
        //       {" "}
        //       No Search result{" "}
        //     </Text>
        //   ))
        // }}
      />
    );
  }
};
export default SearchList;
