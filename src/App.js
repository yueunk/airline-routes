import React, { useState } from 'react';
import './App.css';
import Table from "./components/Table.js";
import Select from "./components/Select.js";
import { routes, airlines, airports, getAirlineById, getAirportByCode } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [ airport, setAirport ] = useState('all');
  const [ airline, setAirline ] = useState('all');

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
    setAirport('all');
    setAirline('all');
  }

  const handleSelectAirport = (e) => {
    e.preventDefault();
    setAirport(e.target.value);
  }

  const handleSelectAirline = (e) => {
    e.preventDefault();
    setAirline(e.target.value);
  }

  const filterRoutes = () => {
    let filtered = routes;
    if (airline !== 'all') filtered = filtered.filter(({ airline : airlineId }) => getAirlineById(airlineId) === airline);
    if (airport !== 'all') filtered = filtered.filter(({ src, dest }) => getAirportByCode(src) === airport || getAirportByCode(dest) === airport);
    return filtered;
  }

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">AIRLINE ROUTES <FontAwesomeIcon icon={faPlane} /></h1>
      </header>
      <section>
        <p>
          <Select name="airline" label="Show routes on " list={airlines} onChange={handleSelectAirline} selected={airline} />
          <Select name="airport" label="flying in or out of " list={airports} onChange={handleSelectAirport} selected={airport}/>
          <button onClick={handleShowAll} disabled={airline === 'all' && airport === 'all'}>Show All Routes</button>
        </p>
        <Table className="routes-table" columns={columns} rows="" format={formatValue} perPage={25} routes={filterRoutes()}/>
      </section>
    </div>
  )
}

export default App;