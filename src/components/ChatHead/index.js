import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, Text, View} from 'react-native';
import ProfilePicture from '../ProfilePicture';

import styles from './style';
import InboxScreen from '../../screens/InboxScreen';

const Chat = ({imageUri, name, lastmessage}) => {
  const navigation = useNavigation ();
const onPress = () => {
  navigation.navigate ("InboxScreen", {name});
};

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.left}>
          <ProfilePicture uri={imageUri} />
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.messageView}>
          <Text style={styles.messageText}>{lastmessage}</Text>
        </View>
   
    </TouchableOpacity>
  );
};

export default Chat;
