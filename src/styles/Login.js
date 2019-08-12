/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  button: {
    top: 120,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 110,
    paddingRight: 110,
    borderRadius: 50,
    backgroundColor: '#3b91cf',
    alignSelf: 'center',
    margin: 15,
    marginHorizontal: 20,
  },

  text: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 22,
    textAlign: 'center',
  },
  textTitle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 70,
    textAlign: 'center',
    top: -150,
  },
});

export default styles;

