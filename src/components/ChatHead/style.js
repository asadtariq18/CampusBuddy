import {Dimensions, StyleSheet} from 'react-native';
import { COLORS } from '../../Constants/COLORS';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    borderBottomColor: COLORS.font_secondary,
    // borderBottomWidth: 0.15,
    // borderBottomStartRadius: 100,
    // borderBottomEndRadius: 20,
    borderRadius: 20,
    marginBottom: 5,
  },
  name: {
    alignContent: "center",
    alignSelf: "center",
    marginTop: -15,
    marginStart: 3,
    fontWeight: "bold",
    color: COLORS.font,
  },
  left: {
    flexDirection: "row",
    marginLeft: 2,
  },
  messageText: {
    position: "absolute",
    marginLeft: 70,
    marginTop: -28,
    color: COLORS.font_secondary,
  },
  postedAt: {
    position: "absolute",
    marginLeft: Dimensions.get('window').width /1.4,
    marginTop: -28,
    color: COLORS.font_secondary,
  },
  messageView: {
    flexDirection: "column",
  },
});

export default styles;