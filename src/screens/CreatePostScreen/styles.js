import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/COLORS";
import { Dimensions } from "react-native";

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
  imageView: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: COLORS.secondary,
    marginHorizontal: 15,
    marginTop: 5,
    padding: 10,
  },
  image: {
    width: Dimensions.get("window").width - 50,
    height: Dimensions.get("window").width - 50,
    alignSelf: "center",
    borderRadius: 20,
  },
  h1text: {
    color: COLORS.font,
    fontWeight: "bold",
    fontSize: 20,
  },

  cardView: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: COLORS.secondary,
    marginHorizontal: 15,
    marginTop: 5,
    padding: 10,
  },
  textInput: {
    backgroundColor: COLORS.secondary,
    fontSize: 15,
    minHeight: 50,
    borderRadius: 30,
    marginHorizontal: 15,
    marginVertical: 10,
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
    marginTop: 5,
    color: COLORS.font,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  button: {
    fontWeight: "bold",
    marginLeft: 5,
    marginTop: 5,
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
    marginHorizontal: 40,
    marginTop: 20,
    color: COLORS.font,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    paddingVertical: 10,
  },
  discardButton: {
    alignSelf: "center",
    fontWeight: "bold",
    margin: 50,
    marginTop: 10,
    color: COLORS.font,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default styles;
