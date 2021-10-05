import React, {useState, useEffect} from "react";
import { FlatList, View, Text, Image, TouchableOpacity} from "react-native";
import styles from "./style";
import PostPreview from "../PostPreview";
import data from "../../Data/StoriesData/stories";
import database from "../../Database/database";

const TimelinePosts = ({posts}) => {
    const [postsArray, setPostsArray] = useState()
    // let posts = database.getUserPosts(posts)
    // console.log(posts)
useEffect(() => {
  setPostsArray(Object.keys(posts).map(function(_) { return posts[_]; }))
  
}, [])
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.storiesContainer}
        data={postsArray}
        keyExtractor={({ id }) => id}
        horizontal
        showsHorizontalScrollIndicator={false} 
        renderItem={({ item }) => {
        return(<PostPreview post = {item}/>)}}
      />
    </View>
  );
};

export default TimelinePosts;

// const PostPreview = ({p}) => {
  
//   useEffect(() => {
//     console.log('ajshxkjshKJHSAKGHJKHGJHG')

//   }, [])
//   // const navigation = useNavigation();

//   // const onPress = () => {
//   //   navigation.navigate("StoryScreen", { username: name });
//   // };
//   return (
//     // <View style = {{backgroundColor: 'red', height: 100, width: 100, }}>
//     //   <Text>Holaaaaaaaaa</Text>
//     // </View>
//     <TouchableOpacity style = {{backgroundColor: 'red'}}>
//       <View style={styles.container}>
//         <ProfilePicture uri={p.image} />
//       </View>
//     </TouchableOpacity>
//   );
// };