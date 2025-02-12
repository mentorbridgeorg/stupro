import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    width: 370,
    backgroundColor: "white",
    borderRadius: 40,
    borderWidth: 3,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    overflow: "hidden",
  },
  top: {
  
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 35,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  question: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    color: "black",
  },
  questionImage: {
    width: 50,
    height:90,
  
  },
  optionsGrid: {
    padding: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  optionCard: {
    flex: 1,
    backgroundColor: "#E0E0E0",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    margin: 5,
    borderWidth: 2,
  

  },
  optionText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
  correctOption: {
    borderColor: "#8EF789",
    borderWidth: 2,
    backgroundColor: "#",
  },
  incorrectOption: {
    borderColor: "#EE625A",
    borderWidth: 2,
    backgroundColor: "#FFBABA",
  },
});
