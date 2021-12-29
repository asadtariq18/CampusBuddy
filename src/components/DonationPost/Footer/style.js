import {Dimensions, StyleSheet} from 'react-native';
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
  },

  timestamp: {
    fontWeight: "bold",
    margin: 3,
    color: COLORS.font,
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  footer_button: {
    alignSelf: 'center',
    fontWeight: "bold",
    marginLeft: 5,
    marginTop: 2,
    color: COLORS.font,
    backgroundColor: COLORS.tertiary,
    borderRadius: 25,
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    height: 500,
    width: "95%",
    backgroundColor: COLORS.background_dark,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    padding: 10,
    shadowColor: COLORS.font_secondary,
  },
  text: {
    fontWeight: "bold",
    color: COLORS.font,
    paddingBottom: 2,
  },

  modalClose: {
    flex: 1,
    margin: 3,
    backgroundColor: "transparent",
    paddingHorizontal: "100%",
    paddingVertical: 4,
    marginTop: 10,
    borderRadius: 20,
  },
});

export default styles;