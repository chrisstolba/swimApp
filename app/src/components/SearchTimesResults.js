import React from 'react';

const SearchTimesResults = props => {
  if(!props.results || props.results.length === 0) return <div className="SearchTimesResults">No Results</div>;

  console.log(props.results[0].consMen, props.results[0].consWomen)
  const cons = props.results[0].consMen ? props.results[0].consMen : props.results[0].consWomen;
  const auto = props.results[0].autoMen ? props.results[0].autoMen : props.results[0].autoWomen;

  return (
    <div className="SearchTimesResults">
      <h2 className="SearchTimesResultsEvent">{props.results[0].name}</h2>
      <h3 className="SearchTimesEventCon">Cons / Auto -- {cons} / {auto}</h3>
      {props.results.map( result => {
        return (
          <div key={result.id} className="SearchTimesResultItem">
            <span className="SearchTimesResultName">{result.firstname} {result.lastname}
              <span className="SearchTimesResultClassOf"> ({result.class.toString().slice(2,4)})</span>
            </span>
            <span className="SearchTimesResultTime">{result.time}</span>
            <span className="SearchTimesResultDate">({result.date.split('-')[1]}/{result.date.split('-')[2].split('T')[0]}/{result.date.split('-')[0].slice(2,4)})</span>
          </div> 
        );}
      )}
    </div>
  );
};

export default SearchTimesResults;
