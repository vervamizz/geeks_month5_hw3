import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/actions';
import 'bootstrap/dist/css/bootstrap.min.css';

const DataComponent = () => {
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector(state => state);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if (loading) {
        return <div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div>;
    }

    if (error) {
        return <div className="alert alert-danger" role="alert">{error}</div>;
    }

    return (
        <div>
            <h2>Data:</h2>
            <ul className="list-group">
                {data.map(item => (
                    <li key={item.id} className="list-group-item">{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default DataComponent;
