import React from "react";
import { FlatList, RefreshControl, ToastAndroid } from "react-native";
import NotificationHead from "../NotificationHead/index";
import data from "../../Data/NotificationData/notificationData";
import { COLORS } from "../../Constants/COLORS";

const NotificationList = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    if (data.length < 1) {
      try {
        setRefreshing(false);
        ToastAndroid.show("Updated", ToastAndroid.SHORT);
      } catch (error) {
        console.error(error);
      }
    } else {
      ToastAndroid.show("No more new notification", ToastAndroid.SHORT);
      setRefreshing(false);
    }
  }, [refreshing]);
  return (
    <FlatList
      data={data}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <NotificationHead
          imageUri={item.imageUri}
          name={item.name}
          notification={item.notification}
        />
      )}
      refreshControl={
        <RefreshControl
          progressBackgroundColor={COLORS.background_dark}
          colors={[COLORS.primary]}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    />
  );
};
export default NotificationList;
