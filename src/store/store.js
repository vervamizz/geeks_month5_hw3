import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {thunk} from 'redux-thunk';
import dataReducer from '../reducer/reducer';

const store = createStore(dataReducer, applyMiddleware(thunk));

export const ReduxProvider = ({ children }) => (
    <Provider store={store}>{children}</Provider>
);
