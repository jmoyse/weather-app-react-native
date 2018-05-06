import * as React from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import SubSection from '../components/SubSection';
import FontStyles from '../styles/FontStyles';

interface WindPressureProps {
    forecastJson: Object;
}

interface WindPressureState { }

export default class WindPressure extends React.Component<WindPressureProps, WindPressureState> {
    constructor (props: WindPressureProps) {
        super(props);
    }
    componentWillReceiveProps (newProps: WindPressureProps, newState: WindPressureState) {
        //console.log(newProps);
    }

    getCardinalDirection (angle: number): string { // snagged from: https://gist.github.com/basarat/4670200
        if (typeof angle === 'string') angle = parseInt(angle);
        if (angle <= 0 || angle > 360 || typeof angle === 'undefined')
            return '☈';
        const arrows: { [s: string]: string; } = {
            north: 'N ↑',
            north_east: 'NE ↗',
            east: 'E →',
            south_east: 'SE ↘',
            south: 'S ↓',
            south_west: 'SW ↙',
            west: 'W ←',
            north_west: 'NW ↖'
        };
        const directions = Object.keys(arrows);
        const degree = 360 / directions.length;
        angle = angle + degree / 2;
        for (let i = 0; i < directions.length; i++) {
            if (angle >= (i * degree) && angle < (i + 1) * degree) {
                return arrows[directions[i]];
            }
        }
        return arrows['north'];
    }


    render () {
        return (
            <SubSection title="Wind & Pressure">
                <View style={styles.groundLine}> {/* prespective line */}
                    <View
                        style={styles.line}
                    />
                </View>
                <View style={styles.windmillContainer} >
                    <Image source={require('../icons/windmill.png')} style={styles.windmillIconStyle} resizeMode="contain" />

                    {
                        /*
                           <Text
                       
                               style={styles.text}>
                               Chill =>
                       {
                                   (this.props.forecastJson as any) !== undefined ?
                                       ((this.props.forecastJson as any).results.channel.wind.chill) : ''
                               }
                           </Text>
                           */
                    }
                    {/*
                    <Text
                        style={styles.text}>
                        Direction =>
                    {
                            (this.props.forecastJson as any) !== undefined ?
                                ((this.props.forecastJson as any).results.channel.wind.direction) : ''
                        }
                    </Text>
                    */
                    }



                    <View style={{ padding: 2 }}>
                        <Text style={styles.text}>
                            Wind
                        </Text>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'baseline' }}>
                            <Text style={styles.textNumbers}>
                                {
                                    (this.props.forecastJson as any) !== undefined ?
                                        ((this.props.forecastJson as any).results.channel.wind.speed) + ' ' : ''
                                }
                            </Text>

                            <Text style={styles.text}>
                                {
                                    (this.props.forecastJson as any) !== undefined ?
                                        ((this.props.forecastJson as any).results.channel.units.speed) + ' ' +
                                        this.getCardinalDirection(Number.parseFloat((this.props.forecastJson as any).results.channel.wind.direction)).split(' ')[0]
                                        : ''
                                }
                            </Text>
                            <Text style={styles.directinoText}>
                                {
                                    (this.props.forecastJson as any) !== undefined ?

                                        '  ' + this.getCardinalDirection(Number.parseFloat((this.props.forecastJson as any).results.channel.wind.direction)).split(' ')[1] + '  '
                                        : ''
                                }
                            </Text>
                        </View>
                    </View>
                </View>
            </SubSection>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        textAlign: 'left',
        fontFamily: FontStyles.Thin,
        fontSize: 10,
    },
    directinoText: {
        color: 'white',
        textAlign: 'left',
        fontFamily: FontStyles.Thin,
        fontSize: 25,
    },
    groundLine: {
        position: 'relative',
        top: '40%'
    },
    textNumbers: {
        color: 'white',
        textAlign: 'left',
        fontFamily: FontStyles.Thin,
        fontSize: 13,
    },
    line: {
        borderBottomColor: '#EFEFEC64',
        borderBottomWidth: 1,
        marginTop: 5,
        marginBottom: 5,
    },
    windmillIconStyle: {
        height: 100,
        width: 100
    },
    windmillContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
        flexDirection: 'row'
    }
});
