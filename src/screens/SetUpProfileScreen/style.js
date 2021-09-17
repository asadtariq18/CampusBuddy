import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/COLORS";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: COLORS.background_dark,
    height: "100%",
  },
  header: {
    alignContent: "center",
    alignSelf: "flex-start",
    backgroundColor: COLORS.background_dark,
    marginTop: 20,
    marginBottom: 30,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 40,
    color: COLORS.font,
  },
  text: {
    color: COLORS.font,
    fontWeight: "bold",
    fontSize: 20,
    marginHorizontal: 10,
    marginTop: 20,
    alignSelf: "center",
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
  button: {
    fontWeight: "bold",
    marginLeft: 5,
    marginTop: 2,
    color: COLORS.font,
    backgroundColor: COLORS.secondary,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  Button1: {
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 5,
    marginTop: 2,
    color: COLORS.font,
    backgroundColor: COLORS.secondary,
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 20,
  },
  Button2: {
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 5,
    marginTop: 2,
    color: COLORS.font,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 20,
  },
  avatar: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    backgroundColor: COLORS.secondary,
    marginVertical: 10,
  },
});

export default styles;
