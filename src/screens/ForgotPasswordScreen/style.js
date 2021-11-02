import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/COLORS";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: "center",
    backgroundColor: COLORS.background_dark,
  },
  text: {
    textAlign: "center",
    marginTop: 20,
    marginHorizontal: 20,
    fontSize: 14,
    color: COLORS.font_secondary,
  },
  text1: {
    textAlign: "center",
    marginTop: 20,
    marginHorizontal: 20,
    fontSize: 18,
    color: COLORS.font_secondary,
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
    fontWeight: "600",
    fontSize: 40,
    color: COLORS.font,
  },
  textInput: {
    backgroundColor: COLORS.secondary,
    alignSelf: "center",
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
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
  },
});

export default styles;
