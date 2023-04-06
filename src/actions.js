import { CHANGE_SEARCH_FIELD } from "./constants"

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