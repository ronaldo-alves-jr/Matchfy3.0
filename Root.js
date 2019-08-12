import { createAppContainer, createStackNavigator } from "react-navigation";

import LoginScreen from './src/pages/Login';
import TabNavScreen from './src/pages/TabNav';
import UserScreen from './src/pages/User';
import ChatListScreen from './src/pages/ChatList';
import MainScreen from './src/pages/Main';
import ConfigScreen from './src/pages/Config';
import EditScreen from './src/pages/Edit';
 
const Stack = createAppContainer(
  createStackNavigator({
    Login: LoginScreen,

    TabNav: {
      screen: TabNavScreen,
      navigationOptions: {
        header: null,
      },
    },
      
    Main: MainScreen,
    User: UserScreen,
    ChatList: ChatListScreen, 
    Config: ConfigScreen,
    Edit: EditScreen,
    
    

  })
);

export default Stack;
