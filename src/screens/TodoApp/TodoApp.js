import React, { Component } from 'react';
import { View, Text, Modal, StyleSheet, Button, TouchableOpacity } from 'react-native';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';

import TodoDetail from '../../components/TodoDetail/TodoDetail';

class TodoApp extends Component {
    state = {
        todo: '',
        todos: [],
        selectedTodo: null
    };

    inputChangeHandler = (val) => {
        this.setState({
            todo: val
        });
    };

    addTodoHandler = () => {
        const val = this.state.todo.trim();
        const id = (parseInt(Math.random() * 10000)).toString().trim();
        if (val !== '') {
            this.setState(prevState => {
                return {
                    todo: '',
                    todos: [...prevState.todos, { data: val, id: id }]
                }
            });
        }
        console.log(this.state);
    };

    closeModalHandler = () => {
        this.setState({
            selectedTodo: null
        });
    };

    itemSelectedHandler = (id) => {
        console.log(id);
        const todo = [...this.state.todos].filter(todo => todo.id === id)[0];
        this.setState({
            selectedTodo: todo
        })
    }

    deleteSelectedTodoHandler = () => {
        const allTodos = [...this.state.todos];
        this.setState(prevState => {
            return {
                todos: allTodos.filter(todo => todo.id !== prevState.selectedTodo.id),
                selectedTodo: null
            }
        });

    }

    render() {
        return (
            <View>
                <Text style={styles.welcome}>
                    To do List:
            </Text>
                <TodoForm
                    onInputChange={this.inputChangeHandler}
                    onAddPress={this.addTodoHandler}
                    inputValue={this.state.todo}
                />
                <TodoList
                    todos={this.state.todos}
                    itemPressed={this.itemSelectedHandler} />
                <TodoDetail
                    selectedTodo={this.state.selectedTodo}
                    onCloseModal={this.closeModalHandler}
                    onDelete={this.deleteSelectedTodoHandler}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

export default TodoApp;