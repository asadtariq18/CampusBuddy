import { COLORS } from "../../Constants/COLORS";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  messageBox: {
    borderRadius: 20,
    padding: 10,
  },
  name: {
    color: COLORS.font,
    fontWeight: "bold",
    marginBottom: 5,
  },
  message: {
    color: COLORS.font,
  },
  time: {
    alignSelf: "flex-end",
    color: COLORS.font,
    fontSize:12
  },
  timeView:{
    alignSelf: 'flex-end',
    paddingHorizontal: 5
  }
});

export default styles;
