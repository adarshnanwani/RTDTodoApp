import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import ListItem from './ListItem/ListItem';
import TodoDetail from '../../components/TodoDetail/TodoDetail';

const todoList = (props) => (
    <View style={styles.listContainer}>
        <FlatList
            data={props.todos}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <ListItem item={item} onItemPress={props.itemPressed} />}
        />
    </View>
);

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        borderColor:"red"
    }
});

export default todoList;