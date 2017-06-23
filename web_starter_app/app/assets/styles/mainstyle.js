import {
  StyleSheet,
  Dimensions,
} from 'react-native';

module.exports = StyleSheet.create({
  container1: {
    alignItems: 'stretch',
    flex: 1,
  },
  body: {
    flex: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  primaryButton: {
    margin: 10,
    padding: 15,
    alignSelf: 'center',
    backgroundColor: 'blue',
    width: 150,
  },
  container2: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height - 50,
    width: Dimensions.get('window').width,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
  },
  centerB: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
