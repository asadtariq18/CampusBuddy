import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width -20,
        height: Dimensions.get('window').width -20,
        alignSelf: 'center',
        borderRadius: 20
    },
    view:{
        justifyContent: 'center',
        alignContent: 'center'
    }
})

export default styles;