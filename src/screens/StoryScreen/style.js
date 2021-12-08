import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/COLORS";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background_dark,
    justifyContent: "center",
    height: "100%",
  },
  top: {
    flexDirection: "row",
    marginStart: 10,
    marginTop: 20,
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-between",
  },
  userName: {
    color: COLORS.font,
    fontWeight: "700",
    fontSize: 18,
  },
  postedTime: {
    marginLeft: 10,
    fontWeight: "700",
    color: COLORS.font_secondary,
    fontSize: 16,
  },
  bottomContainer: {
    justifyContent: 'space-between',
    flexDirection: "row",
    marginBottom: 20,
    marginHorizontal: 10,
  },
  cameraButton: {
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
  },
  messageButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: COLORS.font,
    backgroundColor: COLORS.secondary2,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  messageButton2: {
    alignSelf: "center",
    fontWeight: "bold",
    color: COLORS.font,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  viewsCount: {
    marginStart: 10,
    alignSelf: "center",
    color: COLORS.font,
    fontWeight: "700",
    fontSize: 18,
  },
  textInput: {
    height: "100%",
    color: COLORS.font,
    fontSize: 16,
  },
  textInputContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.primary,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 50,
    height: 50,
  },
});

export default styles;
