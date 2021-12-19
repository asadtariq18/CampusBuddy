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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
    padding: 20,
    marginTop: 27,
    marginHorizontal: 8,
  },
  loadingView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 16,
    marginHorizontal: 8,
  },
  name: {
    textAlign: "center",
    fontSize: 12,
    color: COLORS.font,
  },
});

export default styles;
