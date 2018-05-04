import MappedLocation from '../structures/MappedLocation';

// action strings
const ADD_LOCATION = 'ADD_LOCATION';
type ADD_LOCATION = typeof ADD_LOCATION;

const REMOVE_LOCATION = 'REMOVE_LOCATION';
type REMOVE_LOCATION = typeof REMOVE_LOCATION;

// action type
interface AddLocationAction {
    type: string;
    location: MappedLocation;
}
interface RemoveLocationAction {
    type: string;
    location: MappedLocation;
}

// actions
function addLocation (location: MappedLocation): AddLocationAction {
    return {
        type: ADD_LOCATION,
        location: location,
    };
}

function removeLocation (location: MappedLocation): RemoveLocationAction {
    return {
        type: REMOVE_LOCATION,
        location: location,
    };
}

export { addLocation, removeLocation, AddLocationAction, RemoveLocationAction, ADD_LOCATION, REMOVE_LOCATION };