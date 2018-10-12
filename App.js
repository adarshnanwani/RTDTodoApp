/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './src/screens/Login/Login';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();

console.log('First',store.getState());

import AddTodoScreen from './src/screens/AddTodo/AddTodo';
import TodoListScreen from './src/screens/TodoList/TodoListScreen';

// Navigation.registerComponent('todoapp.AddTodoScreen', () => AddTodoScreen)
Navigation.registerComponentWithRedux('todoapp.AddTodoScreen', () => AddTodoScreen, Provider, store);
Navigation.registerComponentWithRedux('todoapp.TodoListScreen', () => TodoListScreen, Provider, store);
console.log('Second',store.getState());

class App extends Component {
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

export default App;