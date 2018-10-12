import React, {Component} from 'react';
import { TextInput, StyleSheet} from 'react-native';

class DefaultTextInput extends Component{

    state= {
        value: ''
    }

    onChangeTextHandler = val => {
        this.setState({
            value:val
        });
    }
    render(){
        return(
            <TextInput
                value={this.state.value} 
                style={styles.textInput} 
                {...this.props}
                underlineColorAndroid="transparent"
                onChangeText={this.onChangeTextHandler}/>
        )
    }
}

const styles = StyleSheet.create({
    textInput:{
        borderWidth:1,
        backgroundColor:"#eee",
        borderColor:"#ccc",
        marginTop:5,
        marginBottom:5,
        padding: 10
    }
});

export default DefaultTextInput;
