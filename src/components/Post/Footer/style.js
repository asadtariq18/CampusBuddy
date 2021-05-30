import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 5,
    },
    iconContainer: {
        justifyContent: 'space-between',
        borderBottomWidth: 0.3,
        borderBottomColor: 'gray',
        borderRadius: 20,
    },
    left:{
        flexDirection: 'row',
       justifyContent: 'space-evenly',
       marginTop: -4
  
    },
    icon:{
        flexDirection: 'row',
       justifyContent: 'space-evenly',
       marginTop: -3
  
    },

    buttonView:{
        flexDirection: 'row',
        paddingHorizontal: 45,
        paddingVertical: 6,
    },
    likes: {
        fontWeight: 'bold',
        margin: 3,
    },
    postedAt: {
        fontWeight: 'bold',
        margin: 3,
        color: '#8c8c8c'
    },
    text:{
        fontWeight: 'bold',
        marginLeft: 5,
        marginTop: 2

    }
})

export default styles;