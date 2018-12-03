import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableHighlight, Alert} from 'react-native';
import { Header } from '../sections/Header.js';
import {StackNavigator} from 'react-navigation'


export class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: 'Enter Message',
            name: 'Enter Name',
            email: 'Enter your email address'
        }
    }

    clearFields = () => this.setState({name: '', msg: '', email: ''});

    sendMessage = () => {
        Alert.alert(this.state.name, this.state.msg);
        this.props.navigation.goBack();
    }

    render () {
        return (
            <View style={styles.container}>
              <Header message='Press to Login' />
              <Text style={{flex: 8}}>this is contace form</Text>
              <Text style={{flex:6}}>More Contact are there</Text>
            </View>
       )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})