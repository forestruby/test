import React, { Component } from 'react';
import { View, Text, ListView,TouchableOpacity,TextInput } from 'react-native';
import { connect } from 'react-redux';
import { loadData,inputNumber } from '../actions';
import { Actions} from 'react-native-router-flux';
import {
  StackNavigator,
} from 'react-navigation';

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            test:"",
        }
    }
    
    
     
   
    
    render() {
        const { navigate } = this.props.navigation;
        const {test} = this.state;
        const {inputNumber} = this.props;
        return (
            <View>
                <Text>Welcome to TodoList</Text>
                <TextInput style={{height:50,width:200}}
                onChangeText={(test) => this.setState({test})}
                value={this.state.test}/>
                {/*{inputNumber(this.state.test)}*/}
                {/*<ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={(item) => <Text>{item.tencasi}</Text>}
                />*/}
                <TouchableOpacity style={{ height: 60, width: 500, borderRadius: 2, backgroundColor: '#2980b9' }}
                onPress={() => navigate('PageTwo')}>
                    <Text style={{ color: '#ecf0f1', fontSize: 28, textAlign: 'center', marginTop: 10 }}>Done</Text>
                </TouchableOpacity>
            </View>
            
        );
    }
}
const mapStateToProps = (state) => {

    return {
        InputNumber: state.InputListReducer
    };
};
export default connect(mapStateToProps, {
    loadData,inputNumber
})(TodoList);