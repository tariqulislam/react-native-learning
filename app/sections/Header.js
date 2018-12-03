import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false}
    }

    toggleUser = () => {
        this.setState(previousState => {
            return {isLoggedIn: !previousState.isLoggedIn}
        });
    }

    render () { 
        let display = this.state.isLoggedIn ? 'Simple User' : this.props.message;
        return (
            <View style={styles.headerStyle}>
             <Image
             source={ require('./img/logo2.png')}
             style={styles.logoStyle} />
            <Text style={styles.headerText} onPress={this.toggleUser}>{display}</Text>
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    headerText: {
        textAlign: 'right',
        color: '#fff',
        fontSize: 20,
        flex: 1
    },
    headerStyle: {
        paddingTop: 30,
        paddingRight: 10,
        backgroundColor: '#35605a',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#000'
    },
    logoStyle: {
        flex:1,
        width: undefined,
        height: undefined
    }
})