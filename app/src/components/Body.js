import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SearchTimes from './SearchTimes';
import SearchSwimmers from './SearchSwimmers';
import SearchLineups from './SearchLineups';
import SubmitTimes from './SubmitTimes';
import CreateLineup from './CreateLineup';
import CreateSwimmer from './CreateSwimmer';
import CreateMeet from './CreateMeet';

const Body = props => {
  return (
    <div className="BodyContainer">
      <Switch>
        <Route path="/SearchTimes" render={ () => <SearchTimes {...props} /> } /> 
        <Route path="/SearchSwimmers" render={ () => <SearchSwimmers {...props} /> } /> 
        <Route path="/SearchLineups" render={ () => <SearchLineups {...props} /> } /> 
        <Route path="/SubmitTimes" render={ () => <SubmitTimes {...props} /> } /> 
        <Route path="/CreateLineup" render={ () => <CreateLineup {...props} /> } /> 
        <Route path="/CreateSwimmer" render={ () => <CreateSwimmer {...props} /> } /> 
        <Route path="/CreateMeet" render={ () => <CreateMeet {...props} /> } /> 
        <Route component={null} />
      </Switch>
    </div>
  );
};

export default Body;
