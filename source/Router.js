import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import {connect} from 'react-redux';
import TodoList from './components/TodoList';
import PageTwo from './components/PageTwo';
import {
  StackNavigator,
} from 'react-navigation';
const RouterWithRedux = connect()(Router);
const Test = StackNavigator({
  Telephone: {screen: TodoList},
  PageTwo: {screen: PageTwo},
  
});
export default class RouterComponent extends Component{
    render(){
        return(
            {/*<RouterWithRedux>
                <Scene key="todoList" component={TodoList} title="To do List"
                navigationBarStyle={styles.navigationBarStyle}
                sceneStyle={styles.sceneStyle}></Scene>
                <Scene key="pageTwo" component={PageTwo} title="Page Two Test"
                navigationBarStyle={styles.navigationBarStyle}
                sceneStyle={styles.sceneStyle}></Scene>
            </RouterWithRedux>*/}
        );
    }
}
const styles = {
    navigationBarStyle: {
        backgroundColor: 'skyblue'
    },
    sceneStyle: {
        paddingTop: 70,
    }
}