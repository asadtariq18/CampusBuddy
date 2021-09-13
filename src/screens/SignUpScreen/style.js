import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/COLORS";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.background_dark,
  },
  text: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 12,
    color: COLORS.font,
  },
  text2: {
    fontSize: 10,
    color: COLORS.font_secondary,
    paddingHorizontal: 50,
    paddingVertical: 15,
  },
  textInput: {
    backgroundColor: COLORS.secondary,
    fontSize: 15,
    height: 50,
    width: 350,
    borderRadius: 20,
    margin: 10,
    padding: 10,
    color: COLORS.font,
  },
  buttonView: {
    paddingVertical: 2,
    marginTop: 10,
  },
  button2: {
    alignSelf: "center",
    fontWeight: "bold",
    color: COLORS.font,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    paddingHorizontal: 50,
    paddingVertical: 15,
  },
  button1: {
    alignSelf: "center",
    fontWeight: "bold",
    color: COLORS.font,
    backgroundColor: COLORS.secondary,
    borderRadius: 25,
    paddingHorizontal: 50,
    paddingVertical: 15,
  },
  button3: {
    alignSelf: "center",
    fontWeight: "bold",
    color: COLORS.font,
    borderRadius: 25,
    paddingHorizontal: 45,
    paddingVertical: 15,
  },
  image: {
    alignSelf: "center",
    alignItems: "center",
    width: 150,
    height: 150,
    marginTop: "40%",
    marginBottom: 20,
    borderRadius: 20,
  },
  passwordInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    fontSize: 15,
    height: 50,
    width: 350,
    borderRadius: 20,
    margin: 10,
    padding: 10,
    color: COLORS.font,
  },
});

export default styles;
