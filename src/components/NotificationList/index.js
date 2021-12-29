import React, { useState, useEffect } from "react";
import { FlatList, RefreshControl, ToastAndroid } from "react-native";
import NotificationHead from "../NotificationHead/index";
import data from "../../Data/NotificationData/notificationData";
import { COLORS } from "../../Constants/COLORS";
import database from "../../Database/database";

const NotificationList = ({ notifications }) => {
  const [notificationsArray, setNotificationsArray] = useState([]);
  useEffect(() => {
    setNotificationsArray(notifications);
    const sortedArray = notificationsArray.sort(function (a, b) {
      return b.timestamp < a.timestamp;
    });
    setNotificationsArray(sortedArray);
  }, [notifications]);
  return (
    <FlatList
      data={notifications}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => {
        console.log(item.userID)
        let avatar = database.getUser(item.userID).avatar
        return(
        <NotificationHead
          userID={item.userID}
          notification={item.notification}
          avatar={avatar}
          name= {item.name}
        />
      )}}
    />
  );
};
export default NotificationList;
