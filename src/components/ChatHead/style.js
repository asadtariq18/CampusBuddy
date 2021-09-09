import {StyleSheet} from 'react-native';
import { COLORS } from '../../Constants/COLORS';

const styles = StyleSheet.create({
    container: {
       
    },
    name:{
        alignContent: 'center',
        alignSelf: 'center',
        marginTop: -15,
        marginStart:3,
        fontWeight: 'bold',
        color: COLORS.font
    
    },
    left: {
        flexDirection: 'row',
        marginLeft: 2,
    },
    messageText:{
        position:'absolute',
        marginLeft:70,
        marginTop:-28,
        color: COLORS.font_secondary
    },
    messageView:{
         flexDirection: 'column',
         marginRight: 100,
    }
})

export default styles;