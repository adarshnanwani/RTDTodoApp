import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, Platform } from 'react-native';
import DefaultTextInput from '../../components/UI/DefaultTextInput/DefaultTextInput';
import DefaultButton from '../../components/UI/DefaultButton/DefaultButton';
import validate from '../../utility/validation';
import startMainTabs from '../MainTabs/startMainTabs';
import imageBackground from '../../assets/background.png';

class Login extends Component {

    state = {
        viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape',
        controls: {
            email: {
                value: '',
                valid: false,
                validationRules: {
                    isEmail: true
                },
                touched: false
            },
            password: {
                value: '',
                valid: false,
                validationRules: {
                    minLength: 8,
                    maxLength: 20,
                    alphanumeric: true
                },
                touched: false
            },
            confirmPassword: {
                value: '',
                valid: false,
                validationRules: {
                    equalTo: 'password',
                    checkEmpty:true
                },
                touched: false
            }
        }
    };

    loginHandler = () => {
        startMainTabs();
    };

    componentWillMount() {
        Dimensions.addEventListener("change", this.setViewMode);
    }

    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.setViewMode);
    }

    setViewMode = (dims) => {
        this.setState({
            viewMode: dims.window.height > 500 ? 'portrait' : 'landscape'
        });
    }

    updateValue = (val, type) => {
        this.setState(prevState => {
            let connectedValue = '';
            if (type === 'confirmPassword') {
                connectedProp = this.state.controls[type].validationRules.equalTo;
                connectedValue = this.state.controls[connectedProp].value;
            }
            if (type === 'password') {
                connectedValue = val;
            }

            return {
                controls: {
                    ...prevState.controls,
                    confirmPassword: (type === 'password'
                        ? {
                            ...prevState.controls.confirmPassword,
                            value: prevState.controls.confirmPassword.value,
                            valid: validate(prevState.controls.confirmPassword.value, prevState.controls.confirmPassword.validationRules, connectedValue)
                        }
                        : prevState.controls.confirmPassword),
                    [type]: {
                        ...prevState.controls[type],
                        value: val,
                        valid: validate(val, prevState.controls[type].validationRules, connectedValue !== '' ? connectedValue : null),
                        touched: true
                    }
                }
            }
        })
    }

    render() {
        return (
            <ImageBackground source={imageBackground} style={{ flex: 1, width: "100%" }}>
                <View style={styles.loginContainer}>
                    <DefaultButton onPress={() => alert("login")} >
                        <Text>Switch to Login</Text>
                    </DefaultButton>
                    <View style={styles.textInputContainer}>
                        <DefaultTextInput
                            placeholder="Your Email"
                            value={this.state.controls.email.value}
                            valid={this.state.controls.email.touched ? this.state.controls.email.valid : true}
                            onChangeText={(val) => this.updateValue(val, 'email')} />
                        <View
                            style={this.state.viewMode === 'portrait'
                                ? null
                                : styles.landscapePasswordWrapper}>
                            <DefaultTextInput
                                placeholder="Enter Password"
                                value={this.state.controls.password.value}
                                valid={this.state.controls.password.touched ? this.state.controls.password.valid : true}
                                onChangeText={(val) => this.updateValue(val, 'password')}
                                style={this.state.viewMode === 'portrait'
                                    ? styles.portraitPasswordInput
                                    : styles.landscapePasswordInput}
                            />
                            <DefaultTextInput
                                placeholder="Confirm Password"
                                value={this.state.controls.confirmPassword.value}
                                valid={this.state.controls.confirmPassword.touched ? this.state.controls.confirmPassword.valid : true}
                                onChangeText={(val) => this.updateValue(val, 'confirmPassword')}
                                style={this.state.viewMode === 'portrait'
                                    ? styles.portraitPasswordInput
                                    : styles.landscapePasswordInput}
                            />
                        </View>
                    </View>
                    <DefaultButton
                        disabled={!(this.state.controls.email.valid &&
                            this.state.controls.password.valid &&
                            this.state.controls.confirmPassword.valid)}
                        onPress={this.state.controls.email.valid &&
                            this.state.controls.password.valid &&
                            this.state.controls.confirmPassword.valid ?
                            this.loginHandler : null}
                    >
                        <Text>Submit</Text>
                    </DefaultButton>

                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputContainer: {
        width: "80%"
    },
    landscapePasswordWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    landscapePasswordInput: { width: "48%" },
    portraitPasswordInput: { width: "100%" }
})

export default Login;