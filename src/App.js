import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, filterByTitle } from './store/dataSlice';

const App = () => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.data);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
        dispatch(filterByTitle(e.target.value));
    };

    return (
        <div>
            <h1>API Data</h1>
            <input
                type="text"
                placeholder="Filter by title"
                value={filter}
                onChange={handleFilterChange}
            />
            {loading && <p>Loading...</p>}
            {error && <p>{`Error: ${error}`}</p>}
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
