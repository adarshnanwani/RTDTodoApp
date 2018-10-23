import React, { Component } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import { addTodo, setTodo } from "../../store/actions/index";
import DefaultTextInput from "../../components/UI/DefaultTextInput/DefaultTextInput";
import TodoInput from "../../components/TodoInput/TodoInput";
import PickLocation from "../../components/PickLocation/PickLocation";
import PickImage from "../../components/PickImage/PickImage";

class AddTodoScreen extends Component {
    state = {
        todo: "",
        location: {},
        image: null
    };
    onChangeTodoHandler = val => {
        this.setState({
            todo: val
        });
    };

    addTodoHandler = () => {
        this.props.onAddTodo(
            this.state.todo,
            this.state.location,
            this.state.image
        );
    };

    updateImageData = imageData => {
        this.setState({
            image: imageData
        });
    };

    updateLocationData = locationData => {
        this.setState({
            location: locationData
        });
        console.log("Location Data", locationData);
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <TodoInput
                            todoValue={this.state.todo}
                            onChangeText={this.onChangeTodoHandler}
                        />
                    </View>
                    <PickImage onImageSelected={this.updateImageData} />
                    <PickLocation onLocationUpdated={this.updateLocationData} />
                    <View>
                        <Button title="Save" onPress={this.addTodoHandler} />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddTodo: (todo, location, image) =>
            dispatch(addTodo(todo, location, image)),
        onSetTodo: val => dispatch(setTodo(val))
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    placeHolder: {
        width: 400,
        height: 250,
        borderWidth: 1,
        borderColor: "grey",
        marginLeft: 8
    }
});

export default connect(
    null,
    mapDispatchToProps
)(AddTodoScreen);
