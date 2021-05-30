import React from 'react';
import { SafeAreaView, Text, FlatList, View } from 'react-native';
import ChatList from '../../components/ChatList';
import styles from './style';


const ChatScreen = () =>(

    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
    <ChatList/>
    </View>
    </SafeAreaView>
)

export default ChatScreen; 