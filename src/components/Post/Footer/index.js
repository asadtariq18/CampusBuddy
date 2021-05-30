import React, { useState, useEffect }from 'react';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import styles from './style';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import IonIconIcon from 'react-native-vector-icons/Ionicons';


const Footer = ({likesCount: likesCountProp, postedAt}) => {

    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0)
    const onLikePressed = () =>{
        const amount = isLiked ? -1 : 1;
        setLikesCount(likesCount + amount);
        setIsLiked(!isLiked);
    }

    useEffect(() =>{
        setLikesCount(likesCountProp)
      }, [])
    return(
        <View style={styles.container}>
        <View style={styles.iconContainer}>
       <View style={styles.left}>
           <TouchableWithoutFeedback onPress={onLikePressed}>
                {isLiked ?
                <View style={styles.buttonView}>
                <ADIcon style={styles.icon} name='like1' size={25} color='#4461f2'/>
                <Text style={styles.text}>Like</Text>
                </View>
                :
                <View style={styles.buttonView}>
                <ADIcon style={styles.icon} name='like2' size={25} color='#3D3B3B'/>
                <Text style={styles.text}>Like</Text>
                </View>
                
            }
           
           </TouchableWithoutFeedback>
           <TouchableOpacity>
           <View style={styles.buttonView}>
           <FontAwesome style={styles.icon} name='comment-o' size={25} color='#3D3B3B'/>
           <Text style={styles.text}>Comment</Text>
           </View>
           </TouchableOpacity>
           <TouchableOpacity >
           <View style={styles.buttonView}>
           <IonIconIcon style={styles.icon} name='share-social-outline' size={24} color='#3D3B3B'/>
           <Text style={styles.text}>Share</Text>
           </View>
           </TouchableOpacity>
       </View>
       </View>
       <Text style={styles.likes}>{likesCount} Likes</Text>
       <Text style={styles.postedAt}>{postedAt}</Text>
   </View>
)
}
export default Footer;