import { StyleSheet } from "react-native";
import { COLORS } from "../../../Constants/COLORS";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: COLORS.primary,
    height: "100%",
  },
  headerText: {
    color: COLORS.food,
    fontWeight: "bold",
    fontSize: 30,
    marginHorizontal: 10,
    marginTop: 20,
    alignSelf: "center",
    textAlign: "center",
  },
  text: {
    color: COLORS.font_secondary,
    fontSize: 16,
    marginHorizontal: 10,
    marginTop: 20,
    alignSelf: "center",
    textAlign: "center",
  },
  Button2: {
    fontSize: 20,
    color: COLORS.font,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 20,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    height: 350,
    marginTop: 60,
    marginBottom: 40,
    borderRadius: 200,
    paddingHorizontal: 5,
  },
  
  image2: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    marginBottom: 5,
    borderRadius: 40,
  },
});

export default styles;
