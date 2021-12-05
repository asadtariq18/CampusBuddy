
import {StyleSheet} from 'react-native';
import { COLORS } from '../../Constants/COLORS';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background_dark,
    flex: 1,
    marginBottom: 60
  },
  header: {
    backgroundColor: COLORS.background_dark,
  },
  headerText: {
    marginHorizontal: -100,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: COLORS.font,
  },
});

export default styles;
