
import {StyleSheet} from 'react-native';
import { COLORS } from '../../Constants/COLORS';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background_dark,
    flex: 1,
  },
  header: {
    backgroundColor: COLORS.background_dark,
  },
  headerText: {
    alignSelf: 'center',
    fontWeight: "bold",
    marginEnd: 40,
    fontSize: 20,
    color: COLORS.font,
  },
});

export default styles;
