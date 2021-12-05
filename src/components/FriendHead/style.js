import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/COLORS";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    marginBottom: 5,
    borderRadius: 20,
    marginHorizontal: 2,
    backgroundColor: COLORS.secondary2,
  },
  name: {
    fontWeight: "bold",
    color: COLORS.font,
    fontSize: 20,
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
