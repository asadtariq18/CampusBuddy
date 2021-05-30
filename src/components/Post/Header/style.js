import {StyleSheet} from 'react-native';
import Body from '../Body';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    left: {
        flexDirection: 'row',
        marginLeft: 2,
    },
    right: {
        flexDirection: 'row',
        marginRight: 15,
    },
    name:{
        alignContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#3c3c3c'
    },
    bottom: {
         flexDirection: 'column',
         marginLeft: 10,
         marginBottom: 10,
         marginTop: 5,
        
    }
})

export default styles;