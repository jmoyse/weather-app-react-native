import * as React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import SubSection from './SubSection';
import { store, WeatherAppStore } from '../store/WeatherAppStore';
import { Provider, connect } from 'react-redux';


function mapStateToProps (storeState: WeatherAppStore.Stores): WeatherAppStore.LocationStore {
    return {
        locations: storeState.LocationStore.locations,
    };
}

interface HamburgerMenuProps {
    locations: Array<String>;
}

interface HamburgerMenuState { }

class HamburgerMenuRedux extends React.Component<HamburgerMenuProps, HamburgerMenuState> {
    constructor (props: HamburgerMenuProps) {
        super(props);
    }

    render () {
        return (
            <View style={styles.container} >
                <View style={styles.menuText}>
                    <Text style={styles.headerEntry}>
                        Locations
                    </Text>
                </View>
                <View style={styles.menuEntry}>
                    <Image source={edit_location} style={styles.iconStyle} />
                    <Text style={styles.textStyle} >
                        Edit Locations
                    </Text>
                </View>
                <View style={styles.menuEntry}>
                    <Image source={pin_drop} style={styles.iconStyle} />
                    <Text style={styles.textStyle} >
                        Current Location
                    </Text>
                </View>

                {
                    this.props.locations.map(location =>
                        <View
                            key={Math.random() * 10000}
                            style={styles.menuEntry}>
                            <Image source={pin_drop} style={styles.iconStyle} />
                            <Text style={styles.textStyle} >
                                {location}
                            </Text>
                        </View>
                    )
                }
                <View style={styles.menuText}>
                    <Text style={styles.headerEntry}>
                        Tools
                    </Text>
                </View>
                <View style={styles.menuEntry}>
                    <Image source={pin_drop} style={styles.iconStyle} />
                    <Text style={styles.textStyle} >
                        Settings
                    </Text>
                </View>

                <View style={styles.menuEntry}>
                    <Image source={pin_drop} style={styles.iconStyle} />
                    <Text style={styles.textStyle} >
                        Send Feedback
                    </Text>
                </View>
                <View style={styles.menuEntry}>
                    <Image source={pin_drop} style={styles.iconStyle} />
                    <Text style={styles.textStyle} >
                        Share This App
                    </Text>
                </View>
                <View style={styles.menuEntry}>
                    <Image source={pin_drop} style={styles.iconStyle} />
                    <Text style={styles.textStyle} >
                        Rate this App
                        </Text>
                </View>
            </View>
        );
    }
}

const add_location = require('../icons/system/ic_add_location_white_24dp_1x.png');
const edit_location = require('../icons/system/ic_edit_location_white_24dp_1x.png');
const pin_drop = require('../icons/system/ic_pin_drop_white_24dp_1x.png');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#272627',
        //padding: 10,
        height: '100%',
        width: '100%'
    },
    menuEntry: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        paddingLeft: 5,
        alignItems: "center"
    },
    menuText: {
        backgroundColor: "black",
        width: "100%",
        height: 30
    },

    headerEntry: {
        color: "white",
        paddingLeft: 10,
        paddingTop: 5,
    },
    iconStyle: {
        margin: 5
    },
    textStyle: {
        color: "white"
    },
});

const HamburgerMenu = connect(mapStateToProps)(HamburgerMenuRedux);
export default HamburgerMenu;
