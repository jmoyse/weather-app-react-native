import * as React from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image, ViewPagerAndroid, DrawerLayoutAndroid, Button, ViewPagerAndroidStatic, NativeSyntheticEvent, ViewPagerAndroidOnPageSelectedEventData } from 'react-native';
import { store, WeatherAppStore } from './store/WeatherAppStore';
import { Provider, connect } from 'react-redux';
import AddNewLocation from './views/AddNewLocation';
import SubSection from './components/SubSection';
import HamburgerMenu from './components/HamburgerMenu';
import HeaderBar from './views/HeaderBar';
import WeatherLocation from './views/WeatherLocation';



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

    //json: Object;
    drawerVisible: boolean;
    selectedIndex: number;
}


const plusIcon = require('./icons/system/ic_plus_white_24dp.png');


class AppRedux extends React.Component<WeatherAppProps, WeatherAppState> {
    private UPDATE_TIME_IN_MS: number = 60 * 1000; // update time in seconds
    private updateTimer: number = 0;

    constructor (props: WeatherAppProps) {
        super(props);
        this.state = {
            //zipcode: 0,
            //json: new Object(),
            drawerVisible: false,
            selectedIndex: 0
        };
        //this.updateTimer = window.setInterval(() => this.onTimerTick(this.UPDATE_TIME_IN_MS), 1000);
    }

    componentDidMount () {
        //this.setState({ zipcode: 20852 });
    }

    /*
    componentDidUpdate (nextProps: WeatherAppProps, nextState: WeatherAppState) {
        let validZip: boolean = this.state.zipcode.toString().length === 5; // make sure its a zipcode of length 5
        let zipChanged: boolean = this.state.zipcode !== nextState.zipcode;

        if (validZip && zipChanged) { // update if changed
            this.onNewZipcode();
        }
    }
    */

    onNewPageSelected = (event: NativeSyntheticEvent<ViewPagerAndroidOnPageSelectedEventData>) => {
        this.setState({ selectedIndex: event.nativeEvent.position });
        //this.setState({ zipcode: this.props.locations[this.state.selectedIndex] });

    }

    /*
    onTimerTick = (date: number) => {
        this.onNewZipcode();
    }
    */




    /*
    navigationView = (
        
    );
    */

    render () {
        return (



            <View style={{ height: '100%' }}>

                {
                    (Platform.OS === 'android') ?
                        /* TODO: this is insanely messy. fix this */

                        <DrawerLayoutAndroid
                            drawerWidth={300}
                            drawerPosition={DrawerLayoutAndroid.positions.Left}
                            renderNavigationView={() => <HamburgerMenu />}
                            ref={'MENU'}
                        >


                            <View style={styles.container} >
                                <AddNewLocation />

                                <ViewPagerAndroid
                                    style={styles.viewPager}
                                    initialPage={0}
                                    onPageSelected={(event) => { }}
                                >
                                    {
                                        this.props.locations ? this.props.locations.map(location =>
                                            <View key={location.toString()}>
                                                <WeatherLocation zipcode={Number.parseInt(location.toString())} />
                                            </View>
                                        ) : <View />
                                    }


                                </ViewPagerAndroid>
                            </View>

                        </DrawerLayoutAndroid>

                        :

                        <View style={styles.container} >
                            <AddNewLocation />


                            {
                                this.props.locations ? this.props.locations.map(location =>
                                    <View key={location.toString()}>
                                        <WeatherLocation zipcode={Number.parseInt(location.toString())} />
                                    </View>
                                ) : <View />
                            }
                        </View>
                }

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        overflow: 'hidden'
    },

    viewPager: {
        flex: 1,
        width: '100%'
    },
    text: {
        color: 'white',
        textAlign: 'left',
        fontFamily: 'HelveticaNeueLTStd_Lt',
        fontSize: 12,
    }
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