import * as React from 'react';
import { StyleSheet, Text, View, DrawerLayoutAndroid } from 'react-native';
import SubSection from './SubSection';
import { store, WeatherAppStore } from '../store/WeatherAppStore';
import { Provider, connect } from 'react-redux';


function mapStateToProps (storeState: WeatherAppStore.Stores): WeatherAppStore.LocationStore {
    return {
        locations: storeState.LocationStore.locations,
    };
}

interface HamburgerMenuProps {
    locations: Array<String>

}
interface HamburgerMenuState { }

class HamburgerMenuRedux extends React.Component<HamburgerMenuProps, HamburgerMenuState> {
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



                <Text style={{ color: 'white' }}>Locations: </Text>
                {
                    this.props.locations ? this.props.locations.map(location =>
                        <Text style={{ color: 'white' }} key={Math.random() * 10000}>{location}</Text>) : <Text style={{ color: 'white' }} key={Math.random() * 10000}>hello</Text>
                }




            </SubSection>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
});




const HamburgerMenu = connect(mapStateToProps)(HamburgerMenuRedux);

export default HamburgerMenu;