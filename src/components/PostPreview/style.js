import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/COLORS";

const styles = StyleSheet.create({
  postView: {
    flex: 1,
    borderRadius: 10,
  },
  image: {
    borderWidth: 0.7,
    borderColor: COLORS.primary,
    flex: 1,
    height: 93,
    width: 93,
    borderRadius: 10,
    margin: 1,
  },
});

export default styles;
