
import { ADD_LOCATION, REMOVE_LOCATION, AddLocationAction } from '../actions/AddLocationAction';
import { WeatherAppStore } from '../store/WeatherAppStore';

export default function addLocationReducer (currentState: WeatherAppStore.LocationStore, action: AddLocationAction | any): WeatherAppStore.LocationStore {
    if (currentState === undefined) {
        currentState = {
            locations: new Array<String>()
        };
    }

    switch (action.type) {
        case ADD_LOCATION:
            return { locations: [action.location, ...currentState.locations] };
        case REMOVE_LOCATION:
            let newLocations = [...currentState.locations];
            let index = newLocations.indexOf(action.location);
            if (index > -1) {
                newLocations.splice(index);
            }
            return { locations: newLocations };
        default:
            return currentState;
    }
}

export { addLocationReducer };
