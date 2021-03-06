import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3b3b3b",
    justifyContent: "center",
    padding: 40,
  },
  banner: {
    width: "100%",
    resizeMode: "contain",
  },
  title: {
    fontFamily: "Roboto_400Regular",
    color: "#fff",
    fontSize: 30,
    lineHeight: 30,
    marginTop: 80,
  },
  titleBold: {
    fontFamily: "Roboto_700Bold",
  },
  searchForm: {
    marginBottom: 24,
  },
  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputBlock: {
    width: "100%",
  },
  input: {
    height: 54,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: "#000",
    height: 56,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontFamily: "Roboto_700Bold",
    fontSize: 16,
  },
});
export default styles;
