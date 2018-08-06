import React from 'react';
import { View, Image, Text } from 'react-native';

export default class MovieComponent extends React.Component {

    render() {
        return (
            <View style={{alignItems: 'center', padding: 10}}>
                <Image source={require('../images/0.png')} />
                <Text>{this.props.title}</Text>
            </View>
        );
    }
}