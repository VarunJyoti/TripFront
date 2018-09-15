import React, { Component } from 'react';
import { Link } from 'react-router-native'
import { Icon, Button, Label, Text, Container, Header, Content, Form, Item, Input, Spinner, Grid, Col } from 'native-base';
export default class FormExample extends Component {
  render() {
    return (
        <Container>
       <Form>
          <Item>
            <Input placeholder="Username" />
          </Item>
            <Item>
            <Input placeholder="Password" />
          </Item>
           
          <Button full >
            <Text>Login</Text>
          </Button> 
            <Button iconLeft light full style={{marginTop: 10}}>
            <Icon name='logo-facebook' />
            <Text>Login with facebook</Text>
          </Button>
         <Button iconLeft light full style={{marginTop: 10}}>
            <Icon name='logo-google' />
            <Text>Login with Google</Text>
          </Button>
     
        <Button full success style={{marginTop: 10}}>
             <Link to="/signup">
            <Text>Sign up</Text></Link>
          </Button>
        
          </Form>
        </Container>
    
    );
  }
}