/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Button,
  TextInput, Image, TouchableOpacity
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import {Provider} from 'react-redux';
import { loadData,inputNumber,loadNumber } from '../actions';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

// export class Number extends Component {
//   render() {
//     return (
//       <Text>Hello {this.props.name}!</Text>
//     );
//   }
// }

class PageTwo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text1: "",
      password: '',
      text2: "",
    }
  }
//   static navigationOptions = {
//     title: 'Enter your name ',
//   };
componentWillMount() {
        // this.props.loadData();
        this.state.text2 = this.props.loadNumber();
        this.createDatasource(this.props);
    }
    componentDidMount() {
        console.log(this.props);
    }
    componentWillReceiveProps(nextProps) {
        this.createDatasource(nextProps);
    }
    createDatasource({ data }) {
        // const ds = new ListView.DataSource({
        //     rowHasChanged: (r1, r2) => r1 !== r2
        // });
        // this.dataSource = ds.cloneWithRows(data);
        text2 = data;
    }
  render() {
    // const { navigate } = this.props.navigation;
    
    return (
      
      <View style={{ justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row', height: 100, padding: 20, backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 34, color: 'white' }}>Please Enter Your Name</Text>

        </View>
        <View style={{ height: 100, padding: 20, alignItems: 'center', justifyContent: 'center' }}>
          <TextInput
            style={{ height: 60, width: 500, borderColor: 'gray', borderWidth: 1, fontSize: 30 }}
            placeholder='Full name'
            onChangeText={(text1) => this.setState({ text1 })}
            value={this.state.text1}
          />
          <Text>{text2}</Text>
        </View>
        {/*<Text>{text1}</Text>*/}
        <View style={{ height: 100, width: 500, marginLeft: 260 }}>
          {/*<Button
            title='Done'color='skyblue'
            onPress={() =>
              navigate('Profile', { name: 'Chào ' + this.state.text1 })
            }
          />*/}
          
          <Image
            style={{ width: 500, height: 200 }}
            source={{ uri: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t34.0-12/18361716_1470749946322088_930840838_n.jpg?oh=ccf3e4dfdcdd14ad7f96ea7e4031b940&oe=5912CD84' }}
          />

          <TouchableOpacity style={{ height: 100, marginTop: 10, marginLeft: 230 }}>
            <Text style={{ color: 'blue', fontSize: 18 }}>Cancel</Text>
          </TouchableOpacity>

        </View>



      </View>
    
    );
  }
}
const mapStateToProps = (state) => {

    return {
        data: state.LoadReducer
    };
};
export default connect(mapStateToProps, {
    loadData,inputNumber,loadNumber
})(PageTwo);
