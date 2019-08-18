import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/AntDesign'; 

import { Container, Header, Content, Button, Thumbnail, List, ListItem, Text, Left, Body, Right, Switch, Separator } from 'native-base';
export default class Config extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        
        <Content>
          <List>
            <ListItem avatar >
           
              <Left> 
                <Icon name="user" size={45} color="black" onPress={() => navigation.navigate('Config')} />
              </Left>
              <Body>
              
                <Text>Perfil</Text>
                <Text note>Altere a foto de perfil, descrição, informações e faça upload de novas fotos.</Text>
               
              </Body>
              
            </ListItem>
            
            <ListItem avatar >
              <Left>
              <Button transparent onPress={() => navigation.navigate('ChatList')}>
                <Icon active name="heart" size={45} />
               </Button>
              </Left>
              <Body>
                  <Text>Interesses</Text>
                <Text note>Defina seu gênero preferido, idade e distância máxima.</Text>
              </Body>
              
            </ListItem>

            <ListItem avatar >
              <Left>
                <Icon name="upload" size={45} />
              </Left>
              <Body>
                <Text>Adicionais</Text>
                <Text note>Faça login com Facebook e/ou Instagram para exportar suas melhores fotos.</Text>
              </Body>
            </ListItem>


            <Separator/>
            <ListItem avatar >
              <Left>
                <Icon name="book" size={45} />
              </Left>
              <Body>
                <Text>Política</Text>
                <Text note>Veja nossa política de privacidade e termos e condições de uso.</Text>
              </Body>
            </ListItem>
            
            <ListItem avatar >
              <Left>
                <Icon active name="question" size={45} />
              </Left>
              <Body>
                <Text>Sobre</Text>
                <Text note>Declarações do app.</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}