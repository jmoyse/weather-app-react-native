// action strings
const SHOW_ADD_NEW_LOCATION = 'SHOW_ADD_NEW_LOCATION';
type SHOW_ADD_NEW_LOCATION = typeof SHOW_ADD_NEW_LOCATION;

// action type
interface ShowNewLocationAction {
    type: string;
    visible: boolean;
}

// actions
function setLocationWindowVisible (visible: boolean): ShowNewLocationAction {
    return {
        type: SHOW_ADD_NEW_LOCATION,
        visible: visible,
    };
}

export { setLocationWindowVisible, ShowNewLocationAction, SHOW_ADD_NEW_LOCATION };
