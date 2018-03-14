import * as React from 'react';
import { StyleSheet, Dimensions, Text, View, TextInput, Image, ViewPagerAndroid, StatusBar, ToolbarAndroid, WebView } from 'react-native';
import WeatherIcon from '../components/WeatherIcon';
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
    compon () {
        this.onResize();
    }

    onResize = () => {
        let { width, height } = Dimensions.get('window')
        console.log(width, height);

        if (this.state.windowHeight !== height) {
            this.setState({
                windowHeight: height
            });
        }
    }
    capitolizeFirstChar (input: string): string {
        let output = '';
        if (input && input.length > 0) {
            let tmp = input.toLowerCase().substr(1);
            output += input.charAt(0) + tmp;
        }

        return output;
    }

    render () {
        return (
            <View style={{
                backgroundColor: 'rgba(0,0,0,0)',
                alignItems: 'flex-start',
                justifyContent: 'flex-end',
                width: '100%',
                height: this.state.windowHeight - 100,
            }}
            >
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', paddingLeft: 10, }}>
                    <View style={{ width: 20, height: 20 }}>
                        {
                            (this.props.forecastJson as any) !== undefined ?
                                <WeatherIcon weatherID={(this.props.forecastJson as any).results.channel.item.condition.code} />
                                : <View />
                        }
                    </View>

                    <Text style={styles.conditionsText}>
                        {(this.props.forecastJson as any) !== undefined ? this.capitolizeFirstChar((this.props.forecastJson as any).results.channel.item.condition.text) : ''}
                    </Text>
                </View>
                <View style={{ direction: 'ltr', flexDirection: 'row', paddingLeft: 12, }}>
                    <Image source={high} />

                    <Text style={styles.highlowText}>
                        {(this.props.forecastJson as any) !== undefined ? (this.props.forecastJson as any).results.channel.item.forecast[0].high + '°' : ''}
                    </Text>

                    <Image source={low} />

                    <Text style={styles.highlowText} >
                        {(this.props.forecastJson as any) !== undefined ? (this.props.forecastJson as any).results.channel.item.forecast[0].low + '°' : ''}
                    </Text>

                </View>

                <Text style={styles.currentTempText}
                    allowFontScaling={true}
                    adjustsFontSizeToFit={true}
                >
                    {(this.props.forecastJson as any) !== undefined ? (this.props.forecastJson as any).results.channel.item.condition.temp + '°' : ''}
                </Text>


            </View>
        );
    }
}

const low = require('../icons/system/ic_file_download_white_24dp_1x.png');
const high = require('../icons/system/ic_file_upload_white_24dp_1x.png');


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0)',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        width: '100%',
    },

    view: {
        width: '100%'
    },

    conditionsText: {
        color: 'white',
        fontSize: 30,
        fontWeight: '300',
        paddingLeft: 20,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        //fontFamily: 'assets/fonts/nunito_sans_v3_latin_200.ttf',
        fontFamily: 'HelveticaNeueLTStd_Th',
    },

    highlowText: {
        color: 'white',
        fontSize: 20,

        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        //fontFamily: 'assets/fonts/nunito_sans_v3_latin_200.ttf',
        fontFamily: 'HelveticaNeueLTStd_Th',
    },
    currentTempText: {
        color: 'white',
        fontSize: 100,
        fontWeight: '300',
        paddingLeft: 10,
        lineHeight: 110,
        textAlign: 'center',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 3 },
        textShadowRadius: 5,
        fontFamily: 'HelveticaNeueLTStd_Th',
    },
});




