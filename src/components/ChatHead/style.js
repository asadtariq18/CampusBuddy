import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
       
    },
    name:{
        alignContent: 'center',
        alignSelf: 'center',
        marginBottom: 10,
        fontWeight: 'bold',
        color: '#3c3c3c'
    
    },
    left: {
        flexDirection: 'row',
        marginLeft: 2,
    },
    messageText:{
        position:'absolute',
        marginLeft:70,
        marginTop:-28,
        color: 'gray'
    },
    messageView:{
         flexDirection: 'column',
         marginRight: 100,
    }
})

export default styles;