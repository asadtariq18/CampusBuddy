import {StyleSheet, Dimensions} from 'react-native';
import { COLORS } from '../../Constants/COLORS';

const styles = StyleSheet.create({
    container: {},
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 3,
    color: COLORS.font,
  },

  bottomTab: {
    position: "absolute",
    backgroundColor: COLORS.background_dark,
    borderTopWidth: 0,
    height: 50,

  },
});

export default styles;