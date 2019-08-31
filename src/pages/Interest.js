import React from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import ReactNativeSettingsPage, { 
  NavigateRow,
  SwitchRow, 
  SectionRow
} from 'react-native-settings-page';

import Slider from '@react-native-community/slider';

import {List, ListItem, Container, Content} from 'native-base';

export default class Interest extends React.Component {
  render() {
    return (
      <View>
          <Slider
    style={{width: 200, height: 40}}
    minimumValue={0}
    maximumValue={1}
    minimumTrackTintColor="#FFFFFF"
    maximumTrackTintColor="#000000"
  />
      </View>
    )
  }
}
