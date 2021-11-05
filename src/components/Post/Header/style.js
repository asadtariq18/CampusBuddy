import {StyleSheet} from 'react-native';
import { COLORS } from '../../../Constants/COLORS';

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    flexDirection: "row",
  },
  right: {
    flexDirection: "row",
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    color: COLORS.font,
  },
  userID: {
    fontWeight: "bold",
    fontSize: 12,
    color: COLORS.font_secondary,
  },
  caption: {
    color: COLORS.font,
    fontSize: 17,
  },
  bottom: {
    flexDirection: "column",
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 2,
  },
});

export default styles;