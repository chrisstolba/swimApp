import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";

import SERVER from "./helpers/SERVER";

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
    fetch("http://localhost:50000/swimmers", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        const mensTeam = res.filter(swimmer =>
          swimmer.sex === "Male" ? true : false
        );
        const womensTeam = res.filter(swimmer =>
          swimmer.sex === "Female" ? true : false
        );
        console.log(mensTeam);
        console.log(womensTeam);
        setSwimmersMen(mensTeam);
        setSwimmersWomen(womensTeam);
      })
      .catch(e => console.error(e));
  }, [reloadSwimmers]);

  useEffect(() => {
    fetch("http://localhost:50000/meets", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setMeets(res);
      })
      .catch(e => console.error(e));
  }, [reloadMeets]);

  useEffect(() => {
    fetch("http://localhost:50000/events", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setEvents(res);
      })
      .catch(e => console.error(e));
  }, [reloadEvents]);

  const dispatchReloadSwimmers = () =>
    setReloadSwimmers(reloadSwimmers => !reloadSwimmers);

  const dispatchReloadMeets = () => setReloadMeets(reloadMeets => !reloadMeets);

  const dispatchReloadEvents = () =>
    setReloadEvents(reloadEvents => !reloadEvents);

  return (
    <div className="App">
      <Router>
        <Header />
        <Body
          dispatchReloadSwimmers={dispatchReloadSwimmers}
          dispatchReloadMeets={dispatchReloadMeets}
          dispatchReloadEvents={dispatchReloadEvents}
        />
      </Router>
    </div>
  );
}

export default App;
