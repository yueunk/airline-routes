import React from 'react';

const Select = ({ name, label, list, onChange, selected }) => {
  const capitalize = (text) => {
    return text[0].toUpperCase() + text.slice(1);
  }
  // if the list length is 0, disable the option
  return (
    <>
      <label htmlFor={name}>{label} </label>
      <select name={name} id={name} onChange={onChange}>
        <option value="all">All {capitalize(name)}</option>
        {list.map(({ name }) => <option value={name} selected={name === selected}>{name}</option>)}
      </select>
    </>
  )
}

export default Select;