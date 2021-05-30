import React from 'react';
import {View} from 'react-native';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import styles from '../../screens/HomeScreen/style';

const Post = ({post}) => (
    <View style={styles.container}>
        <Header imageUri={post.user.imageUri} name={post.user.name} caption={post.caption} />
        <Body imageUri={post.imageUri}/>
        <Footer likesCount={post.likesCount} postedAt={post.postedAt}/>
    </View>
)

export default Post;