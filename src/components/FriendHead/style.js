import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/COLORS";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    marginBottom: 2,
    borderRadius: 10,
    marginHorizontal: 2,
    backgroundColor: COLORS.secondary2,
  },
  name: {
    fontWeight: "bold",
    color: COLORS.font,
  },
  left: {
    flexDirection: "row",
  },
  text2: {
    color: COLORS.font_secondary,
  },
});

export default styles;
