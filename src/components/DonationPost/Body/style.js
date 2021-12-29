import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../Constants/COLORS";


const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width - 20,
    height: Dimensions.get("window").width - 20,
    alignSelf: "center",
    borderRadius: 10,
  },
  view: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: COLORS.tertiary,
    borderRadius: 10,
    padding: 10,
  },
  right: {
    flexDirection: "row",
  },
  activityIndicator: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  text: {
    color: COLORS.font,
  },
  button: {
    color: COLORS.font,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 5,
    borderRadius: 10,
    paddingVertical: 2,
  },
  text1: {
    color: COLORS.font,
    fontSize: 30,
  },
});

export default styles;
