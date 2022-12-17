import React, { Component } from 'react';
import './App.css';
import Table from "./components/Table.js";
import { getAirlineById, getAirportByCode } from './data';

const columns = [
  {name: 'Airline', property: 'airline'},
  {name: 'Source Airport', property: 'src'},
  {name: 'Destination Airport', property: 'dest'},
];

const formatValue = (property, value) => {
  if (property === "airline") {
    return getAirlineById(value);
  } else {
    return getAirportByCode(value);
  }
}

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Airline Routes</h1>
      </header>
      <section>
        <Table className="routes-table" columns={columns} rows="" format={formatValue} />
      </section>
    </div>
  )
}

export default App;