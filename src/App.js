import React from 'react';
import Home from './components/pages/Home';
import MatchState from './contexts/matchContext/MatchState';

const App = () => {
    return (
        <MatchState>
            <Home />
        </MatchState>
    );
};

export default App;
