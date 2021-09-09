import {StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS } from '../../Constants/COLORS';

const styles = StyleSheet.create({
    container: {

    },
    name:{
        alignContent: 'center',
        alignSelf: 'center',
        marginBottom: 10,
        fontWeight: 'bold',
        color: COLORS.font
    
    },
    left: {
        flexDirection: 'row',
        marginLeft: 2,
    },
    notificationText:{
        marginTop: 19.5,
        color: "gray"
    },
})

export default styles;