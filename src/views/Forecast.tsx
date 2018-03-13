import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ViewPagerAndroid, StatusBar, ToolbarAndroid, WebView } from 'react-native';
import ForecastBox from '../components/ForecastBox';

interface ForecastProps {
    forecastJson: Object;
}

interface ForecastState { }

export default class Forecast extends React.Component<ForecastProps, ForecastState> {
    constructor (props: ForecastProps) {
        super(props);
    }
    render () {
        return (
            <View style={styles.container}>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignContent: 'center' }} >

                    <ForecastBox forecastJson={
                        (this.props.forecastJson as any) !== undefined ?
                            (this.props.forecastJson as any).results.channel.item.forecast :
                            undefined}
                    />

                </View>
            </View >

        );
    }
}


const background = require('../backgrounds/city-background-1.jpg');
const background2 = require('../backgrounds/city-background-2.jpeg');
const background3 = require('../backgrounds/city-background-4.jpg');


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0)',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        width: '100%'
    },

    backgroundImage: {
        position: 'absolute',
    }

});




