import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/COLORS";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background_dark,
    flex: 1,
  },
  header: {
    alignItems: "center",
    backgroundColor: COLORS.background_dark,
  },
  headerText: {
    marginEnd: 110,
    fontWeight: "bold",
    fontSize: 20,
    color: COLORS.font,
  },

});

export default styles;
