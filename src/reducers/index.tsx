import { combineReducers } from 'redux';
import { showNewLocationReducer } from './ShowNewLocationReducer';
import { addLocationReducer } from './AddLocationReducer';



export default combineReducers({
    ShowNewLocationStore: showNewLocationReducer,
    LocationStore: addLocationReducer
});

export {
    combineReducers,
    showNewLocationReducer,
};
