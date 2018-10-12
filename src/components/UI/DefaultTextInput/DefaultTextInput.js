import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

class DefaultTextInput extends Component {
    render() {
        return (
            <TextInput
                style={styles.textInput}
                {...this.props}
                underlineColorAndroid="transparent" />
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        backgroundColor: "#fff",
        borderColor: "#ccc",
        marginTop: 5,
        marginBottom: 5,
        padding: 10
    }
});

export default DefaultTextInput;
