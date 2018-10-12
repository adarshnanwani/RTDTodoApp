import React from 'react';
import DefaultInput from '../UI/DefaultTextInput/DefaultTextInput';

const todoInput = props => (
    <DefaultInput
        value={props.todoValue}
        placeholder="Enter Todo"
        onChangeText={props.onChangeText} />
);

export default todoInput;