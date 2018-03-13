import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SubSection from '../components/SubSection';

interface WeatherMapProps {
    forecastJson: Object;
}

interface WeatherMapState { }

export default class WeatherMap extends React.Component<WeatherMapProps, WeatherMapState> {
    constructor (props: WeatherMapProps) {
        super(props);
    }
    componentWillReceiveProps (newProps: WeatherMapProps, newState: WeatherMapState) {
        console.log(newProps);
    }

    render () {
        return (
            <SubSection title="Map">
                <Text style={styles.text}> This will be a map </Text>
                <View style={styles.container}>

                </View>
            </SubSection>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'white'
    },

    container: {
        height: 200,
        width: 200,
        backgroundColor: 'green'
    },
});
