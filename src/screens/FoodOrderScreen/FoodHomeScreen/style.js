import { StyleSheet } from "react-native";
import { COLORS } from "../../../Constants/COLORS";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: COLORS.primary,
    height: "100%",
  },
  headerText: {
    color: COLORS.font,
    fontSize: 25,
    marginHorizontal: 10,
    marginVertical: 15,
    alignSelf: "center",
    textAlign: "center",
  },
  text: {
    color: COLORS.font_secondary,
    fontSize: 16,
    marginHorizontal: 10,
    marginTop: 20,
    alignSelf: "center",
    textAlign: "center",
  },
  Header: {
    alignSelf: "flex-start",
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.font,
    backgroundColor: COLORS.tertiary,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    paddingStart: 10,
    paddingEnd: 30,
    paddingVertical: 15,
    marginTop: 20,
  },
  Button2: {
    fontSize: 15,
    color: COLORS.font,
    backgroundColor: COLORS.tertiary,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    marginEnd: 5,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    width: 380,
    height: 380,
    marginTop: 60,
    marginBottom: 40,
    borderRadius: 200,
    paddingHorizontal: 5,
  },

  image2: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    marginBottom: 5,
    borderRadius: 40,
  },
});

export default styles;