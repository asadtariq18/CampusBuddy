import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/COLORS";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background_dark,
    flex: 1,
  },
  text2: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    color: COLORS.font,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: COLORS.font,
    transform: [{ rotateY: "180deg" }, { rotateZ: "180deg" }],
  },
  textInput: {
    backgroundColor: COLORS.background_dark,
    fontSize: 15,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderTopWidth: 1,
    borderTopColor: COLORS.primary,
    marginHorizontal: 4,
    marginBottom: 8,
    padding: 4,
  },
  buttonView: {
    flexDirection: "row",
  },
  button2: {
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 10,
    marginRight: 2,
  },
  button3: {
    backgroundColor: COLORS.secondary,
    borderRadius: 30,
    marginRight: 2,
  },

});

export default styles;
