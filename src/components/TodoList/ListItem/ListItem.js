import React from 'react';
import { Text, TouchableOpacity} from 'react-native';

const listItem = (props) => (
    <TouchableOpacity onPress={()=>props.onItemPress(props.item.id)} style={{backgroundColor:'#eee'}}>
        <Text style={{ fontSize: 20 }}>{props.item.data}</Text>
    </TouchableOpacity>    
);

export default listItem;