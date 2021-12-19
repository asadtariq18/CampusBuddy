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
    position: "absolute",
    left: Dimensions.get("window").width / 2.33,
    right: 0,
    top: Dimensions.get("window").height / 4,
    bottom: 0,
  },
});

export default styles;
