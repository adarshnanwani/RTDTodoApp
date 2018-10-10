/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import TodoApp from './src/screens/TodoApp/TodoApp';
import configureStore from './src/store/configureStore';
export default class App extends Component {
  render() {
    const store = configureStore();
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <TodoApp />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
