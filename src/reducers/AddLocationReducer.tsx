
import { ADD_LOCATION, REMOVE_LOCATION, AddLocationAction } from '../actions/AddLocationAction';
import { WeatherAppStore } from '../store/WeatherAppStore';

export default function addLocationReducer (currentState: WeatherAppStore.LocationStore, action: AddLocationAction | any): WeatherAppStore.LocationStore {
    if (currentState === undefined) {
        currentState = {
            locations: ['94102', '21044']
        };
    }

    switch (action.type) {
        case ADD_LOCATION:
            return { locations: [...currentState.locations, action.location] };
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
