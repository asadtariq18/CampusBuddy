import React from 'react';
import { FlatList } from 'react-native';
import Post from '../Post';
import Stories from '../../components/Stories';
import postsData from '../../Data/PostData/posts'
import { View } from 'native-base';

const Feed = ({ navigation, route }) => (
  <View style={{ paddingBottom: 50 }}>
    <FlatList
      data={postsData}
      showsVerticalScrollIndicator={false}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <Post post={item} />}
      ListHeaderComponent={Stories}
    />
  </View>
);

export default Feed;