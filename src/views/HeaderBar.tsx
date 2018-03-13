import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ViewPagerAndroid, StatusBar, ToolbarAndroid, WebView } from 'react-native';

interface HeaderBarProps {
    forecastJson: Object;
}

interface HeaderBarState { }

export default class HeaderBar extends React.Component<HeaderBarProps, HeaderBarState> {
    constructor (props: HeaderBarProps) {
        super(props);
    }

    render () {
        return (
            <View style={styles.view}>
                <StatusBar animated={true} barStyle="default" />

                <View style={styles.barView}>
                    <Image source={hamburgerIcon} />

                    <View style={styles.locationView}>

                        <Text style={styles.locationText} >
                            {
                                (this.props.forecastJson as any) !== undefined && (this.props.forecastJson as any).channel !== undefined ?
                                    (this.props.forecastJson as any).channel.location.city + ',' + (this.props.forecastJson as any).channel.location.region : ''
                            }
                        </Text>

                        <Text
                            style={styles.timestampText}>
                            {
                                (this.props.forecastJson as any) !== undefined && (this.props.forecastJson as any).channel !== undefined ?
                                    ((this.props.forecastJson as any).channel.lastBuildDate as String).split(' ')[4] + ' ' +
                                    ((this.props.forecastJson as any).channel.lastBuildDate as String).split(' ')[5] + ' ' +
                                    ((this.props.forecastJson as any).channel.lastBuildDate as String).split(' ')[6]
                                    : ''
                            }
                        </Text>
                    </View>

                    <Image source={plusIcon} />

                </View>
            </View>
        );
    }
}


const hamburgerIcon = require('../icons/system/ic_menu_white_24dp.png');
const plusIcon = require('../icons/system/ic_plus_white_24dp.png');


const styles = StyleSheet.create({
    view: {
        width: '100%'
    },
    barView: {
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 5, paddingRight: 5, alignItems: 'center'
    },
    locationView: {
        display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', alignItems: 'center', paddingTop: 5, paddingBottom: 5
    },
    locationText: {
        width: 100,
        color: 'white',
        fontSize: 16,
        fontWeight: '300',
        textAlign: 'center',
        textShadowColor: 'black',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 2,
        padding: 0,
        fontFamily: 'HelveticaLTStd_Light',
    },
    timestampText: {
        width: 100,
        color: 'white',
        fontSize: 10,
        fontWeight: '300',
        textAlign: 'center',
        textShadowColor: 'black',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 2,
        padding: 0,
        fontFamily: 'HelveticaLTStd_Light',
    },

});




