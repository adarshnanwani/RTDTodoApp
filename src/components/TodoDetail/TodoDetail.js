import React from "react";
import {
    Modal,
    Button,
    Text,
    TouchableOpacity,
    View,
    Image,
    Platform
} from "react-native";
import placeholderImage from "../../assets/todo.jpg";
import Icon from "react-native-vector-icons/Ionicons";

const todoDetail = props => {
    let image = null;
    let text = null;
    if (props.selectedTodo != null) {
        image = <Image source={props.selectedTodo.image} style={{height:"100%",width:"100%"}} />;
        text = (
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                {props.selectedTodo.data}
            </Text>
        );
    }
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.selectedTodo !== null}
            onRequestClose={props.onCloseModal}
        >
            <View style={{ alignItems: "center" , width:200,height:300}}>{image}</View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                {text}
            </View>
            <View style={{ margin: 10, alignItems: "center" }}>
                <TouchableOpacity onPress={props.onDelete}>
                    <Icon
                        size={40}
                        name={
                            Platform.OS === "android" ? "md-trash" : "ios-trash"
                        }
                        color="red"
                    />
                </TouchableOpacity>
                <Button title="Cancel" onPress={props.onCloseModal} />
            </View>
        </Modal>
    );
};

export default todoDetail;
