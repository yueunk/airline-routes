import React, { Component } from 'react';
import './App.css';
// import Routes from "./components/routes.js"
import data from "./data.js";

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Airline Routes</h1>
      </header>
      <section>
        {data.routes.map(route => (
            <>
            <li>Airline: {route.airline}</li>
            <li>Source: {route.src}</li>
            <li>Destination: {route.dest}</li>
            </>
          )
        )}
        <p>welcome!</p>
      </section>
    </div>
  )
}

export default App;