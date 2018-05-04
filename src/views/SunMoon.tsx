import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import SubSection from '../components/SubSection';
import FontStyles from '../styles/FontStyles';

interface SunMoonProps {
    forecastJson: Object;
}

interface SunMoonState { }

export default class SunMoon extends React.Component<SunMoonProps, SunMoonState> {
    constructor (props: SunMoonProps) {
        super(props);
    }
    render () {
        return (
            <SubSection title="Sun & Moon">

                <View >
                    <View style={styles.moonContainer}>
                        <View style={styles.whitecircle}>
                        </View>
                        <Text style={styles.text}>
                            First Quarter
                        </Text>
                    </View>
                    {/* not pretty, but this is a circle, with another view to cut it in half, and another to add a small border outside*/}
                    <View style={styles.sunContainer}> {/* main contaner with no padding*/}
                        <View style={styles.circleBorder}> {/* adds a small border */}
                            <View style={styles.circleCutoff} > {/* cuts the circle in half */}
                                <View style={styles.yellowcircle} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.startEndTimeView}>
                        <Text style={styles.text}>
                            {
                                (this.props.forecastJson as any) !== undefined ?
                                    ((this.props.forecastJson as any).results.channel.astronomy.sunrise) : ''
                            }
                        </Text>
                        <Text style={styles.text}>
                            {
                                (this.props.forecastJson as any) !== undefined ?
                                    ((this.props.forecastJson as any).results.channel.astronomy.sunset) : ''
                            }
                        </Text>
                    </View>
                </View>
            </SubSection>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        textAlign: 'right',
        fontFamily: FontStyles.Standard,
        fontSize: 12,
    },
    moonContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: 25,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    sunContainer: {
        borderBottomColor: '#BCBCBAFF',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        padding: 0,
        margin: 0,
    },
    circleCutoff: {
        display: 'flex',
        alignItems: 'center',
        height: 125
    },
    circleBorder: {
        borderBottomColor: '#FF000000',
        borderBottomWidth: 3
    },
    whitecircle: {
        backgroundColor: 'white',
        width: 25,
        height: 25,
        borderRadius: 25 / 2,
        margin: 5
    },
    startEndTimeView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5
    },

    yellowcircle: {
        backgroundColor: '#FAD82F7D',
        width: Platform.OS === 'ios' ? 275 : 240,
        height: Platform.OS === 'ios' ? 125 : 275,
        borderTopLeftRadius: 375 / 2,
        borderTopRightRadius: 375 / 2
    }
});
