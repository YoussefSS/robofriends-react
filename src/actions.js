import { CHANGE_SEARCH_FIELD } from "./constants"

// Text in the input is what the user is typing
// payload is what will be sent to the reducer
// All actions should have a type and payload
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})