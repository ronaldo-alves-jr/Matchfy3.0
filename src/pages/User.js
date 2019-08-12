import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import Geolocation from 'react-native-geolocation-service';
import {PermissionsAndroid} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../styles/User';

export default class User extends Component {

  static navigationOptions = {
    title: 'User',
  };

  

  render() {

    async function requestLocationPermission() {
      try {
        const hasLocationPermission = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.Geolocation,
          {
            title: 'Permissão de Acesso a localização',
            message:
              'Por favor, habilite a sua localização',
            buttonNegative: 'Não permitir',
            buttonPositive: 'Permitir',
          },
        );
        if (hasLocationPermission === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the camera');
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
    

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
            <Text style={styles.name}>{name}, 20</Text>
          </View>

          <View style={styles.viewMap}> 
          <Text>MAPA AQUI</Text>
          </View>


      </View>
    )
  }
}

