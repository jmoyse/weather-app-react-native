import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WeatherIcon from './WeatherIcon';
import WeatherDay from './WeatherDay';
import SubSection from './SubSection';

interface ForecastBoxProps {
    forecastJson: Object;
}

interface ForecastBoxState { }

export default class ForecastBox extends React.Component<ForecastBoxProps, ForecastBoxState> {
    constructor (props: ForecastBoxProps) {
        super(props);
    }
    componentWillReceiveProps (newProps: ForecastBoxProps, newState: ForecastBoxState) {
        console.log(newProps);
    }

    render () {
        return (

            <View style={styles.container}>
                {
                    (this.props.forecastJson as any) ?
                        (
                            (this.props.forecastJson as any).map(dayNode =>
                                <WeatherDay key={((dayNode as any).date as string)} dayJSON={dayNode} />
                            )
                        ) : <Text> N/A </Text>

                }
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: '#0000007f',
        //margin: 10,
        //padding: 10,
    },
});
