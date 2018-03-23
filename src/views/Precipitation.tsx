import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SubSection from '../components/SubSection';

interface PrecipitationProps {
    forecastJson: Object;
}

interface PrecipitationState { }

export default class Precipitation extends React.Component<PrecipitationProps, PrecipitationState> {
    constructor (props: PrecipitationProps) {
        super(props);
    }
    render () {
        return (
            <SubSection title="Precipitation">
                <Text style={styles.textStyle}>
                    Work in progress
                </Text>
            </SubSection>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        color: 'white',
    }
});
