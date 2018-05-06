import * as React from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Dimensions, Image, ViewPagerAndroid, DrawerLayoutAndroid, Button, ViewPagerAndroidStatic, NativeSyntheticEvent, ViewPagerAndroidOnPageSelectedEventData } from 'react-native';
import SubSection from '../components/SubSection';
import HomeWeather from './HomeWeather';
import Forecast from './Forecast';
import Precipitation from './Precipitation';
import DetailedWeather from './DetailedWeather';
import SunMoon from './SunMoon';
import WindPressure from './WindPressure';
import WeatherMap from './WeatherMap';
import HeaderBar from '../views/HeaderBar';
import FontStyles from '../styles/FontStyles';

interface WeatherLocationProps {
    zipcode: number;
}

interface WeatherLocationState {
    forecastJson: Object;
}
export default class WeatherLocation extends React.Component<WeatherLocationProps, WeatherLocationState> {
    private UPDATE_TIME_IN_MS: number = 60 * 1000; // update time in seconds
    private updateTimer: number = 0;
    private selectedBackground = Math.floor(Math.random() * backgrounds.length);

    constructor (props: WeatherLocationProps) {
        super(props);
        this.state = {
            forecastJson: new Object(),
        };
        this.updateTimer = window.setInterval(() => this.onTimerTick(this.UPDATE_TIME_IN_MS), this.UPDATE_TIME_IN_MS);
    }

    componentDidMount () {
        this.onNewZipcode();
        console.log('selected background ' + this.selectedBackground);
    }

    componentWillReceiveProps (nextProps: WeatherLocationProps, nextState: WeatherLocationState) {
        if (this.props.zipcode !== nextProps.zipcode) { // checking if the zipcode is different
            let validZip: boolean = nextProps.zipcode.toString().length === 5; // make sure its a zipcode of length 5
            if (validZip) { // update if changed
                this.onNewZipcode();
            }
        }
    }

    componentDidUpdate (nextProps: WeatherLocationProps, nextState: WeatherLocationState) {
        let validZip: boolean = this.props.zipcode.toString().length === 5; // make sure its a zipcode of length 5
        let zipChanged: boolean = this.props.zipcode !== nextProps.zipcode;

        if (validZip && zipChanged) { // update if changed
            this.onNewZipcode();
        }
    }

    onTimerTick = (date: number) => {
        this.onNewZipcode();
    }

    onNewZipcode () {
        // tslint:disable-next-line:max-line-length
        // this should be a lot cleaner
        let url =
            /*  Using woeid */
            /*
            'https://query.yahooapis.com/v1/public/yql?q=' +
            'select%20*%20from%20weather.forecast%20where%20woeid%20%3D%20' +
            this.props.zipcode.toString() +
            '&format=json&env=' +
            'store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
            */

            /*  Using zipcode */
            ///*
            'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22' +
            this.props.zipcode.toString() +
            '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

        fetch(url).then(response => { // TOOD: Add some error checking if this doesn't come back successful
            if (response.ok) {
                response.json().then(function (jsonResult: any, ) {
                    this.setState({ forecastJson: jsonResult.query });
                }.bind(this))

                return;
            }
        });
    }


    render () {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.backgroundImage}
                    source={backgrounds[this.selectedBackground]}
                    blurRadius={0.1}
                />
                <HeaderBar forecastJson={(this.state.forecastJson as any).results ? (this.state.forecastJson as any).results : undefined} />
                <ScrollView >
                    {/* <Button title="press me" onPress={() => { (this.refs['MENU'] as any).openDrawer() }} /> */}


                    <HomeWeather forecastJson={(this.state.forecastJson as any).results ? (this.state.forecastJson as any) : undefined} />
                    <Forecast forecastJson={(this.state.forecastJson as any).results ? (this.state.forecastJson as any) : undefined} />
                    <DetailedWeather forecastJson={(this.state.forecastJson as any).results ? (this.state.forecastJson as any) : undefined} />
                    <WindPressure forecastJson={(this.state.forecastJson as any).results ? (this.state.forecastJson as any) : undefined} />

                    {
                        /*
                        <WeatherMap forecastJson={(this.state.forecastJson as any).results ? (this.state.forecastJson as any) : undefined} />
                        <Precipitation forecastJson={(this.state.forecastJson as any).results ? (this.state.forecastJson as any) : undefined} />
                        */
                    }
                    <SunMoon forecastJson={(this.state.forecastJson as any).results ? (this.state.forecastJson as any) : undefined} />
                    <SubSection>
                        <Text style={styles.text}>Data Provided by: </Text>
                        <Image source={yahoo} />
                    </SubSection>
                </ScrollView>
            </View>

        );
    }
}

/* Images */
const yahoo = require('../icons/yahoo.png');
const background0 = require('../backgrounds/city-background-1.jpg');
const background1 = require('../backgrounds/city-background-2.jpg');
const background2 = require('../backgrounds/city-background-3.jpg');
const background3 = require('../backgrounds/city-background-4.jpg');
const background4 = require('../backgrounds/nature-day-1.jpg');
const background5 = require('../backgrounds/nature-day-2.jpg');
const background6 = require('../backgrounds/nature-day-3.jpg');
const background7 = require('../backgrounds/nature-day-4.jpg');
const background8 = require('../backgrounds/nature-day-5.jpg');
const background9 = require('../backgrounds/nature-dusk-1.jpg');
const background10 = require('../backgrounds/nature-dusk-2.jpg');
//const background11 = require('../backgrounds/nature-dusk-3.jpg');
const background12 = require('../backgrounds/nature-night-1.jpg');
//const background13 = require('../backgrounds/night-sky-1.jpg');
const background14 = require('../backgrounds/suburb-background-1.jpg');
const background15 = require('../backgrounds/430844.jpg');
const background16 = require('../backgrounds/430865.jpg');
const background17 = require('../backgrounds/431020.jpg');
const background18 = require('../backgrounds/431092.jpg');
const background19 = require('../backgrounds/431412.jpg');
const background20 = require('../backgrounds/431964.jpg');
const background21 = require('../backgrounds/431998.jpg');

const backgrounds = [background0, background1, background2, background3, background4, background5, background6, background7, background8, background9, background10, background12, background14, background15, background16, background17, background18, background19, background20, background21];

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: Dimensions.get('window').width,
        //flex: 1,
        //overflow: 'hidden'
    },
    backgroundImage: {
        position: 'absolute'
    },
    viewPager: {
        flex: 1,
    },
    text: {
        color: 'white',
        textAlign: 'left',
        fontFamily: FontStyles.Thin,
        fontSize: 12,
    }
});
