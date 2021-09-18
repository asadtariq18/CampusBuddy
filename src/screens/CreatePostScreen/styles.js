import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/COLORS";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background_dark,
    flex: 1,
  },
  header: {
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: COLORS.background_dark,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: COLORS.font,
  },

  h1text: {
    color: COLORS.font,
    fontWeight: "bold",
    fontSize: 20,
  },
  h2text: {
    color: COLORS.font,
    fontWeight: "bold",
    fontSize: 20,
    marginHorizontal: 15,
    marginTop: 5,
  },
  cardView: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 30,
    backgroundColor: COLORS.secondary,
    margin: 20,
    padding: 10,
    height: 80,
  },
  textInput: {
    backgroundColor: COLORS.secondary,
    fontSize: 15,
    height: 80,
    borderRadius: 30,
    margin: 20,
    paddingHorizontal: 20,
    color: COLORS.font,
  },
  buttonView: {
    paddingVertical: 2,
    marginTop: 1,
    marginBottom: 5,
  },
  button_pressed: {
    fontWeight: "bold",
    marginLeft: 5,
    marginTop: 2,
    color: COLORS.font,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
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
  postButton: {
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    marginHorizontal: 50,
    marginVertical: 5,
    color: COLORS.font,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    paddingVertical: 15,
  },
  discardButton: {
    alignSelf: "center",
    fontWeight: "bold",
    margin: 50,
    marginTop: 10,
    color: COLORS.font,
    backgroundColor: COLORS.tertiary,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default styles;
