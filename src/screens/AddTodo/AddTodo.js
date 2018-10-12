import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { addTodo, setTodo } from '../../store/actions/index';
import DefaultTextInput from '../../components/UI/DefaultTextInput/DefaultTextInput';
import TodoInput from '../../components/TodoInput/TodoInput';

class AddTodoScreen extends Component {

    onChangeTodoHandler = val => {
        this.props.onSetTodo(val)
    };

    addTodoHandler = () => {
        this.props.onAddTodo();
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <TodoInput
                            todoValue={this.props.todoValue}
                            onChangeText={this.onChangeTodoHandler} />
                    </View>
                    <View>
                        <View style={styles.placeHolder}>
                            <Text>Sample Image</Text>
                        </View>
                        <DefaultTextInput placeholder="Pick Image" />
                    </View>
                    <View>
                        <View style={styles.placeHolder}>
                            <Text>Sample Image</Text>
                        </View>
                        <DefaultTextInput placeholder="Pick Location" />
                    </View>
                    <View>
                        <Button title="Save" onPress={this.addTodoHandler} />
                    </View>
                </View>

            </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    return {
        todoValue: state.TodoApp.todo
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onAddTodo: () => dispatch(addTodo()),
        onSetTodo: (val) => dispatch(setTodo(val))
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    placeHolder: {
        width: 400,
        height: 250,
        borderWidth: 1,
        borderColor: "grey",
        marginLeft: 8
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoScreen);