import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, Text, View} from 'react-native';
import ProfilePicture from '../ProfilePicture';

import styles from './style';

const Notification = ({imageUri, name, notification}) => {
  const navigation = useNavigation ();
const onPress = () => {
  navigation.navigate ();
};

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.left}>
          <ProfilePicture uri={imageUri} />
          <Text style={styles.name}>{name} {' '}</Text>
          <Text style={styles.notificationText}>{notification}</Text>
          </View>
   
    </TouchableOpacity>
  );
};

export default Notification;
