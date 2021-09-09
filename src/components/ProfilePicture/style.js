import { ColorPropType, StyleSheet } from 'react-native';
import { COLORS } from '../../Constants/COLORS';

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderRadius: 50,
    borderWidth: 3,
    borderColor:  COLORS.primary,
  },
  image: {
    borderRadius: 50,
  },
});

export default styles;