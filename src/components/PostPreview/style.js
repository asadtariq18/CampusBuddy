import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/COLORS";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
    padding: 15,
    marginHorizontal: 3,
  },
  name: {
    textAlign: "center",
    fontSize: 12,
    marginBottom: 5,
    color: COLORS.font,
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
});

export default styles;
