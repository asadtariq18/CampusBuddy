import React from 'react';
import { SafeAreaView, Text, FlatList } from 'react-native';
import styles from './style';
import ChatPreview from '../ChatHead';
import data from '../../Data/ChatData/chatdata';

const ChatList = () =>(


     <FlatList 
        style={styles.container}
        data={data}
        keyExtractor={({name}) => name}
        renderItem={({item}) => <ChatPreview imageUri={item.imageUri} name={item.name} lastmessage={item.lastmessage}/>}

    />
)

export default ChatList; 