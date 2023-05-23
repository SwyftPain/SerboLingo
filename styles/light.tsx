import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'black'
  },
  text: {
    color: '#000'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5
  },
  logoutButton: {
    color: 'orangered'
  },
  registerButton: {
    color: "forestgreen"
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
    backgroundColor: "#546E7A",
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
    borderColor: "#FF9800",
  },
  subjectDetailsContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: "#546E7A",
    borderRadius: 8,
    width: '90%'
  },
  closeButton: {
    position: "absolute",
    top: 8,
    left: 8,
    padding: 2,
    borderRadius: 20,
    backgroundColor: "#FF9800",
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