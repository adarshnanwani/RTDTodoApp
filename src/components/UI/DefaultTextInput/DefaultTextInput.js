import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const defaultTextInput = (props) => {
    return (
        <TextInput
            {...props}
            onChangeText={props.onChangeText}
            style={[styles.textInput, props.style ? props.style : null, props.valid === true ? styles.validInput : styles.invalidInput]}
            underlineColorAndroid="transparent" />
    );

}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        marginTop: 5,
        marginBottom: 5,
        padding: 10
    },
    validInput: {
        backgroundColor: "#fff",
        borderColor: "#ccc",
    },
    invalidInput: {
        backgroundColor: '#f7bab2',
        borderColor: 'red'
    }
});

export default defaultTextInput;
