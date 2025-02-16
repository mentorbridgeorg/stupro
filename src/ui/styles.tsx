import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  cardBackground: {
    flex: 1,
    // alignContent:'center',
    // verticalAlign: 'middle',
    position: 'relative',
    backgroundColor: 'rgba(255, 182, 29, 1)',
    resizeMode: 'stretch',
    width: 'auto',
    height: 'auto',
    // justifyContent: 'center',
  },
  card: {
    // position: 'relative',
    flex: 1,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    backgroundColor: 'rgba(250, 232, 163, 0.9)',
    justifyContent: 'flex-start',
    // padding: 10,
    // marginTop: 10,
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: '#000',
  },
  cardsImage: {
    width: '100%',
    height: 250,
    borderRadius: 20,
    // borderTopEndRadius: 20,
    // borderTopStartRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginBottom: 20,
  },
  cardTitle: {
    fontFamily: 'BauhausStd-Demi',
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    marginBottom: 10,
    marginTop: 10,
    color: 'coolGray.50',
  },
  cardsDescription: {
    fontFamily: 'BauhausStd-Medium',
    fontSize: 18,
    // marginTop: 10,
    // marginBottom: 10,
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
    color: '#666',
    lineHeight: 25,
    top: 30,
    padding: 5,
    // position: 'absolute',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingBottom: 5,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  player: {
    alignSelf: 'stretch',
    marginVertical: 20,
    borderRadius: 20,
  },
  coverTitle: {
    position: 'absolute',
    // backgroundColor: 'rgba(256,256,256,0.7)',
    backgroundColor: 'rgba(255, 237, 199, 0.7)',
    // backgroundOpacity: 0.5,
    justifyContent: 'center',
    fontFamily: 'BauhausStd-Demi',
    fontSize: 30,
    flex: 1,
    width: '100%',
    height: 125,
    bottom: 0,
    // left: 125,
    textAlign: 'center',
    verticalAlign: 'middle',
    borderRadius: 20,
    // margin: 'auto',
  },
  fullCardsImage: {
    position: 'relative',
    flex: 1,
    borderRadius: 20,
    // filter: 'blur(1px)',
  },
  textContent: {
    fontFamily: 'BauhausStd-DemiBold',
    lineHeight: 20,
    letterSpacing: 0.5,
  },
});

export default styles;
