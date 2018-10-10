import React from 'react';
import { Modal, Button, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const todoDetail = props => {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.selectedTodo !== null}
            onRequestClose={props.onCloseModal}>
            <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                {props.selectedTodo ? <Text style={{ fontSize: 20, fontWeight: "bold" }}>{props.selectedTodo.data}</Text> : null}
            </View>
            <View style={{ margin: 10, alignItems:'center' }}>
                <TouchableOpacity onPress={props.onDelete}>
                    <Icon size={20} name="ios-trash" color="red"/>
                </TouchableOpacity>
                <Button title="Cancel" onPress={props.onCloseModal} />
            </View>
        </Modal>
    );
}


export default todoDetail;