import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    padding: 10,
  },
  main_title: {
    textAlign: 'center',
    fontSize: 40,
    marginTop: 10,
    color: 'purple',
    fontWeight: 'bold',
  },
  input: {
    margin: 5,
    borderWidth: 0,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#ddd'
  },

  // flatlist
  row: {
    flex: 1,
    justifyContent: "space-around",
    marginBottom: 20,
  },

  // Card container
  card_container: {
    backgroundColor: '#ddd',
    margin: 5,
    padding: 10,
    // width: Dimensions.get('window').width / 2 - 20,
    borderRadius: 5,
    flex: 1
  },
  image: {
    height: Dimensions.get('window').height / 4 - 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  inner_container: {
    flex: 1,
    justifyContent: "space-between",
  },
  card_title: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card_price: {},
  inStock: {
    color: 'red',
    fontWeight: 'bold',
  },

});
