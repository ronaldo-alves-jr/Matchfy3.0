import React from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native'; 

import {List, ListItem, Container, Content} from 'native-base';
class About extends React.Component { 
   buttonClickListener = () => {
    alert("Deseja realmente deletar sua conta?");
  };
  // TODO: implement your navigationOptions
  _navigateToScreen = () => {
    const { navigation } = this.props
    navigation.navigate('Your-Screen-Name');
  }
  render() {
    return (
      <Container>
          <Content>
            <View style={{flex:1, flexDirection: "column", backgroundColor:'white'}}>
                <View style ={{flex: 1, backgroundColor:'white'}}>
                <Text style = {{textAlign: 'center', fontSize:60}}>MatchFy</Text>
                <Text style = {{fontSize:20, marginLeft:250}}>Logo</Text>
                <List>
                  <ListItem>
                    <Text style = {{color:'black'}}>{'Versão atual\n'}<Text style = {{color:'gray'}}>{'1.0.0'}</Text></Text> 
                  </ListItem>
                  <ListItem>
                    <Text style = {{color:'black'}}>{'Criado por\n'}<Text style = {{color:'gray'}}>{'IFSULDEMINAS e cia'}</Text></Text>
                  </ListItem>
                  <ListItem>
                    <Text style = {{color:'black'}}>{'Última atualização\n'}<Text style = {{color:'gray'}}>18/08/2019</Text></Text>
                  </ListItem>
                   <ListItem>
                     <Text style = {{color:'black'}}>{'Seu ID\n'}<Text style = {{color:'gray'}}>'XXXXX-XX'</Text></Text>
                   </ListItem>
                  </List>
          </View>
             <View style ={{flex: 1, backgroundColor:'white'}}>
                   <TouchableOpacity
                   style = {{alignItems: 'center', backgroundColor:'#fc1808', padding:10, borderRadius:100, marginTop:60, width : 150, marginLeft: 105}}
                   onPress={this.buttonClickListener}
                 >
                   <Text style = {{color:'white'}}> Deletar conta </Text>
                 </TouchableOpacity>  
              </View>
      </View>
        </Content>
    </Container>
    )
  }
}

export default About