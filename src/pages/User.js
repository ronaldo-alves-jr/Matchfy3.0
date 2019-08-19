import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/User';

export default class User extends Component {

  static navigationOptions = {
    title: 'User',
  };
 

  render() {

    const { navigation } = this.props;
    const name = navigation.getParam("name");
    const picture = navigation.getParam("picture");

    return (
      <View style={styles.container}>

        <View style={styles.viewComponents}>
          
        
          <TouchableOpacity style={styles.config} onPress={() => navigation.navigate('Config')} >
            <Icon name="gear" size={60} color="blue"/> 
          </TouchableOpacity>

          <Image style={styles.picture} source={{ uri: picture }} />

          <TouchableOpacity style={styles.edit} onPress={() => navigation.navigate('Edit')}>
            <Icon name="edit" size={60} color="blue"/> 
          </TouchableOpacity>
          </View>

          <View style={styles.viewName}> 
            <Text style={styles.name} numberOfLines={1}>{name} </Text> 
          </View>
 
          <View style={styles.viewMap}> 
            <Text>Mapa Aqui</Text>
          </View>


      </View>
    )
  }
}

