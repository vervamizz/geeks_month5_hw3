import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncDataPersons} from "./actions/actions";

const App = () => {
    const persons = useSelector((state) => state.persons)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncDataPersons())
    },[])
    console.log(persons)
    return (
        <div>
          <h1>hello world</h1>
        </div>
    );
};

export default App;