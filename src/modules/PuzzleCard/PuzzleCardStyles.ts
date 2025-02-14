import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    width: 350,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
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
   paddingTop:10,
   paddingBottom:20,
   paddingRight:15,
   paddingLeft:20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    padding:10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  optionCard: {
    flex: 1,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    margin: 6,
    borderWidth: 1.5,
 
  },
  
  optionText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    flexWrap: "wrap", 
  },
   correctOption: {
    borderColor: "#5CE65C",
    borderWidth: 2,
    backgroundColor: "#CCFFCC",
  },
  incorrectOption: {
    borderColor: "#EE625A",
    borderWidth: 2,
    backgroundColor: "#FFBABA",
  },

});