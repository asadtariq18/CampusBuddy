import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text } from 'react-native';
import ProfilePicture from '../ProfilePicture';

import styles from './style';
import StoryScreen from '../../screens/StoryScreen';

const Story = (props) => {
    const {
        story:{
            user:{
                id,
                imageUri,
                name,
            }
    }
    } = props;
    const navigation = useNavigation();

    const onPress = () => {
         navigation.navigate("StoryScreen", {username: name});
    }
    return(
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <ProfilePicture uri={imageUri}/>
        <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>

)};

export default Story;