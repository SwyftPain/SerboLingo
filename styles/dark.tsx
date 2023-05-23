import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#303030",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: "white",
  },
  text: {
    color: "#fff",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  logoutButton: {
    color: "red",
  },
  registerButton: {
    color: "green",
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    width: '90%'
  },
  fabsContainer: {
    marginTop: 20,
    width: '90%'
  },
  fabButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#00B0FF",
    marginBottom: 10,
    width: '90%'
  },
  fabButtonText: {
    marginLeft: 10,
    fontSize: 18,
    color: "white",
    width: '90%'
  },
  line: {
    position: "absolute",
    width: 1,
    height: "100%",
    backgroundColor: "transparent",
    left: "45%",
    zIndex: -1,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#1877F2",
  },
  subjectDetailsContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: "#00B0FF",
    borderRadius: 8,
    width: '90%'
  },
  closeButton: {
    position: "absolute",
    top: 8,
    left: 8,
    padding: 2,
    borderRadius: 20,
    backgroundColor: "#1877F2",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  subjectDetailsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 30,
    color: "white",
    width: '90%'
  },
  subjectDetailsText: {
    fontSize: 16,
    marginBottom: 8,
    color: "white",
    width: '90%'
  },
});

export default styles;
