/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './src/screens/Login/Login';

import AddTodo from './src/screens/AddTodo/AddTodo';
import TodoList from './src/screens/TodoList/TodoList';

Navigation.registerComponent('todoapp.AddTodoScreen', () => AddTodo);
Navigation.registerComponent('todoapp.TodoListScreen', () => TodoList);

export default class App extends Component {
  render() {

    return (
      <View style={styles.container}>
        <LoginScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
