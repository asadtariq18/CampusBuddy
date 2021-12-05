import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/COLORS";

const styles = StyleSheet.create({
  container: {
    width: 350,
    borderRadius: 10,
    backgroundColor: COLORS.secondary,
    flexDirection: "row",
    marginBottom: 10,
    padding: 5,
  },
  name: {
    fontWeight: "bold",
    color: COLORS.font,
  },
  commentText: {
    color: COLORS.font_secondary,
  },
  timestamp: {
    color: COLORS.font_secondary,
    textAlign: 'right',
    fontSize: 12,
  },
  content: {
    paddingEnd: 40,
  },
});

export default styles;
