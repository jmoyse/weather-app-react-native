import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export interface WeatherIconProps {
    weatherID: number;
}

export interface WeatherIconState { }

const blowingsnow = require('../icons/weather/blowing-snow.png');
const cloudy = require('../icons/weather/cloudy.png');
const drizzle = require('../icons/weather/drizzle.png');
const fair = require('../icons/weather/fair.png');
const flurries = require('../icons/weather/flurries.png');
const fog = require('../icons/weather/fog.png');
const freezingrain = require('../icons/weather/freezing-rain.png');
const hazy = require('../icons/weather/hazy.png');
const mcloudynight = require('../icons/weather/m-cloudy-night.png');
const mcloudy = require('../icons/weather/m-cloudy.png');
const pcnight = require('../icons/weather/p-c-night.png');
const pcrain = require('../icons/weather/p-c-rain.png');
const rainysnow = require('../icons/weather/rainy-snow.png');
const rainy = require('../icons/weather/rainy.png');
const showers = require('../icons/weather/showers.png');
const sleet = require('../icons/weather/sleet.png');
const smoke = require('../icons/weather/smoke.png');
const snowshower = require('../icons/weather/snow-shower.png');
const snow = require('../icons/weather/snow.png');
const sunny = require('../icons/weather/sunny.png');
const tstormrain = require('../icons/weather/t-storm-rain.png');
const thunderstorm = require('../icons/weather/thunder-storm.png');
const wind = require('../icons/weather/wind.png');

let json = {
    0: thunderstorm, //'tornado'
    1: tstormrain, //'tropical storm'
    2: thunderstorm, //'hurricane'
    3: thunderstorm, //'severe thunderstorms'
    4: thunderstorm, //'thunderstorms'
    5: rainysnow, //'mixed rain and snow'
    6: sleet, //'mixed rain and sleet'
    7: sleet, //'mixed snow and sleet'
    8: drizzle, //'freezing drizzle'
    9: drizzle, //'drizzle'
    10: freezingrain, //'freezing rain'
    11: showers, //'showers'
    12: showers, //'showers'
    13: flurries, //'snow flurries'
    14: snowshower, //'light snow showers'
    15: blowingsnow, //'blowing snow'
    16: snow, //'snow'
    17: freezingrain, //'hail'
    18: sleet, //'sleet'
    19: hazy, //'dust'
    20: fog, //'foggy'
    21: hazy, //'haze'
    22: smoke, //'smoky'
    23: wind, //'blustery'
    24: wind, //'windy'
    25: fair, //'cold'
    26: cloudy, //'cloudy'
    27: mcloudynight, //'mostly cloudy (night)'
    28: mcloudy, //'mostly cloudy (day)'
    29: pcnight, //'partly cloudy (night)'
    30: pcrain, //'partly cloudy (day)'
    31: sunny, //'clear (night)'
    32: sunny, //'sunny'
    33: fair, //'fair (night)'
    34: fair, //'fair (day)'
    35: rainy, //'mixed rain and hail'
    36: sunny, //'hot'
    37: thunderstorm, //'isolated thunderstorms'
    38: thunderstorm, //'scattered thunderstorms'
    39: thunderstorm, //'scattered thunderstorms'
    40: showers, //'scattered showers'
    41: snow, //'heavy snow'
    42: snowshower, //'scattered snow showers'
    43: snow, //'heavy snow'
    44: pcrain, //'partly cloudy'
    45: thunderstorm, //'thundershowers'
    46: snowshower, //'snow showers'
    47: thunderstorm, //'isolated thundershowers'
};

class WeatherIcon extends React.Component<WeatherIconProps, WeatherIconState> {
    constructor (props: WeatherIconProps) {
        super(props);
    }

    render () {
        return (
            <Image
                style={styles.image}
                source={this.props.weatherID >= 0 ? json[this.props.weatherID] : ''}
            />
        );
    }
}

const styles = StyleSheet.create({
    image: {
        padding: 20,
        height: 30,
        width: 30,
    },
});

export default WeatherIcon;
