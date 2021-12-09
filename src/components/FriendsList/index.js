import React, { useState, useEffect } from "react";
import { FlatList, Text, View, ActivityIndicator } from "react-native";
import database from "../../Database/database";
import { COLORS } from "../../Constants/COLORS";
import FriendHead from "../FriendHead";

const FriendsList = ({ userID, query, newChat }) => {
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
          No friends{" "}
        </Text>
      );
    } else {
      return (
        <View>
          {newChat ? (
            <Text
              style={{
                color: COLORS.font_secondary,
                marginStart: 10,
                marginBottom: 5,
                fontSize: 16,
              }}
            >
              {" "}
              Select a user to start chat{" "}
            </Text>
          ) : (
            <Text
              style={{
                color: COLORS.font_secondary,
                marginStart: 10,
                marginBottom: 5,
                fontSize: 16,
              }}
            >
              {" "}
              Users{" "}
            </Text>
          )}
          <FlatList
            data={filteredResults}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => {
              return <FriendHead userID={item.userID} newChat={newChat} />;
            }}
          />
        </View>
      );
    }
  } else {
    return <ActivityIndicator />;
  }
};
export default FriendsList;
