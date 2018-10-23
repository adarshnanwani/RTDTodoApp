import React, { Component } from "react";
import { View, StyleSheet, Image, Button } from "react-native";
import ImagePicker from "react-native-image-picker";

class PickImage extends Component {
    state = {
        pickedImage: null
    };

    pickImageHandler = () => {
        ImagePicker.showImagePicker(
            {
                title: "Choose an image"
            },
            response => {
                console.log("Response = ", response);

                if (response.didCancel) {
                    console.log("User cancelled image picker");
                } else if (response.error) {
                    console.log("ImagePicker Error: ", response.error);
                } else {
                    const source = { uri: response.uri, base64: response.data };

                    this.props.onImageSelected(source);
                    this.setState({
                        pickedImage: source
                    });
                }
            }
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={this.state.pickedImage}
                        style={styles.image}
                    />
                </View>
                <Button title="Pick Image" onPress={this.pickImageHandler} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center"
    },
    imageContainer: {
        width: 200,
        height: 300
    },
    image: {
        height: "100%",
        width: "100%"
    }
});

export default PickImage;
