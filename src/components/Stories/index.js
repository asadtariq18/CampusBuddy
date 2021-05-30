import React from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import StoryPreview from '../Story';
import styles from './style';
import data from '../../Data/StoriesData/stories';
const Stories = () => {
    
//  const pickFromGallery = async ()=>{
//     const {granted} =  await Permissions.askAsync(Permissions.CAMERA_ROLL)
//     if(granted){
//          let data =  await ImagePicker.launchImageLibraryAsync({
//               mediaTypes:ImagePicker.MediaTypeOptions.Images,
//               allowsEditing:true,
//               aspect:[1,1],
//               quality:0.5
//           })
//     }else{
//        Alert.alert("you need to give up permission to work")
//     }
//  }

const camPress = async () => {
  const {granted} = await Permissions.askAsync (Permissions.CAMERA);
  if (granted) {
    let data = await ImagePicker.launchCameraAsync ({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });
  } else {
    Alert.alert ('you need to give up permission to work');
  }
};
    return(
  <View style={styles.container}>
    <TouchableOpacity onPress={camPress}>
      <View style={styles.plusIcon}>
        <Icon name="pluscircleo" color="gray" size={53} />
        <Text style={styles.name}>Add</Text>
      </View>
    </TouchableOpacity>
    <View>
      <FlatList
        style={styles.storiesContainer}
        data={data}
        keyExtractor={({id}) => id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <StoryPreview story={item} />}
      />
    </View>
  </View>
)};

export default Stories;
