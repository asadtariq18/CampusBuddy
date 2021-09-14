import React from "react";
import { FlatList } from "react-native";
import CommentHead from "../CommentHead/index";
import data from '../../Data/CommentData/commentData';

const CommentList = () => (
  <FlatList
    keyboardShouldPersistTaps="always"
    data={data}
    keyExtractor={({ id }) => id}
    renderItem={({ item }) => (
      <CommentHead
        imageUri={item.imageUri}
        name={item.name}
        comment={item.comment}
      />
    )}
  />
);

export default CommentList;
