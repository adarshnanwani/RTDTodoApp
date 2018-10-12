import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import TodoList from '../../components/TodoList/TodoList';
import { selectTodo, cancelTodo, deleteTodo } from '../../store/actions/index';
import TodoDetail from '../../components/TodoDetail/TodoDetail';

class TodoListScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <TodoList
                    todos={this.props.todoList}
                    itemPressed={this.props.onSelectTodo} />
                <TodoDetail
                    selectedTodo={this.props.selectedTodo}
                    onDelete={this.props.onDeleteTodo}
                    onCloseModal={this.props.onCancelTodo} />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        todoList: state.TodoApp.todos,
        selectedTodo: state.TodoApp.selectedTodo,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectTodo: (id) => dispatch(selectTodo(id)),
        onCancelTodo: () => dispatch(cancelTodo()),
        onDeleteTodo: () => dispatch(deleteTodo())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoListScreen);
