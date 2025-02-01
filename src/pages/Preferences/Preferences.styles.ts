import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    gradientBackground: {
      flex: 1,
    },
    container: {
      flex: 1,
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'center',
      marginBottom: 20,
      marginTop: 20,
    },
    scrollContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    defaultButton: {
      borderRadius: 20,
      margin: 5,
      overflow: 'hidden',
    },
    selectedButton: {
      borderWidth: 2,
      borderColor: '#FFD700',
    },
    buttonGradient: {
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 15,
    },
    defaultButtonText: {
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    nextButton: {
        backgroundColor: 'white',
        paddingVertical:10,
        borderRadius:30,
        width:100,
    },
    nextButtonText: {
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    limitMessage: {
      textAlign: 'center',
      marginBottom: 15,
      color: 'black',
      fontSize: 18,
    },
  });
  
