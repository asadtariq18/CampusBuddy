import { ColorPropType, StyleSheet } from 'react-native';
import { COLORS } from '../../Constants/COLORS';

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderRadius: 50,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary
  },
  image: {
    borderRadius: 50,
  },
});

export default styles;