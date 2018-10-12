import React from 'react';
import { Modal, Button, Text, TouchableOpacity, View, Image } from 'react-native';
import placeholderImage from '../../assets/todo.jpg';
import Icon from 'react-native-vector-icons/Ionicons';

const todoDetail = props => {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.selectedTodo !== null}
            onRequestClose={props.onCloseModal}>
            <View style={{ alignItems: 'center' }}>
                <Image source={placeholderImage} />
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                {props.selectedTodo ? <Text style={{ fontSize: 30, fontWeight: "bold" }}>{props.selectedTodo.data}</Text> : null}
            </View>
            <View style={{ margin: 10, alignItems: 'center' }}>
                <TouchableOpacity onPress={props.onDelete}>
                    <Icon size={40} name="ios-trash" color="red" />
                </TouchableOpacity>
                <Button title="Cancel" onPress={props.onCloseModal} />
            </View>
        </Modal>
    );
}


export default todoDetail;