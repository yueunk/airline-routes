import React from 'react';
import { routes } from "../data.js";

/*
Step 5: Add Pagination to Table
Update the Table component so that only 25 rows are shown at a time
Display a message that says Showing n - n+25 routes of x total routes
Display Previous Page and Next Page buttons
Adjust the page shown when the buttons are clicked
Disable the paging controls to prevent a user from going outside valid bounds
Allow the number of rows per page to be specified as a perPage prop
*/

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