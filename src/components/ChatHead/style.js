import {Dimensions, StyleSheet} from 'react-native';
import { COLORS } from '../../Constants/COLORS';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    borderRadius: 10,
    backgroundColor: COLORS.secondary,
    flexDirection: "row",
    marginBottom: 2,
    padding: 5,
  },
  name: {
    fontWeight: "bold",
    color: COLORS.font,
  },
  commentText: {
    color: COLORS.font_secondary,
  },
  timestamp: {
    color: COLORS.font_secondary,
    textAlign: "right",
    paddingHorizontal: 5,
    fontSize: 12,
  },
  content: {
    alignSelf: 'center',
    paddingEnd: 40,
  },
});

export default styles;