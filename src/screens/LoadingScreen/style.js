import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/COLORS";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background_dark,
    flex: 1,
  },
  image: {
    alignSelf: "center",
    width: 400,
    height: 400,
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
});

export default styles;
