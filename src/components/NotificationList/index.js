import React,{useState, useEffect} from "react";
import { FlatList, RefreshControl, ToastAndroid } from "react-native";
import NotificationHead from "../NotificationHead/index";
import data from "../../Data/NotificationData/notificationData";
import { COLORS } from "../../Constants/COLORS";

const NotificationList = ({notifications}) => {
  //console.log(notifications)


    const [notificationsArray, setNotificationsArray] = useState([]);
    useEffect(() => {
      setNotificationsArray(
        Object.keys(notifications).map(function (_) {
          return notifications[_];
        })
      );
      const sortedArray = notificationsArray.sort(function(a, b){return (b.timestamp < a.timestamp)})
      setNotificationsArray(sortedArray)
    }, [notifications]);
  return (
    <FlatList
      data={notificationsArray}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <NotificationHead
        userID= {item.userID}
          image={item.image}
          name={item.name}
          notification={item.notification}
        />
      )}

    />
  );
};
export default NotificationList;
