import React , {Component} from 'react';
import {View,Text} from 'react-native';
import {Provider} from 'react-redux';
import Router from './Router';
import store from './store';
import TodoList from './components/TodoList';
import PageTwo from './components/PageTwo';
import {
  TabNavigator,
} from 'react-navigation';

const Test = TabNavigator({
  Telephone: {screen: TodoList},
  PageTwo: {screen: PageTwo},
  
});
export default class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <Test/>
            </Provider>
        );
    }
}