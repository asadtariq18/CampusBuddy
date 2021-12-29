import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/COLORS";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    margin: 2,
    borderRadius: 10,
    backgroundColor: COLORS.secondary,
  },
  name: {
    fontWeight: "bold",
    color: COLORS.font,
    fontSize: 10,
  },
  left: {
    flexDirection: "row",
  },
  text2: {
    color: COLORS.font_secondary,
    fontSize: 12,
  },
});

export default styles;
