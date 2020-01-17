import React from 'react';

export const DateAndTeamsItem = ({ match }) => {
    const { MatchDateTime, Team1, Team2, MatchResults } = match;
    const date = MatchDateTime;

    const endResults = [...MatchResults].filter(result => result.ResultName === 'Endergebnis');
    const { PointsTeam1, PointsTeam2 } = { ...endResults[0] };

    console.log(PointsTeam1, PointsTeam2);

    const isTeam1Winner = PointsTeam1 > PointsTeam2;

    return (
        <div className='collection-item'>
            <div className='row'>
                <div className='col s6'>{date}</div>
                <div className={`col s3 team-item ${isTeam1Winner ? 'green-text' : 'red-text'}`}>
                    <span className='mr-1'>
                        <img className='responsive-img' src={Team1.TeamIconUrl} alt='' style={{ maxHeight: '30px' }} />
                    </span>
                    {Team1.TeamName}
                </div>
                <div className={`col s3 team-item ${isTeam1Winner ? 'red-text' : 'green-text'}`}>
                    <span className='mr-1'>
                        <img className='responsive-img' src={Team2.TeamIconUrl} alt='' style={{ maxHeight: '30px' }} />
                    </span>
                    {Team2.TeamName}
                </div>
            </div>
        </div>
    );
};

export default DateAndTeamsItem;
