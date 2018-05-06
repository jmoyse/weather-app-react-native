import * as React from 'react';
import { Platform, StyleSheet, Dimensions, Text, View, TextInput, Image, StatusBar, ToolbarAndroid, WebView } from 'react-native';
import WeatherIcon from '../components/WeatherIcon';
import FontStyles from '../styles/FontStyles';
interface HomeWeatherProps {
    forecastJson: Object;
}
interface HomeWeatherState {
    windowHeight: number;
}
export default class HomeWeather extends React.Component<HomeWeatherProps, HomeWeatherState> {
    constructor (props: HomeWeatherProps) {
        super(props);

        this.state = {
            windowHeight: 0,
        };
    }

    componentDidMount () {
        window.onresize = this.onResize;
        this.onResize();
    }

    onResize = () => {
        let { width, height } = Dimensions.get('window');

        if (this.state.windowHeight !== height) {
            this.setState({
                windowHeight: height
            });
        }
    }

    capitalizeFirstChar (input: string): string {
        let output = '';
        if (input && input.length > 0) {
            let tmp = input.toLowerCase().substr(1);
            output += input.charAt(0) + tmp;
        }
        return output;
    }

    render () {
        return (
            <View style={styles.container} >
                <View style={styles.positionalContainer}>
                    <View style={styles.weatherIconView}>
                        <View style={styles.icon}>
                            {
                                (this.props.forecastJson as any) !== undefined ?
                                    <WeatherIcon weatherID={Number.parseInt((this.props.forecastJson as any).results.channel.item.condition.code)} />
                                    : <View />
                            }
                        </View>

                        <Text style={styles.conditionsText}>
                            {(this.props.forecastJson as any) !== undefined ? this.capitalizeFirstChar((this.props.forecastJson as any).results.channel.item.condition.text) : ''}
                        </Text>
                    </View>

                    <View style={styles.currentTempView}>
                        <Image source={require('../icons/system/ic_keyboard_arrow_up_white_24dp_2x.png')} style={{ height: 20, width: 20 }} />

                        <Text style={styles.highText} testID="currentLow">
                            {(this.props.forecastJson as any) !== undefined ? (this.props.forecastJson as any).results.channel.item.forecast[0].high + '°' : ''}
                        </Text>
                        <Image source={require('../icons/system/ic_keyboard_arrow_down_white_24dp_2x.png')} style={{ height: 20, width: 20 }} />
                        <Text style={styles.lowText} testID="currentHigh">
                            {(this.props.forecastJson as any) !== undefined ? (this.props.forecastJson as any).results.channel.item.forecast[0].low + '°' : ''}
                        </Text>
                    </View>

                    <Text style={styles.currentTempText}
                        allowFontScaling={true}
                        adjustsFontSizeToFit={true}
                        testID="currentTemp"
                    >
                        {(this.props.forecastJson as any) !== undefined ? (this.props.forecastJson as any).results.channel.item.condition.temp + '°' : ''}
                    </Text>
                </View>
            </View>
        );
    }
}

let low = require('../icons/system/ic_keyboard_arrow_down_white_24dp_2x.png');
let high = require('../icons/system/ic_keyboard_arrow_up_white_24dp_2x.png');

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("window").height - 75,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    positionalContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    view: {
        width: '100%'
    },
    weatherIconView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingLeft: 10
    },
    currentTempView: {
        direction: 'ltr',
        flexDirection: 'row',
        paddingLeft: 12,
        justifyContent: 'flex-start'
    },
    icon: {
        width: 20,
        height: 20
    },
    conditionsText: {
        color: 'white',
        fontSize: 30,
        paddingLeft: 20,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        fontFamily: FontStyles.Thin,
    },
    highText: {
        color: 'white',
        fontSize: 20,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        fontFamily: FontStyles.Thin,
        marginRight: 20,
    },
    lowText: {
        color: '#8FBFE8',
        fontSize: 20,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        fontFamily: FontStyles.Thin,
    },
    currentTempText: {
        color: 'white',
        fontSize: 100,
        paddingLeft: 10,
        lineHeight: 110,
        textAlign: 'center',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 3 },
        textShadowRadius: 5,
        fontFamily: FontStyles.UltraThin,
    },
});




