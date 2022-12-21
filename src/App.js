import React, { useState } from 'react';
import './App.css';
import Table from "./components/Table.js";
import { airlines, airports, getAirlineById, getAirportByCode } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [ airport, setAirport ] = useState('All');
  const [ airline, setAirline ] = useState('All');

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
  
  const handleShowAll = (e) => {
    e.preventDefault();
  }

  const handleSelectAirport = (e) => {
    e.preventDefault();
  }

  const handleSelectAirline = (e) => {
    e.preventDefault();
  }

  const Select = ({ name, label, list, onSelect }) => {
    return (
      <>
        <label htmlFor={name}>{label} </label>
        <select name={name} id={name} onSelect={onSelect}>
          <option value="all" selected>All {name}</option>
          {list.map(({ name }) => <option value={name}>{name}</option>)}
        </select>
      </>
    )
  }

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">AIRLINE ROUTES <FontAwesomeIcon icon={faPlane} /></h1>
      </header>
      <section>
        <p>
          <Select name="airline" label="Show routes on " list={airlines}/>
          {/* <label htmlFor="airline">Show routes on </label>
          <select name="airline" id="airline" onChange={handleSelectAirline}>
            <option value="all" selected>All Airlines</option>
            {airlines.map(({ name }) => <option value={name}>{name}</option>)}
          </select> */}

          <Select name="airport" label="flying in or out of " list={airports}/>
          {/* <label htmlFor="airport">flying in or out of </label>
          <select name="airport" id="airport" onChange={handleSelectAirport}>
            <option value="all" selected>All Airports</option>
            {airports.map(({ name }) => <option value={name}>{name}</option>)}
          </select> */}
          
          <button onClick={handleShowAll} disabled={airline === 'All' && airport === 'All'}>Show All Routes</button>
        </p>

        <Table className="routes-table" columns={columns} rows="" format={formatValue} perPage={25} />
      </section>
    </div>
  )
}

export default App;