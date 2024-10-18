import {applyMiddleware, createStore} from "redux";
import {thunk} from "redux-thunk";
import {personReducer} from "../reducer/personsReducer";

const store = createStore(personReducer, applyMiddleware(thunk));
export default store