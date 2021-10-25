import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    height: Dimensions.get('window').height,
  },
  main_title: {
    textAlign: 'center',
    fontSize: 25,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
