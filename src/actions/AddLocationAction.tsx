// action strings
const ADD_LOCATION = 'ADD_LOCATION';
type ADD_LOCATION = typeof ADD_LOCATION;

const REMOVE_LOCATION = 'REMOVE_LOCATION';
type REMOVE_LOCATION = typeof REMOVE_LOCATION;

// action type
interface AddLocationAction {
    type: string;
    location: string;
}
interface RemoveLocationAction {
    type: string;
    location: string;
}

// actions
function addLocation (location: string): AddLocationAction {
    return {
        type: ADD_LOCATION,
        location: location,
    };
}

function removeLocation (location: string): RemoveLocationAction {
    return {
        type: REMOVE_LOCATION,
        location: location,
    };
}

export { addLocation, removeLocation, AddLocationAction, RemoveLocationAction, ADD_LOCATION, REMOVE_LOCATION };
