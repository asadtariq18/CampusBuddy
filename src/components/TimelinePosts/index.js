import React from "react";
import { FlatList, View, Text, Image} from "react-native";
import styles from "./style";
import PostPreview from "../PostPreview";
import data from "../../Data/StoriesData/stories";
import database from "../../Database/database";

const TimelinePosts = () => {

    let posts = database.getUserPosts(database.getCurrentUser().mail)
    //console.log(posts)

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.storiesContainer}
        data={data}
        keyExtractor={({ id }) => id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <PostPreview story={item} />}
      />
    </View>
  );
};

export default TimelinePosts;
