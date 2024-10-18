import {FETCH_USERS} from "../actions/actions";

const initialState = {
    persons: [],
}


export const personReducer = (state = initialState,action) => {
    if (action.type === FETCH_USERS) {
        return {
            ...state,
            persons: action.payload,
        }
    }
    return state;
}

