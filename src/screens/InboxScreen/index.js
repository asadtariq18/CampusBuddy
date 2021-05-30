import { useRoute } from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text, TextInput} from 'react-native';

const InboxScreen = () => {
    
    const route = useRoute();
    console.log ({route});
return(
  <SafeAreaView
    style={{
      backgroundColor: '#156DA8',
      justifyContent: 'center',
      height: '100%',
    }}
  >
    <Text style={{textAlign: 'center', fontSize: 40, color: '#ffffff'}}>
      {route.params.name}
    </Text>
    <TextInput></TextInput>
  </SafeAreaView>
)};

export default InboxScreen;
