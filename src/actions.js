import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants"

// Actions are simple functions which return an object

// Text in the input is what the user is typing
// payload is what will be sent to the reducer
// All actions should have a type and payload
export const setSearchField = (text) => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
}

// A function that returns a function
// Redux out of the box, will NOT understand this function as it's not returning an object as it expects, we are returning a function
// By using redux-thunk as middleware, we are now listening to actions, and seeing if one of them returns a function. 
// Redux thunk sees this as a function, so it passes in 'dispatch' allowing us to call actions manually
export const requestRobots = () => 
    (dispatch) => {
        dispatch({type: REQUEST_ROBOTS_PENDING}); // First we dispatch that we are pending (without a payload)

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({type:REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({type:REQUEST_ROBOTS_FAILED, payload: error}));
}