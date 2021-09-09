import { useRoute } from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text, TextInput} from 'react-native';
import { COLORS } from '../../Constants/COLORS';

const InboxScreen = () => {
    
    const route = useRoute();
    console.log ({route});
return(
  <SafeAreaView
    style={{
      backgroundColor: COLORS.background_dark,
      justifyContent: 'center',
      height: '100%',
    }}
  >
    <Text style={{textAlign: 'center', fontSize: 40, color: COLORS.font}}>
      {route.params.name}
    </Text>
    <TextInput></TextInput>
  </SafeAreaView>
)};

export default InboxScreen;
