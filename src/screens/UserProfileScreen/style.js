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
    marginHorizontal: -100,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: COLORS.font,
  },
  text: {
    color: COLORS.font,
    alignSelf: "center",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  image2: {
    flex: 1,
    height: 100,
    width: 100,
  },
  button: {
    alignSelf: "center",
    fontWeight: "bold",
    color: COLORS.font,
    marginTop: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    paddingHorizontal: 50,
    paddingVertical: 15,
  },
  subText: {
    fontSize: 12,
    color: COLORS.font_secondary,
    textTransform: "uppercase",
    fontWeight: "500",
  },
  profileImage: {
    backgroundColor: COLORS.primary,
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 100,
    overflow: "hidden",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statsContainer: {
    backgroundColor: COLORS.background_dark,
    paddingVertical: 10,
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
    borderTopEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
  },
});
export default styles;
