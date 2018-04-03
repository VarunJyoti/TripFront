import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {Text} from 'react-native';

class App extends Component {
    /*componentDidMount(){
        this.props.fetchUser();
    }*/
    render(){
        return (
            <Text>
                Trip Gang
            </Text>
        )
    }
}

export default connect(null, actions)(App);