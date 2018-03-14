
import { SHOW_ADD_NEW_LOCATION, ShowNewLocationAction } from '../actions/ShowNewLocationAction';
import { WeatherAppStore } from '../store/WeatherAppStore';

export default function showNewLocationReducer (currentState: WeatherAppStore.ShowNewLocationStore, action: ShowNewLocationAction | any): WeatherAppStore.ShowNewLocationStore {
    if (currentState === undefined) {
        currentState = { visible: false };
    }

    switch (action.type) {
        case SHOW_ADD_NEW_LOCATION:
            return { visible: action.visible };
        default:
            return currentState;
    }
}

export { showNewLocationReducer };
