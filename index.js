/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import reduxThunk from 'redux-thunk';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './src/components/index';
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

export default class TripFront extends Component {
  render() {
    return (
        <Provider store={store}>
            <App/>
        </Provider>

    );
  }
}

AppRegistry.registerComponent('TripFront', () => TripFront);
