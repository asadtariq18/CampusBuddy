import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS } from "../../Constants/COLORS";

const styles = StyleSheet.create({
  container: {},
  name: {
    alignContent: "center",
    alignSelf: "center",
    marginBottom: 10,
    marginStart: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.font,
  },
  left: {

    marginTop: 3,
    flexDirection: "row",
    marginLeft: 2,
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
    paddingHorizontal: 100,
  },
  notificationText: {
    marginTop: 19.5,
    color: "gray",
  },
});

export default styles;
