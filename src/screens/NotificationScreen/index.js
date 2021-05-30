import React from 'react';
import {SafeAreaView, FlatList, View, ScrollView} from 'react-native';
import {Container, Header, Item, Input, Icon, Button, Text} from 'native-base';

import NotificationList from '../../components/NotificationList';
import styles from './style';

const NotificationScreen = () => (
  <SafeAreaView>
  <Header style={{backgroundColor: '#ffffff'}}>
    <View style={styles.header}>
        <Text style={styles.headertext}>
          Notification
        </Text>
    </View>
      </Header>
    <ScrollView>
      <NotificationList />
    </ScrollView>
  </SafeAreaView>
);

export default NotificationScreen;
