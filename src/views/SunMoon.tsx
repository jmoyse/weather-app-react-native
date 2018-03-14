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

                <View >
                    <View style={{ display: 'flex', flexDirection: 'row', height: 25, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <View style={styles.whitecircle}>
                        </View>
                        <Text style={styles.text}>
                            First Quarter
                        </Text>
                    </View>
                    <View style={{
                        borderBottomColor: '#BCBCBAFF',
                        borderBottomWidth: 1,
                        borderStyle: 'solid',
                        padding: 0,
                        margin: 0,
                    }}>
                        <View style={{
                            borderBottomColor: '#FF000000',
                            borderBottomWidth: 3,
                            //borderStyle: 'solid',

                        }}>
                            <View style={{

                                display: 'flex',
                                alignItems: 'center',
                                height: 125,


                            }} >
                                <View style={styles.yellowcircle} />
                            </View>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
                        <Text
                            style={styles.text}>

                            {
                                (this.props.forecastJson as any) !== undefined ?
                                    ((this.props.forecastJson as any).results.channel.astronomy.sunrise) : ''
                            }
                        </Text>
                        <Text
                            style={styles.text}>

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
        fontFamily: 'HelveticaNeueLTStd_Lt',
        fontSize: 12,
    },
    whitecircle: {
        backgroundColor: 'white',
        width: 25,
        height: 25,
        borderRadius: 25 / 2,
        margin: 5

    },

    yellowcircle: {
        backgroundColor: '#FAD82F7D',
        width: 275,
        height: 275,
        borderTopLeftRadius: 375 / 2,
        borderTopRightRadius: 375 / 2
    }
});
