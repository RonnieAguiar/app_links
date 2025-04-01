import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F4F5",
    flexDirection: "row",
  },
  title: {
    color: colors.green[300],
    fontSize: 22,
  },
});
