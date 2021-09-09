import React from 'react';
import { Text, Image, View } from 'react-native';
import styles from './style';

const Body = ({imageUri}) => (
    <View style={styles.view}>
        <Image source={{uri: imageUri}} style={styles.image}/>
    </View>
)

export default Body;