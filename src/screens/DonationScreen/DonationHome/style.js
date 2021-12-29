import { StyleSheet } from "react-native";
import { COLORS } from "../../../Constants/COLORS";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background_dark,
    paddingBottom: 65,
  },
  text: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
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
    alignSelf: "center",
    backgroundColor: COLORS.background_dark,
    marginTop: 10,
    marginStart: 10,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
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
    backgroundColor: COLORS.background_dark,
    fontSize: 15,
    height: 50,
    width: 350,
    borderRadius: 20,
    margin: 10,
    padding: 10,
    color: COLORS.font,
  },
  card: {
    backgroundColor: COLORS.secondary2,
    borderRadius: 20,
  },
  cardContainer: {
    marginTop: 15,
    fontSize: 15,
    height: 50,
    width: 350,
    margin: 10,
    padding: 10,
  },
});

export default styles;
