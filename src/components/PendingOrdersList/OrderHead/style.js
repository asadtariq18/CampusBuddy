import { StyleSheet } from "react-native";
import { COLORS } from "../../../Constants/COLORS";

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    width: "98%",
    flexDirection: "row",
    marginTop: 3,
    marginHorizontal: 2,
    backgroundColor: COLORS.tertiary,
    borderRadius: 10,
  },
  name: {
    paddingVertical: 2,
    paddingHorizontal: 5,
    fontSize: 20,
    color: COLORS.font,
  },
  rating: {
    paddingHorizontal: 5,
    fontSize: 15,
    color: COLORS.font,
    paddingVertical: 5,
  },
  cafeName: {
    paddingHorizontal: 5,
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.font,
    paddingVertical: 5,
  },
});

export default styles;
