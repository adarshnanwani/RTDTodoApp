import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';
import TodoDetail from '../../components/TodoDetail/TodoDetail';
import { setTodo, addTodo, deleteTodo, selectTodo, cancelTodo } from '../../store/actions/index';

class TodoApp extends Component {

    inputChangeHandler = (val) => {
        this.props.onSetTodo(val);
    };

    addTodoHandler = () => {
        this.props.onAddTodo();
    };

    closeModalHandler = () => {
        this.props.onCancelTodo();
    };

    itemSelectedHandler = (id) => {
        this.props.onSelectTodo(id);
    }

    deleteSelectedTodoHandler = () => {
        this.props.onDeleteTodo();
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
                    inputValue={this.props.todo}
                />
                <TodoList
                    todos={this.props.todos}
                    itemPressed={this.itemSelectedHandler} />
                <TodoDetail
                    selectedTodo={this.props.selectedTodo}
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

const mapStateToProps = state => {
    return {
        todo: state.TodoApp.todo,
        todos: state.TodoApp.todos,
        selectedTodo: state.TodoApp.selectedTodo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetTodo: (val) => dispatch(setTodo(val)),
        onAddTodo: () => dispatch(addTodo()),
        onDeleteTodo: () => dispatch(deleteTodo()),
        onSelectTodo: (id) => dispatch(selectTodo(id)),
        onCancelTodo: () => dispatch(cancelTodo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);