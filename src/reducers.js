import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants"

// Reducers will act accordingly to the action type which is defined in actions.js
// Reducers receive all action types, but we filter out the one we need

// We need to create the initial state
const initialStateSearch = {
    searchField: ''
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

// This is our reducer, they get an input state and action. If the action is relevant, we act on it and return a new state
// We set the default values of state to initialState, action to {}
export const searchRobots = (state = initialStateSearch, action = {}) => {
    switch(action.type)
    {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload}); // We are returning a new state that has everything in the original state, but only searchField is changed and set to the payload
            // or: return { ...state, {searchField: action.payload}}
        default:
            return state;
    }
}

export const requestRobots = (state=initialStateRobots, action={}) => {
    switch(action.type)
    {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robots: action.payload, isPending: false});
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        default:
            return state;
    }
}