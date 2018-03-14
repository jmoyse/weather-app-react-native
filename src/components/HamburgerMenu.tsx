import * as React from 'react';
import { StyleSheet, Text, View, DrawerLayoutAndroid } from 'react-native';
import SubSection from './SubSection';

interface HamburgerMenuProps {

}

interface HamburgerMenuState { }

export default class HamburgerMenu extends React.Component<HamburgerMenuProps, HamburgerMenuState> {
    constructor (props: HamburgerMenuProps) {
        super(props);
    }
    componentWillReceiveProps (newProps: HamburgerMenuProps, newState: HamburgerMenuState) {
        console.log(newProps);
    }

    render () {
        return (
            <SubSection>

                <Text style={{ color: 'white' }}> Work in progress </Text>
            </SubSection>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
});
