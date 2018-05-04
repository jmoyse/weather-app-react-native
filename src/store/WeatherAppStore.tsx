import reducer from '../reducers/';
import { createStore } from 'redux';
import MappedLocation from '../structures/MappedLocation';

namespace WeatherAppStore {
    export type ShowNewLocationStore = { visible: boolean };
    export type LocationStore = { locations: Array<MappedLocation> };

    export type Stores = {
        ShowNewLocationStore: ShowNewLocationStore;
        LocationStore: LocationStore;
    };
}


const store = createStore(reducer);

export default WeatherAppStore;
export { store, WeatherAppStore };
