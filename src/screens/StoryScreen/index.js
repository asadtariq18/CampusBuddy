import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'

const StoryScreen = () =>{

    const route = useRoute();
    const navigation = useNavigation();
    const name = route.params.username;

    const onPress = () =>(
        navigation.navigate('Feed')
    )
return(
    <TouchableHighlight onPress={onPress}>
    <SafeAreaView style={{backgroundColor:'#9E4CA8F6', justifyContent:'center', height: '100%'}}>
        <Text style={{textAlign: 'center', fontSize:40, color:'#ffffff'}}>{name}'s Story</Text>
    </SafeAreaView>
    </TouchableHighlight>
)};

export default StoryScreen; 