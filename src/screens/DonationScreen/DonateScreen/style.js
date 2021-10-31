import { StyleSheet } from "react-native";
import { COLORS } from "../../../Constants/COLORS";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: "center",
    paddingTop: 30,
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
  header: {
    alignContent: "center",
    alignSelf: "flex-start",
    backgroundColor: COLORS.background_dark,
    marginTop: 20,
    marginBottom: 10,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 40,
    color: COLORS.font,
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
  textInput2: {
    backgroundColor: COLORS.secondary,
    fontSize: 15,
    height: 100,
    width: 350,
    borderRadius: 20,
    margin: 10,
    padding: 10,
    textAlignVertical: 'top',
    color: COLORS.font,
  },
  buttonView: {
    paddingVertical: 2,
    marginTop: 10,
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
  button2: {
    alignSelf: "center",
    fontWeight: "bold",
    color: COLORS.font,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    paddingHorizontal: 50,
    paddingVertical: 15,
  },

  image: {
    width: 200,
    height: 200,
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
