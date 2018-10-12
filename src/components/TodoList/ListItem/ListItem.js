import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import placeholderImage from '../../../assets/todo.jpg';

const listItem = (props) => (
    <TouchableOpacity onPress={() => props.onItemPress(props.item.id)} style={{ backgroundColor: '#eee' }}>
        <View style={{flexDirection:'row', flex:1}}>
            <Image source={placeholderImage} style={{ height: 30, width: 30, marginRight:10, padding:5 }} />
            <Text style={{ fontSize: 20 }}>{props.item.data}</Text>
        </View>
    </TouchableOpacity>
);

export default listItem;