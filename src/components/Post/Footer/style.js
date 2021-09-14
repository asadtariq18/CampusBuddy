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
    padding: 20,

    shadowColor: COLORS.font_secondary,
  },
  modalText: {
    fontWeight: "bold",
    margin: 3,
    color: COLORS.font,
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 120,
    paddingVertical: 2,
    borderRadius: 20,
  },
  textInput: {
    backgroundColor: COLORS.secondary,
    fontSize: 15,
    height: 50,
    width: 300,
    borderRadius: 20,
    margin: 5,
    padding: 10,
    color: COLORS.font,
  },
});

export default styles;