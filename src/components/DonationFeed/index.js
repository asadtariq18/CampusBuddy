import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import database from "../../Database/database";
import DonationPost from "../DonationPost";

const DonationFeed = ({ posts }) => {
  const [postsArray, setPostsArray] = useState(null);
  const [tempArray, setTempArray] = useState(null);
  useEffect(() => {
    if (posts) {
      // console.log(posts);
      setTempArray(Object.values(posts));
      if (tempArray) {
        setPostsArray(
          tempArray.sort(function (a, b) {
            console.log(a)
            return b.timestamp > a.timestamp;
          })
        );
      }
    } else {
      console.log("null posts");
      let posts = database.getDonationPosts()
      if(posts){
        setTempArray(Object.values(posts));
        if (tempArray) {
          setPostsArray(
            tempArray.sort(function (a, b) {
              console.log(a);
              return b.timestamp > a.timestamp;
            })
          );
        }
      }
    }
  }, [posts]);

  return (
    <View style={{ paddingBottom: 0 }}>
      <FlatList
        data={postsArray}
        showsVerticalScrollIndicator={false}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => {
          console.log("item\n" + item);
          return <DonationPost post={item} />;
        }}
      />
    </View>
  );
};

export default DonationFeed;
