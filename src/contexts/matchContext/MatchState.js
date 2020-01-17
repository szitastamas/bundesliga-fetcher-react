import React, { useContext, useReducer } from 'react';
import MatchContext from './MatchContext';
import MatchReducer from './MatchReducer';
import axios from 'axios';
import { SET_MATCH, SET_YEAR, RESET_YEAR, RESET_MATCH, TRIGGER_LOADING } from '../reducerTypes';

export const MatchState = props => {
    const initialState = {
        year: '',
        matches: [],
        match: null,
        loading: true
    };

    const [state, dispatch] = useReducer(MatchReducer, initialState);

    const loadCurrentBL = async () => {
        const res = await axios.get(`https://www.openligadb.de/api/getmatchdata/bl1/`);
        const matchesOfYear = await res.data;

        dispatch({
            type: SET_YEAR,
            payload: {
                year: '',
                matches: matchesOfYear
            }
        });
    };

    const setYear = async year => {
        // triggerLoading();

        const res = await axios.get(`https://www.openligadb.de/api/getmatchdata/bl1/${year}`);
        const matchesOfYear = await res.data;

        dispatch({
            type: SET_YEAR,
            payload: {
                year,
                matches: matchesOfYear
            }
        });
    };

    const clearYear = () => {};

    const setMatch = matchId => {};

    const clearMatch = () => {};

    const triggerLoading = () => {
        dispatch({
            type: TRIGGER_LOADING
        });
    };

    return (
        <MatchContext.Provider
            value={{
                year: state.year,
                matches: state.matches,
                match: state.match,
                loading: state.loading,
                loadCurrentBL,
                setYear,
                setMatch,
                clearYear,
                clearMatch
            }}
        >
            {props.children}
        </MatchContext.Provider>
    );
};

export default MatchState;
