import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { isNumber, isString } from 'util';

export interface WeatherIconProps {
    weatherID: number;
}
export interface WeatherIconState { }

const blowingsnow = require('../icons/weather2/20.png');
const cloudy = require('../icons/weather2/03.png');
const drizzle = require('../icons/weather2/10.png');
const fair = require('../icons/weather2/04.png');
const flurries = require('../icons/weather2/23.png');
const fog = require('../icons/weather2/09.png');
const freezingrain = require('../icons/weather2/10.png');
const hazy = require('../icons/weather2/05.png');
const mcloudynight = require('../icons/weather2/34.png');
const mcloudy = require('../icons/weather2/06.png');
const pcnight = require('../icons/weather2/31.png');
const pcrain = require('../icons/weather2/11.png');
const rainysnow = require('../icons/weather2/25.png');
const rainy = require('../icons/weather2/16.png');
const showers = require('../icons/weather2/10.png');
const sleet = require('../icons/weather2/25.png');
const smoke = require('../icons/weather2/41.png');
const snowshower = require('../icons/weather2/22.png');
const snow = require('../icons/weather2/23.png');
const sunny = require('../icons/weather2/01.png');
const tstormrain = require('../icons/weather2/13.png');
const thunderstorm = require('../icons/weather2/13.png');
const wind = require('../icons/weather2/41.png');
const blank = require('../icons/Blank.png');
export const BLANK_ID = 99;

export const icons = {
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
    99: blank // blank image
};

export class WeatherIcon extends React.Component<WeatherIconProps, WeatherIconState> {
    constructor (props: WeatherIconProps) {
        super(props);
    }

    public getImageById (id: Object): Object {
        if (isString(id)) {
            id = Number.parseInt(id);
        }

        let imageID = BLANK_ID; // blank image

        if (id !== null && isNumber(id)) {
            let path = icons[id];
            if (path) {
                imageID = id;
            }
        }
        return icons[imageID];
    }

    render () {
        return (
            <Image
                style={styles.image}
                source={this.getImageById(this.props.weatherID)}
            />
        );
    }
}

const styles = StyleSheet.create({
    image: {
        padding: 15,
        flex: 1,
        width: undefined,
        height: undefined
    },
});

export default WeatherIcon;