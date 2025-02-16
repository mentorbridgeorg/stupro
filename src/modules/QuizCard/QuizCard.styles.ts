import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    height: 550,
    padding: 30,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },
  welcomeCard: {
    backgroundColor: '#FFEB3B',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  welcomeCardBox: {
    backgroundColor: '#FFEB3B',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginTop: 20,
  },
  welcomeCardText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
    backgroundColor: '#FFEB3B',
    padding: 20,
    borderRadius: 8,
    marginTop: 4,
    height: 120,
    width: 270,
  },
  optionsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  optionButton: {
    width: '90%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  defaultOption: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  selectedOption: {
    backgroundColor: '#FFEB3B',
  },
  optionLabel: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFEB3B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },

  answersContainer: {
    width: '100%',
    alignItems: 'center',
  },
  answerBox: {
    width: '90%',
    padding: 15,
    backgroundColor: '#FFEB3B',
    borderRadius: 10,
    elevation: 3,
    alignItems: 'center',
  },
  answerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  imageStyle: {
    width: 250,
    height: 170,
    borderRadius: 10,
  },
});

export default styles;
