import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../Constants/COLORS";

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    flexDirection: "row",
    paddingTop: 5,
  },
  text: {
    color: COLORS.font,
    alignSelf: "center",
  },
});

export default styles;
