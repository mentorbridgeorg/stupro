import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  card: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    backgroundColor: '#F5FCFF',
    justifyContent: 'flex-start',
    padding: 10,
  },
  text: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: '#000',
  },
  cardsImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  cardTitle: {
    fontFamily:'BauhausStd-Demi',
    textAlign:'center',
    padding:10,
    fontSize: 30,
    marginBottom: 10,
    marginTop:10,
    color: 'coolGray.50',
  },
  cardsDescription: {
    fontFamily:'BauhausStd-Medium',
    fontSize: 18,
    marginTop: 5,
    color: '#666',
    lineHeight: 40,
  },
});

export default styles;
