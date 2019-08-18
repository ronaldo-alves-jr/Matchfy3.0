import React, { Component } from 'react';

import { Container, Header, Content, List, Icon, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

import styles from '../assets/ChatList';

export default class ChatList extends Component {
  render() {
    const { navigation } = this.props;
    return (
<<<<<<< HEAD
      <Container>
        <Content>
          <List>
            <ListItem thumbnail>
            
              <Left>
                <Thumbnail square source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
              
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              
              </Body>
              <Right>
              <Button transparent color="black">
              <Icon active name="arrow-forward"  onPress={() => navigation.navigate('Config')} />
              </Button>    
              </Right>
            </ListItem>
          </List>

        </Content>
        
      </Container>
    );

  }
}