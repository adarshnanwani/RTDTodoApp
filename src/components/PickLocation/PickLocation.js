import React, { Component } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import MapView from "react-native-maps";
import DefaultButton from "../UI/DefaultButton/DefaultButton";

class PickLocation extends Component {
    state = {
        focusedLocation: {
            latitude: 12.9673795,
            longitude: 77.7078377,
            latitudeDelta: 0.0122,
            longitudeDelta:
                (Dimensions.get("window").width /
                    Dimensions.get("window").height) *
                0.0122
        },
        locationSelected: false
    };

    pickLocationHandler = event => {
        const coordinates = event.nativeEvent.coordinate;
        this.props.onLocationUpdated({
            latitude: coordinates.latitude,
            longitude: coordinates.longitude
        });
        this.map.animateToRegion(
            {
                ...this.state.focusedLocation,
                latitude: coordinates.latitude,
                longitude: coordinates.longitude
            },
            500
        );
        this.setState(prevState => {
            return {
                focusedLocation: {
                    ...prevState.focusedLocation,
                    latitude: coordinates.latitude,
                    longitude: coordinates.longitude
                },
                locationSelected: true
            };
        });
    };

    getLocationHandler = () => {
        navigator.geolocation.getCurrentPosition(pos => {
            const event = {
                nativeEvent: {
                    coordinate: {
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude
                    }
                }
            };
            this.pickLocationHandler(event);
        });
    };

    render() {
        let marker = null;
        if (this.state.locationSelected) {
            marker = <MapView.Marker coordinate={this.state.focusedLocation} />;
        }
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={this.state.focusedLocation}
                    onPress={this.pickLocationHandler}
                    ref={ref => (this.map = ref)}
                >
                    {marker}
                </MapView>
                <DefaultButton onPress={this.getLocationHandler}>
                    <Text>Locate Me!</Text>
                </DefaultButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center"
    },
    map: {
        width: "100%",
        height: 250
    }
});

export default PickLocation;
