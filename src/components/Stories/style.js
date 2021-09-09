import {StyleSheet} from 'react-native';
import { COLORS } from '../../Constants/COLORS';

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 30,
  },
  storiesContainer: {
    marginBottom: 5,
    borderRadius: 0,
    padding: 10,
    marginTop: 10,
  },
  plusIcon: {
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
    padding: 15,
    marginTop: 25,
    marginHorizontal: 8,
  },
  name: {
    textAlign: "center",
    marginVertical: 5,
    fontSize: 12,
    color: COLORS.font,
  },
});

export default styles;
