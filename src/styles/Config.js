import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({

  list:{
    marginTop: hp('5%'),   
    flex: 1, 
  },

  listItem:{
    paddingBottom: hp('1%'),
  },

  text:{
    fontSize: hp('4%'), 
    fontWeight: "bold",
  },

  textNote:{
    fontSize: hp('2,5%'), 
  },

});

export default styles;

