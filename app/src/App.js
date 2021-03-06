import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";

import "./Main.css";

function App() {
  const [reloadSwimmers, setReloadSwimmers] = useState(false);
  const [reloadMeets, setReloadMeets] = useState(false);
  const [reloadEvents, setReloadEvents] = useState(false);

  const [swimmersMen, setSwimmersMen] = useState(null);
  const [swimmersWomen, setSwimmersWomen] = useState(null);
  const [meets, setMeets] = useState(null);
  const [events, setEvents] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/swimmers", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        const men = res.filter(swimmer =>
          swimmer.sex === "Male" ? true : false
        );
        const women = res.filter(swimmer =>
          swimmer.sex === "Female" ? true : false
        );
        setSwimmersMen(men);
        setSwimmersWomen(women);
      })
      .catch(e => console.error(e));
  }, [reloadSwimmers]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/meets", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        setMeets(res);
      })
      .catch(e => console.error(e));
  }, [reloadMeets]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/events", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        setEvents(res);
      })
      .catch(e => console.error(e));
  }, [reloadEvents]);

  const dispatchReloadSwimmers = () =>
    setReloadSwimmers(reloadSwimmers => !reloadSwimmers);

  const dispatchReloadMeets = () => setReloadMeets(reloadMeets => !reloadMeets);

  const dispatchReloadEvents = () =>
    setReloadEvents(reloadEvents => !reloadEvents);

  if (!(swimmersMen && swimmersWomen && meets && events))
    return <h1>Loading</h1>;

  return (
    <div className="App">
      <Router>
        <div className="AppWrapper">
          <Header />
          <Body
            dispatchReloadSwimmers={dispatchReloadSwimmers}
            dispatchReloadMeets={dispatchReloadMeets}
            dispatchReloadEvents={dispatchReloadEvents}
            swimmersMen={swimmersMen}
            swimmersWomen={swimmersWomen}
            meets={meets}
            events={events}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
