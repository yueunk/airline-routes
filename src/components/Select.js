import React from 'react';
import { getAirlineById, getAirportByCode } from '../data';

const Select = ({ name, label, list, onChange, selected, routes }) => {
  const capitalize = (text) => {
    return text[0].toUpperCase() + text.slice(1);
  }

  const isAvailable = (routes, name, itemName) => {
    if (name === 'airline') {
      return routes.find(({ airline }) => getAirlineById(airline).name === itemName);
    } else {
      return routes.find(({ src, dest }) => getAirportByCode(src).name === itemName || getAirportByCode(dest).name === itemName);
    }
  }

  return (
    <>
      <label htmlFor={name}>{label} </label>
      <select name={name} id={name} onChange={onChange}>
        <option value="all">All {capitalize(name)}</option>
        {list.map(({ name : itemName, idx }) => <option key={idx} value={itemName} selected={itemName === selected} disabled={!isAvailable(routes, name, itemName)}>{itemName}</option>)}
      </select>
    </>
  )
}

export default Select;