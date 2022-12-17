import React from 'react';
import { routes } from "../data.js";

const Table = ({ columns, format }) => {
  return (
    <table>
      <tr>
        {columns.map((col, idx) => <th key={idx}>{col.name}</th>)}
      </tr>
      {routes.map((route, idx) => {
        return (
          <tr key={idx}>
            <td>{format('airline', route.airline)}</td>
            <td>{format('src', route.src)}</td>
            <td>{format('dest', route.dest)}</td>
          </tr>
        )
      })}
    </table>
  )
}

export default Table;