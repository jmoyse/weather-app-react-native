import * as React from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import SubSection from '../components/SubSection';
import WeatherIcon from '../components/WeatherIcon';
import FontStyles from '../styles/FontStyles';
interface DetailedWeatherProps {
    forecastJson: Object;
}

interface DetailedWeatherState { }

export default class DetailedWeather extends React.Component<DetailedWeatherProps, DetailedWeatherState> {
    constructor (props: DetailedWeatherProps) {
        super(props);
    }
    componentWillReceiveProps (newProps: DetailedWeatherProps, newState: DetailedWeatherState) {
        //console.log(newProps);
    }

    render () {
        return (
            <SubSection title="Details">
                <View>
                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                        <View style={{ width: 120, height: 120, display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }} >
                            <View style={{ width: '75%', height: '75%' }}>
                                {
                                    (this.props.forecastJson as any) !== undefined ?
                                        <WeatherIcon weatherID={(this.props.forecastJson as any).results.channel.item.condition.code} />
                                        : <View />
                                }
                            </View>
                        </View>
                        <View
                            style={styles.line}
                        />
                        <View style={{ flex: 1, paddingTop: 10, paddingBottom: 10, alignSelf: "stretch", }}>

                            <View style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={styles.textLeft}>Humidity</Text>
                                <Text style={styles.textRight}>
                                    {
                                        (this.props.forecastJson as any) !== undefined ?
                                            ((this.props.forecastJson as any).results.channel.atmosphere.humidity) + '%'

                                            : ''
                                    }
                                </Text>
                            </View>
                            <View
                                style={styles.line}
                            />
                            <View style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={styles.textLeft}>Pressure</Text>
                                <Text style={styles.textRight}>
                                    {
                                        (this.props.forecastJson as any) !== undefined ?
                                            ((this.props.forecastJson as any).results.channel.atmosphere.pressure)  //+
                                            //((this.props.forecastJson as any).results.channel.units.distance)

                                            : ''
                                    }
                                </Text>
                            </View>
                            <View
                                style={styles.line}
                            />
                            <View style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={styles.textLeft}>Air Currents</Text>
                                <Text style={styles.textRight}>
                                    {
                                        (this.props.forecastJson as any) !== undefined ?
                                            ((this.props.forecastJson as any).results.channel.atmosphere.pressure) === '0' ? 'Falling' : 'Rising'
                                            : ''
                                    }
                                </Text>
                            </View>
                            <View
                                style={styles.line}
                            />

                            <View style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={styles.textLeft}>Visibility</Text>
                                <Text style={styles.textRight}>
                                    {
                                        (this.props.forecastJson as any) !== undefined ?
                                            ((this.props.forecastJson as any).results.channel.atmosphere.visibility) + ' ' +
                                            ((this.props.forecastJson as any).results.channel.units.distance)

                                            : ''
                                    }
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={styles.line}
                    />
                    <Text style={styles.textLeft}>
                        {
                            /*
                            // not sure this is actually the forecast?
                            (this.props.forecastJson as any) !== undefined ?
                                ((this.props.forecastJson as any).results.channel.item.description) : ''
                            */
                        }
                        Tonight - Evening clouds will give to clearing overnight. Warm and humid. Low 74F(23.3C). Winds SSW at 5 to 10 mph(8.0 to 16.1kph).
                    </Text>
                </View>

            </SubSection>
        );
    }
}

const styles = StyleSheet.create({
    textLeft: {
        color: 'white',
        textAlign: 'left',
        fontFamily: FontStyles.Thin,
        fontSize: 12,

    },
    textRight: {
        color: 'white',
        textAlign: 'right',
        fontFamily: FontStyles.Thin,
        fontSize: 12,
    },
    line: {
        borderBottomColor: '#AFAFAC64',
        borderBottomWidth: 1,
        marginTop: 5,
        marginBottom: 5,
    },
});