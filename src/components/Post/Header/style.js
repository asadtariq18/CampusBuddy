import {StyleSheet} from 'react-native';
import { COLORS } from '../../../Constants/COLORS';
import Body from '../Body';

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

  },
  left: {
    flexDirection: "row",
    marginLeft: 2,
  },
  right: {
    flexDirection: "row",
    marginRight: 15,
  },
  name: {
    alignContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: COLORS.font,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  caption: {
    color: COLORS.font,
    fontSize: 18,
  },
  bottom: {
    flexDirection: "column",
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 5,
  },
});

export default styles;