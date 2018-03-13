import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ViewPagerAndroid, StatusBar, ToolbarAndroid, WebView } from 'react-native';
import ForecastBox from '../components/ForecastBox';
import SubSection from '../components/SubSection';
import WeatherDay from '../components/WeatherDay';

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
            <SubSection title="Forecast" >
                <View style={styles.container}>
                    {
                        (this.props.forecastJson as any) ?
                            (
                                (this.props.forecastJson as any).results.channel.item.forecast.map(dayNode =>
                                    <WeatherDay key={((dayNode as any).date as string)} dayJSON={dayNode} />
                                )
                            ) : <Text> N/A </Text>

                    }
                </View>
            </SubSection>


        );
    }
}


const background = require('../backgrounds/city-background-1.jpg');
const background2 = require('../backgrounds/city-background-2.jpg');
const background3 = require('../backgrounds/city-background-4.jpg');


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0)',
        width: '100%'
    },

    backgroundImage: {
        position: 'absolute',
    }

});




