import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Feed from '../../components/Feed';
import styles from './style';


const HomeScreen = () => (
    <SafeAreaView style={styles.container} >
      <StatusBar/>
        <Feed/>
    </SafeAreaView>
)

export default HomeScreen;