import {StyleSheet} from 'react-native';
import { COLORS } from '../../../Constants/COLORS';

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  buttonView: {
    flexDirection: "row",

    paddingVertical: 2,
    marginTop: 1,
    marginBottom: 5,
  },
  left: {
    flexDirection: "row",
    marginLeft: 2,
  },
  likes: {
    fontWeight: "bold",
    margin: 3,
    color: COLORS.font,
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  postedAt: {
    fontWeight: "bold",
    margin: 3,
    color: COLORS.font,
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  footer_button_pressed: {
    fontWeight: "bold",
    marginLeft: 5,
    marginTop: 2,
    color: COLORS.font,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  footer_button: {
    fontWeight: "bold",
    marginLeft: 5,
    marginTop: 2,
    color: COLORS.font,
    backgroundColor: COLORS.secondary,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default styles;