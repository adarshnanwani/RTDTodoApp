import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const todoForm = (props) => {
    return (
        <View style={styles.formContainer}>
            <TextInput
                style={{ width: 300 }}
                value={props.inputValue}
                onChangeText={props.onInputChange}
            />
            <Button
                title="Add"
                onPress={props.onAddPress} />
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default todoForm;