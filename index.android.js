/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './source/app.js';
export default class LearnRedux extends Component {
  render() {
    return (
      <App />
    );
  }
}



AppRegistry.registerComponent('LearnRedux', () => LearnRedux);
