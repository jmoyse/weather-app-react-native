import * as React from 'react';
import { StyleSheet, Text, Button, View, ScrollView, TextInput, Image, TouchableOpacity, ViewPagerAndroid, StatusBar, ToolbarAndroid, WebView } from 'react-native';
import WeatherDay from './components/WeatherDay';
import ForecastBox from './components/ForecastBox';
import HeaderBar from './views/HeaderBar';
import HomeWeather from './views/HomeWeather';
import Forecast from './views/Forecast';
import Precipitation from './views/Precipitation';
import DetailedWeather from './views/DetailedWeather';
import SunMoon from './views/SunMoon';
import WindPressure from './views/WindPressure';
import WeatherMap from './views/WeatherMap';
import AddNewLocation from './views/AddNewLocation';
import { store, WeatherAppStore } from './store/WeatherAppStore';
import { Provider, connect } from 'react-redux';


type ClassNames = keyof typeof styles;

function mapStateToProps (storeState: WeatherAppStore.Stores): WeatherAppStore.LocationStore {
    return {
        locations: storeState.LocationStore.locations,
    };
}


export interface WeatherAppProps {
    locations: Array<String>;

}

export interface WeatherAppState {
    zipcode: number;
    json: Object;
}

const background = require('./backgrounds/city-background-1.jpg');
const background2 = require('./backgrounds/city-background-2.jpg');
const background3 = require('./backgrounds/city-background-4.jpg');
const plusIcon = require('./icons/system/ic_plus_white_24dp.png');

class AppRedux extends React.Component<WeatherAppProps, WeatherAppState> {
    private UPDATE_TIME_IN_MS: number = 60 * 1000; // update time in seconds
    private updateTimer: number = 0;

    constructor (props: WeatherAppProps) {
        super(props);
        this.state = { zipcode: 0, json: new Object() };
        this.updateTimer = window.setInterval(() => this.onTimerTick(this.UPDATE_TIME_IN_MS), 1000);
    }

    componentDidMount () {
        this.setState({ zipcode: 20852 });
    }

    componentDidUpdate (nextProps: WeatherAppProps, nextState: WeatherAppState) {
        let validZip: boolean = this.state.zipcode.toString().length === 5; // make sure its a zipcode of length 5
        let zipChanged: boolean = this.state.zipcode !== nextState.zipcode;

        if (validZip && zipChanged) { // update if changed
            this.onNewZipcode();
        }
    }

    onTimerTick = (date: number) => {
        this.onNewZipcode();
    }

    onNewZipcode () {
        // tslint:disable-next-line:max-line-length
        let url =
            'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22' +
            this.state.zipcode +
            '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

        fetch(url).then(response => { // TOOD: Add some error checking if this doesn't come back successful
            if (response.ok) {
                response.json().then(function (jsonResult: any, ) {
                    this.setState({ json: jsonResult.query });
                }.bind(this));
                return;
            }
        });
    }

    render () {
        return (
            <Provider store={store}>
                <View style={styles.container} >

                    <Image
                        style={styles.backgroundImage}
                        source={background}
                        blurRadius={0.1}
                    />


                    <HeaderBar forecastJson={(this.state.json as any).results ? (this.state.json as any).results : undefined} />

                    <AddNewLocation />

                    <ViewPagerAndroid style={styles.viewPager} initialPage={0} >
                        <View>
                            <ScrollView>
                                {
                                    /* For checking what locations are in the locationstore */

                                    /*
                                    <Text style={{ color: 'white' }}>Locations: </Text>
                                    */
                                }

                                {
                                    /*
                                    this.props.locations ? this.props.locations.map(location =>
                                        <Text style={{ color: 'white' }} key={Math.random() * 10000}>{location}</Text>) : <Text style={{ color: 'white' }} key={Math.random() * 10000}>hello</Text>

                                    */
                                }


                                <HomeWeather forecastJson={(this.state.json as any).results ? (this.state.json as any) : undefined} />
                                <Forecast forecastJson={(this.state.json as any).results ? (this.state.json as any) : undefined} />

                                <DetailedWeather forecastJson={(this.state.json as any).results ? (this.state.json as any) : undefined} />

                                <WindPressure forecastJson={(this.state.json as any).results ? (this.state.json as any) : undefined} />
                                {
                                    /*
                                    <Precipitation forecastJson={(this.state.json as any).results ? (this.state.json as any) : undefined} />
                                    */
                                }
                                {
                                    /*
                                    <WeatherMap forecastJson={(this.state.json as any).results ? (this.state.json as any) : undefined} />
                                    */
                                }
                                <SunMoon forecastJson={(this.state.json as any).results ? (this.state.json as any) : undefined} />

                            </ScrollView>
                        </View>
                        <View>
                            <Text>Not Yet Implemented </Text>
                        </View>
                    </ViewPagerAndroid>

                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        overflow: 'hidden'
    },
    backgroundImage: {
        position: 'absolute'
    },
    viewPager: {
        flex: 1,
        width: '100%'
    },
});


const ProviderApp = connect(mapStateToProps)(AppRedux);

// Kind of wonky, but we need the wrap the entire app in a Provider
// if this wasn't Typescript then I'd move it up to the parent file (index.js)
// however since thats javascript and this is typescript the two wont play nicely.
// so we wrap the provider component in a dummy component.
const App = () => (
    <Provider store={store}>
        <ProviderApp />
    </Provider>
);

export default App;
