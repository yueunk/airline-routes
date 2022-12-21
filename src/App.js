import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons'
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
        <h1 className="title">AIRLINE ROUTES <FontAwesomeIcon icon={faPlane} /></h1>
      </header>
      <section>
        <Table className="routes-table" columns={columns} rows="" format={formatValue} perPage={25} />
      </section>
    </div>
  )
}

export default App;