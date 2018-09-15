import React, { Component } from 'react';
import { Link } from 'react-router-native'
import { Icon, Button, Label, Text, Container, Header, Content, Form, Item, Input, Spinner, Grid, Col } from 'native-base';
export default class FormExample extends Component {
  render() {
    return (
        <Container>
       <Form>
        <Item>
            <Input placeholder="Name" />
          </Item>
          <Item>
            <Input placeholder="Email" />
          </Item>
        <Item>
            <Input placeholder="Password" />
          </Item>
         <Item>
            <Input placeholder="Phone number" />
          </Item>
        <Item>
            <Input placeholder="" />
          </Item>
           
          <Button full >
            <Text>Sign up</Text>
          </Button> 
          
        
          </Form>
        </Container>
    
    );
  }
}