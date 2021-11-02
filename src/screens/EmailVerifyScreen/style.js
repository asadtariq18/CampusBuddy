import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/COLORS";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.background_dark,
  },
  text1: {
    textAlign: "center",
    marginTop: 100,
    marginBottom: 20,
    marginHorizontal: 20,
    fontSize: 20,
    color: COLORS.font_secondary,
  },
  text2: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.font,
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
  buttonView: {
    paddingVertical: 2,
    marginTop: 10,
  },
  button1: {
    alignSelf: "center",
    fontWeight: "bold",
    color: COLORS.font,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    paddingHorizontal: 50,
    paddingVertical: 15,
  },
  button2: {
    alignSelf: "center",
    fontWeight: "bold",
    color: COLORS.font,
    backgroundColor: COLORS.secondary,
    borderRadius: 25,
    paddingHorizontal: 50,
    paddingVertical: 15,
  },
  image: {
    alignSelf: "center",
    alignItems: "center",
    width: 170,
    height: 154,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
  },
});

export default styles;
