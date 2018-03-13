import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SubSection from '../components/SubSection';

interface SunMoonProps {
    forecastJson: Object;
}

interface SunMoonState { }

export default class SunMoon extends React.Component<SunMoonProps, SunMoonState> {
    constructor (props: SunMoonProps) {
        super(props);
    }
    componentWillReceiveProps (newProps: SunMoonProps, newState: SunMoonState) {
        console.log(newProps);
    }

    render () {
        return (
            <SubSection title="Sun & Moon">
                <Text
                    style={styles.text}>
                    Sunrise =>
                    {
                        (this.props.forecastJson as any) !== undefined ?
                            ((this.props.forecastJson as any).results.channel.astronomy.sunrise) : ''
                    }
                </Text>
                <Text
                    style={styles.text}>
                    Sunset =>
                    {
                        (this.props.forecastJson as any) !== undefined ?
                            ((this.props.forecastJson as any).results.channel.astronomy.sunset) : ''
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
