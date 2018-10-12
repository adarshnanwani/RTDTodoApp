import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import DefautTextInput from '../../components/UI/DefaultTextInput/DefaultTextInput';
import startMainTabs from '../MainTabs/startMainTabs';

class Login extends Component {

    loginHandler = ()=>{
        startMainTabs();
    };

    render() {
        return (
            <View style={styles.loginContainer}>
                <Button title="Go to Login" onPress={this.loginHandler} />
                <View style={styles.textInputContainer}>
                    <DefautTextInput placeholder="Your Email" />
                    <DefautTextInput placeholder="Enter Password"  />
                    <DefautTextInput placeholder="Confirm Password" />
                </View>
                <Button title="Submit" onPress={() => alert("submit")} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputContainer:{
        width:"80%"
    }
})

export default Login;