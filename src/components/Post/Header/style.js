import {StyleSheet} from 'react-native';
import { COLORS } from '../../../Constants/COLORS';

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5

  },
  left: {
    flexDirection: "row",
  },
  right: {
    flexDirection: "row",
  },
  name: {
    alignContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: COLORS.font,
    paddingStart: 5,
  },
  caption: {
    color: COLORS.font,
    fontSize: 15,
  },
  bottom: {
    flexDirection: "column",
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 2,
  },
});

export default styles;