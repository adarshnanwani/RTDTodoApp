import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Platform, TouchableNativeFeedback } from 'react-native';

const defaultButton = (props) => {
    const content = (
        <View style={[styles.defaultButton, props.disabled ? styles.disabledButton : styles.enabledButton, props.style ? props.style : null]}>
            <Text style={props.disabled ? styles.disabledButtonText : styles.buttonText}>{props.children}</Text>
        </View>
    );

    if (props.disabled) {
        return content;
    }
    if (Platform.OS === 'android') {
        return (
            <TouchableNativeFeedback onPress={props.onPress}>
                {content}
            </TouchableNativeFeedback>
        );
    }
    else {
        return (
            <TouchableOpacity onPress={props.onPress}>
                {content}
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    defaultButton: {
        padding: 8,
        borderRadius: 3,
        marginTop: 4,
        marginBottom: 4
    },
    enabledButton: {
        backgroundColor: 'orange',
    },
    disabledButton: {
        backgroundColor: '#eee',
        borderColor: '#aaa'
    },
    buttonText: {
        color: "#fff"
    },
    disabledButtonText: {
        color: '#aaa'
    }
});

export default defaultButton;
