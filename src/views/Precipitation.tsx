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
    componentWillReceiveProps (newProps: PrecipitationProps, newState: PrecipitationState) {
        console.log(newProps);
    }

    render () {
        return (
            <SubSection title="Precipitation">
                <Text style={{ color: 'white' }}> Work in progress </Text>
            </SubSection>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
});
