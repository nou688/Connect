export const DATA_AVAILABLE = 'DATA_AVAILABLE';

//Import the data
import Data from '../instructions.json';

export function getData(){
    return (dispatch) => {

        //Make API Call
        setTimeout(() => {
            var data  = Data.instructions;
            dispatch({type: DATA_AVAILABLE, data:data});
        }, 2000);

    };
}
// The action, a basic function called from the component
// whenever we want the whole state of the app to be changed
//Our action creator is a simple function returning an object (the action itself)
// with a type attribute expressing what happened with the app.
