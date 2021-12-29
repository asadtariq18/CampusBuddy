import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../Constants/COLORS";

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height / 4,
    width: Dimensions.get("window").height / 7,
    paddingVertical: 4,
    marginVertical: 5,
    borderRadius: 10,
    marginBottom: 5,
    marginStart: 10,
    paddingHorizontal: 10,
    backgroundColor: COLORS.secondary2,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontWeight: "bold",
    color: COLORS.font,
  },
  image: {
    height: Dimensions.get("window").height / 8,
    width: Dimensions.get("window").height / 8,
    borderRadius: 10,
  },
  left: {},
  text2: {
    color: COLORS.font_secondary,
  },
  button: {
    alignSelf: "center",
    fontWeight: "bold",
    color: COLORS.font,
    marginTop: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  button2: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 10,
    color: COLORS.font,
    marginTop: 10,
    backgroundColor: COLORS.tertiary,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default styles;
