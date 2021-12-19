import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/COLORS";

const styles = StyleSheet.create({
  postView: {
    borderWidth: 1,
    borderColor: COLORS.secondary2,
    flex: 1,
    height: 93,
    width: 93,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    margin: 1,
  },
  image: {
    borderWidth: 1,
    borderColor: COLORS.secondary2,
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    height: 93,
    width: 93,
    borderRadius: 10,
    margin: 1,
  },
  activityIndicator: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default styles;
