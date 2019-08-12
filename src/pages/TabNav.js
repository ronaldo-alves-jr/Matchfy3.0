/*import React, { Component } from 'react';
import { Container, Tab, Tabs, TabHeading} from 'native-base';
import { StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
 
import User from './User';
import ChatList from './ChatList';
import Main from './Main';
  
export default class TabNav extends Component {
 
  static navigationOptions = ({ navigation }) => {
    return {
      header:null
 
    }; 
  }; 

  componentDidMount() {
    const { initialPage } = this.props;
    setTimeout(this.tabs.goToPage.bind(this.tabs, initialPage));
}
  
  render() {    
    return ( 
      <Container>
         <StatusBar backgroundColor="purple"/> 
        <Tabs initialPage={1} ref={(c) => { this.tabs = c; return; }} >  
          <Tab heading={ <TabHeading style={{backgroundColor: 'purple'}} ><Icon name="user" size={35}  />
          
          </TabHeading>}>
            <User />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: 'purple'}}><Icon name="home" size={35} />
            
          </TabHeading>}>
           <Main />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: 'purple'}}><Icon name="comments" size={35} />
          
          </TabHeading>}>
           <ChatList />
          </Tab>
        </Tabs> 
     
      </Container>
    );
  }
}*/

import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

import {
  createMaterialTopTabNavigator,
  createAppContainer,
  MaterialTopTabBar,  
} from 'react-navigation';

import ChatList from '../pages/ChatList';
import User from '../pages/User'
import Main from '../pages/Main';
import { hidden } from 'ansi-colors';



function SafeAreaMaterialTopTabBar(props) {

  return (
    <View>
      <MaterialTopTabBar {...props} /> 
    </View>
  );
}

const mainNavigation = createMaterialTopTabNavigator(
  {

    
    
    User: {
      screen: User,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="user" size={29} />  
        ),
      }), 
    }, 

    Main: {
      screen: Main,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="home" size={29} />  
        ),
      }),
    },
  
    ChatList: {
      screen: ChatList,
      navigationOptions: () => ({ 
        tabBarIcon: ({ focused }) => (
          <Icon name="comment" size={25} />   
        ),
      }),
    },
},

 
  {
    initialRouteName: "Main",
    tabBarComponent: SafeAreaMaterialTopTabBar, 
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      tabStyle: {
        backgroundColor: 'purple',   
      },
    },
  },
);

export default createAppContainer(mainNavigation);