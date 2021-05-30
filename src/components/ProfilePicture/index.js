import React from 'react';
import {Image, View, } from 'react-native';
import styles from './style';


const ProfilePicture = ({uri, size=50}) => (
    <View style={[styles.container, { width: size + 6, height: size + 6, borderRadius: 50 }]}>
        <Image 
        source={{uri}}
        style={[styles.image, {height: size, width:size,}]}
        />
    </View>
)

export default ProfilePicture;