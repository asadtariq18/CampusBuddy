import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/COLORS";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background_dark,
  },
  header: {
    backgroundColor: COLORS.background_dark,
  },
  headerText: {
    marginHorizontal: 100,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: COLORS.font,
  },
  text: {
    color: COLORS.font,
    alignSelf: "center",
  },
  text: {
    color: COLORS.font,
    fontWeight: "bold",
    fontSize: 16,
    marginHorizontal: 10,
    marginTop: 20,
    alignSelf: "center",
  },

  Button1: {
    fontWeight: "bold",
    fontSize: 16,
    color: COLORS.font,
    backgroundColor: COLORS.secondary,
    width: "100%",
    marginBottom: 2,
    borderRadius: 10,
    paddingLeft: 10,
    paddingVertical: 15,
  },
});

export default styles;
