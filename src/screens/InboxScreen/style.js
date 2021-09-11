import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/COLORS";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background_dark,
    flex: 1,
  },
  text: {
    textAlign: "center",
    fontSize: 40,
    color: COLORS.font,
  },
  textInput: {
    backgroundColor: COLORS.secondary,
    fontSize: 15,
    height: 50,
    width: "75%",
    borderRadius: 20,
    margin: 10,
    padding: 10,
    color: COLORS.font,
  },
  buttonView: {
    paddingVertical: 2,
    marginTop: 10
  },
  button2: {
    fontWeight: "bold",
    color: COLORS.font,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  button1: {
    fontWeight: "bold",
    color: COLORS.font,
    backgroundColor: COLORS.secondary,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});

export default styles;
