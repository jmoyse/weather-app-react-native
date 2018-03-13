import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SubSection from '../components/SubSection';

interface WindPressureProps {
    forecastJson: Object;
}

interface WindPressureState { }

export default class WindPressure extends React.Component<WindPressureProps, WindPressureState> {
    constructor (props: WindPressureProps) {
        super(props);
    }
    componentWillReceiveProps (newProps: WindPressureProps, newState: WindPressureState) {
        console.log(newProps);
    }

    render () {
        return (
            <SubSection title="Wind & Pressure">
                <Text
                    style={styles.text}>
                    Chill =>
                    {
                        (this.props.forecastJson as any) !== undefined ?
                            ((this.props.forecastJson as any).results.channel.wind.chill) : ''
                    }
                </Text>
                <Text
                    style={styles.text}>
                    Direction =>
                    {
                        (this.props.forecastJson as any) !== undefined ?
                            ((this.props.forecastJson as any).results.channel.wind.direction) : ''
                    }
                </Text>
                <Text
                    style={styles.text}>
                    Speed =>
                    {
                        (this.props.forecastJson as any) !== undefined ?
                            ((this.props.forecastJson as any).results.channel.wind.speed) : ''
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
