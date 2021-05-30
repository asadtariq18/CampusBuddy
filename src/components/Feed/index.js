import React from 'react';
import { FlatList } from 'react-native';
import Post from '../Post';
import Stories from '../../components/Stories';
import postsData from '../../Data/PostData/posts'

const Feed = ({navigation, route}) =>(
    <FlatList
    data={postsData}
    keyExtractor={({id}) => id}
    renderItem={({item}) => <Post post={item}/>}
    ListHeaderComponent={Stories}
    />
)

export default Feed;