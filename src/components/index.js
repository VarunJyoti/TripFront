
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NativeRouter, Route, Link, Switch } from 'react-router-native'
import Login from '../components/Login/Login';
import Signup from '../components/Login/Signup';


const App = () => (
  <NativeRouter>
    <Switch>
       <Route exact path="/" component={Login}/>
       <Route exact path="/signup" component={Signup}/>
    </Switch>
  </NativeRouter>
)

export default App