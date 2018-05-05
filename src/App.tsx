import * as React from 'react';
import { Platform, StyleSheet, Text, View, FlatList, ScrollView, Image, StatusBar, ViewPagerAndroid, DrawerLayoutAndroid, Button, NativeSyntheticEvent, ViewPagerAndroidOnPageSelectedEventData } from 'react-native';
import { store, WeatherAppStore } from './store/WeatherAppStore';
import { Provider, connect } from 'react-redux';
import AddNewLocation from './views/AddNewLocation';
import SubSection from './components/SubSection';
import HamburgerMenu from './components/HamburgerMenu';
import HeaderBar from './views/HeaderBar';
import WeatherLocation from './views/WeatherLocation';
import MappedLocation from './structures/MappedLocation';

type ClassNames = keyof typeof styles;

function mapStateToProps (storeState: WeatherAppStore.Stores): WeatherAppStore.LocationStore {
    return {
        locations: storeState.LocationStore.locations,
    };
}

export interface WeatherAppProps {
    locations: Array<MappedLocation>;
}

export interface WeatherAppState {
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
            drawerVisible: false,
            selectedIndex: 0
        };
    }

    componentWillReceiveProps (nextProps: WeatherAppProps, nextState: WeatherAppState) {
        //console.log(nextProps.locations);
    }
    onNewPageSelected = (event: NativeSyntheticEvent<ViewPagerAndroidOnPageSelectedEventData>) => {
        this.setState({ selectedIndex: event.nativeEvent.position });
    }

    render () {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <AddNewLocation />

                <FlatList

                    pagingEnabled={true}
                    data={this.props.locations}

                    horizontal={true}

                    renderItem={
                        ({ item }) =>
                            <View>
                                <WeatherLocation
                                    zipcode={Number.parseInt((item.zipcode || 0).toString())}
                                />
                            </View>
                    }
                />

                {

                    /*
                    (Platform.OS === 'android') ?

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
                                            <View key={location.toString()} style={styles.container}>
                                                <WeatherLocation zipcode={Number.parseInt(location.toString())} />
                                            </View>
                                        ) : <View />
                                    }
                                </ViewPagerAndroid>
                            </View>

                        </DrawerLayoutAndroid> :
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
                        */
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
        height: 200
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