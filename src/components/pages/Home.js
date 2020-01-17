import React, { useEffect, useState, useContext } from 'react';
import MatchContext from '../../contexts/matchContext/MatchContext';
import SearchForm from '../forms/SearchForm';
import { Loading } from '../utility/loading/Loading';
import DateAndTeams from '../matches/DateAndTeams';

export const Home = () => {
    const matchContext = useContext(MatchContext);
    const { year, loading, setYear, loadCurrentBL, setMatch } = matchContext;

    useEffect(() => {
        loadCurrentBL();
        // eslint-disable-next-line
    }, []);

    return (
        <div className='container'>
            <h3>Welcome! You can see the Bundesliga matches from {year === '' ? 'this year' : year}</h3>
            <SearchForm defaultChoice={'choose'} />
            {loading ? <Loading /> : <DateAndTeams />}
        </div>
    );
};

export default Home;
