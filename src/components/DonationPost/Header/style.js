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
  type: {
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
    marginBottom: 2,
    marginTop: 2,
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    height: "10%",
    width: "100%",
    backgroundColor: COLORS.secondary3,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    padding: 10,
    shadowColor: COLORS.font_secondary,
  },
  modalText: {
    fontWeight: "bold",
    textAlign: 'center',
    alignSelf: 'center',
    width: '100%',
    margin: 3,
    fontSize: 20,
    color: COLORS.font,
    backgroundColor: COLORS.tertiary,
    paddingHorizontal: 100,
    paddingVertical: 10,
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