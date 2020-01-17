import React, { useEffect, useContext } from 'react';
import MatchContext from '../../contexts/matchContext/MatchContext';
import DateAndTeamsItem from './DateAndTeamsItem';

export const DateAndTeams = () => {
    const matchContext = useContext(MatchContext);
    const { matches } = matchContext;

    useEffect(() => {}, [matches]);

    return (
        <div className='collection'>
            <div className='collection-item'>
                <div className='row'>
                    <div className='col s6'>
                        <strong>Date</strong>
                    </div>
                    <div className='col s3'>
                        <strong>Team 1</strong>
                    </div>
                    <div className='col s3'>
                        <strong>Team 2</strong>
                    </div>
                </div>
            </div>
            {matches.map(match => {
                return <DateAndTeamsItem key={match.MatchID} match={match} />;
            })}
        </div>
    );
};

export default DateAndTeams;
