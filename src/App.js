import React from 'react';
import { ReduxProvider } from 'src/store/store.js';
import DataComponent from '../src/components/data';

const App = () => {
    return (
        <ReduxProvider>
            <div className="container">
                <h1>My App</h1>
                <DataComponent />
            </div>
        </ReduxProvider>
    );
};

export default App;
