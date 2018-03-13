import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SubSection from '../components/SubSection';

interface DetailedWeatherProps {
    forecastJson: Object;
}

interface DetailedWeatherState { }

export default class DetailedWeather extends React.Component<DetailedWeatherProps, DetailedWeatherState> {
    constructor (props: DetailedWeatherProps) {
        super(props);
    }
    componentWillReceiveProps (newProps: DetailedWeatherProps, newState: DetailedWeatherState) {
        console.log(newProps);
    }

    render () {
        return (
            <SubSection title="Details">
                <Text
                    style={styles.text}>
                    humidity =>
                    {
                        (this.props.forecastJson as any) !== undefined ?
                            ((this.props.forecastJson as any).results.channel.atmosphere.humidity) : ''
                    }
                </Text>
                <Text
                    style={styles.text}>
                    pressure =>
                    {
                        (this.props.forecastJson as any) !== undefined ?
                            ((this.props.forecastJson as any).results.channel.atmosphere.pressure) : ''
                    }
                </Text>
                <Text
                    style={styles.text}>
                    rising =>
                    {
                        (this.props.forecastJson as any) !== undefined ?
                            ((this.props.forecastJson as any).results.channel.atmosphere.rising) : ''
                    }
                </Text>
                <Text
                    style={styles.text}>
                    visibility =>
                    {
                        (this.props.forecastJson as any) !== undefined ?
                            ((this.props.forecastJson as any).results.channel.atmosphere.visibility) : ''
                    }
                </Text>

            </SubSection>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'white'
    },
});
