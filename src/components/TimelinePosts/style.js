import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/COLORS";

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    flexDirection: "row",
    paddingTop: 5,
    marginHorizontal: 7.8,
    paddingBottom: 30,
  },
  text: {
    color: COLORS.font,
    alignSelf: "center",
  },
});

export default styles;
