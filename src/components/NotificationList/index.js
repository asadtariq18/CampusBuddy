import React from 'react';
import { FlatList } from 'react-native';
import NotificationHead from '../NotificationHead/index';
import data from '../../Data/NotificationData/notificationData';

const NotificationList = () =>(
     <FlatList
        data={data}
        keyExtractor={({id}) => id}
        renderItem={({item}) => <NotificationHead imageUri={item.imageUri} name={item.name} notification={item.notification}/>}

    />
)

export default NotificationList; 