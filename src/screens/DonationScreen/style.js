import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/COLORS";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background_dark,
    flex: 1,
  },
  header: {
    alignItems: "center",
    backgroundColor: COLORS.background_dark,
  },
  headerText: {
    marginEnd: 110,
    fontWeight: "bold",
    fontSize: 20,
    color: COLORS.font,
  },
image:{
  alignSelf: "center",
  width: 200,
  height: 200,
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
    margin: 15,
    padding: 10,
    height: 100,
  },
  textInput: {
    backgroundColor: COLORS.secondary,
    fontSize: 15,
    height: 80,
    borderRadius: 30,
    margin: 15,
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
    fontSize: 30,
    marginLeft: 5,
    marginTop: 2,
    color: COLORS.font,

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
