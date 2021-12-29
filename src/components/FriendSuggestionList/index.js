import React, { useState, useEffect } from "react";
import {
  FlatList,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from "react-native";
import database from "../../Database/database";
import { COLORS } from "../../Constants/COLORS";
import FriendSuggestionHead from "../FriendSuggestionHead";
import { useDispatch, useSelector } from "react-redux";
import { setSuggestionList } from "../../Redux/FriendSuggestion/actions";

const FriendSuggestionList = () => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState();
  const suggestionList = useSelector(
    (state) => state.suggestionList.suggestionList
  );

  useEffect(() => {
    let data = database.getUsers();
    if (data) {
      dispatch(setSuggestionList(data));
    } else {
      dispatch(setSuggestionList(null));
    }
  }, []);

  
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      let data = database.getUsers();
      if (data) {
        dispatch(setSuggestionList(data));
      } else {
        dispatch(setSuggestionList(null));
      }
      setRefreshing(false);
      // ToastAndroid.show("Updated", ToastAndroid.SHORT);
    } catch (error) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    }
  }, [refreshing]);
  if (suggestionList) {
    if (suggestionList.length === 0) {
      return <ActivityIndicator />;
    } else {
      return (
        <ScrollView
          refreshControl={
            <RefreshControl
              progressBackgroundColor={COLORS.background_dark}
              colors={[COLORS.primary]}
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >
          <Text
            style={{
              color: COLORS.font,
              marginStart: 10,
              marginTop: 10,
              fontSize: 20,
            }}
          >
            {" "}
            Friend suggestions for you{" "}
          </Text>

          <FlatList
            horizontal
            data={suggestionList}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => {
              return <FriendSuggestionHead userID={item.userID} />;
            }}
          />
        </ScrollView>
      );
    }
  } else {
    return (
      <View>
        <Text
          style={{
            color: COLORS.font,
            marginStart: 10,
            marginHorizontal: 5,
            fontSize: 16,
          }}
        >
          {" "}
          No Suggestion so far{" "}
        </Text>
        <ActivityIndicator />
      </View>
    );
  }
};
export default FriendSuggestionList;
