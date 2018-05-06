import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ViewPagerAndroid, StatusBar, ToolbarAndroid, WebView, Button } from 'react-native';
import SubSection from '../components/SubSection';
import WeatherDay from '../components/WeatherDay';

interface ForecastProps {
    forecastJson: Object;
}
interface ForecastState {
    showExtendedForecast: boolean;
}

export default class Forecast extends React.Component<ForecastProps, ForecastState> {
    constructor (props: ForecastProps) {
        super(props);
        this.state = ({ showExtendedForecast: false });
    }

    render () {
        return (
            <SubSection title="Forecast" >
                <View style={styles.container}>
                    {
                        (this.props.forecastJson as any) ?
                            (
                                (
                                    (this.props.forecastJson as any).results.channel.item.forecast as Array<Object>).slice(0, this.state.showExtendedForecast ? 10 : 5).map(dayNode =>
                                        <View key={dayNode.toString()} >
                                            <WeatherDay key={((dayNode as any).date as string)} dayJSON={dayNode} />
                                            <View
                                                style={styles.line}
                                            />
                                        </View>
                                    )
                            ) : <Text> N/A </Text>

                    }

                </View>
                <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 15 }}>
                    <TouchableOpacity onPress={() => { this.setState({ showExtendedForecast: !this.state.showExtendedForecast }) }} accessibilityLabel="Show 5 day forecast" style={{ paddingRight: 5 }} >
                        <Text style={{ color: this.state === null || this.state.showExtendedForecast ? 'white' : 'grey' }}>5d</Text>
                    </TouchableOpacity>

                    <Text style={{ color: 'white' }}>|</Text>

                    <TouchableOpacity onPress={() => { this.setState({ showExtendedForecast: !this.state.showExtendedForecast }) }} accessibilityLabel="Show 5 day forecast" style={{ paddingLeft: 5 }} >
                        <Text style={{ color: this.state === null || this.state.showExtendedForecast ? 'grey' : 'white' }}>10d</Text>
                    </TouchableOpacity>

                </View>

            </SubSection>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0)',
        width: '100%'
    },

    backgroundImage: {
        position: 'absolute',
    },
    line: {
        borderBottomColor: '#AFAFAC64',
        borderBottomWidth: 1,
    },
    button: {

    }

});




