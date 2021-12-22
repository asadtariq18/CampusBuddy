import React, { useState, useEffect } from "react";
import { FlatList, Text, View, ActivityIndicator } from "react-native";
import database from "../../Database/database";
import { COLORS } from "../../Constants/COLORS";
import FriendSuggestionHead from "../FriendSuggestionHead";

const FriendSuggestionList = ({ userID, query }) => {
  const [friendsList, setFriendsList] = useState();
  useEffect(() => {
    
    setFriendsList(Object.values(database.getFriends(userID)));
  }, [query]);
  if (friendsList) {
    var filteredResults = friendsList.filter(function (obj) {
      return (
        obj.userID.includes(query.toLowerCase()) ||
        obj.name.toLowerCase().includes(query.toLowerCase())
      );
    });
  }
  if (friendsList) {
    if (filteredResults.length === 0) {
      return <ActivityIndicator />;
    } else {
      return (
        <View>
          <Text
            style={{
              color: COLORS.font,
              marginStart: 10,
              marginBottom: 5,
              fontSize: 16,
            }}
          >
            {" "}
            People you may know{" "}
          </Text>
          )
          <FlatList
            data={filteredResults}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => {
              return <FriendSuggestionHead userID={item.userID} />;
            }}
          />
        </View>
      )
    }
  } else {
    return <ActivityIndicator />;
  }
};
export default FriendSuggestionList;
