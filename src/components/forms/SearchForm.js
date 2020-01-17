import React, { useEffect, useState, useContext } from 'react';
import MatchContext from '../../contexts/matchContext/MatchContext';

export const SearchForm = ({ defaultChoice }) => {
    const matchContext = useContext(MatchContext);
    const { year, setYear, setMatch } = matchContext;

    const onChange = e => {
        console.log('Year changed');
        setYear(e.target.value);
    };

    return (
        <form style={{ maxWidth: '30rem' }}>
            <div className='input-field col s12'>
                <select onChange={onChange} value={defaultChoice}>
                    <option value='choose' disabled>
                        Choose year
                    </option>
                    <option value=''>Current</option>
                    <option value='2018'>2018</option>
                    <option value='2016'>2016</option>
                </select>
                <label>Materialize Select</label>
            </div>
        </form>
    );
};

export default SearchForm;
