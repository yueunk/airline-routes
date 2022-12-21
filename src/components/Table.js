import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { routes } from "../data.js";

const Table = ({ className, columns, format, perPage }) => {
  const [ page, setPage ] = useState(0);
  const [ selectAirline, setSelectAirline ] = useState('All');

  const total = routes.length;
  const start = perPage * page;
  const filteredRoutes = routes.slice(start, start + perPage); // pass as a prop from the App component

  const handleClickPrev = (e) => {
    e.preventDefault();
    setPage(page - 1);
  }

  const handleClickNext = (e) => {
    e.preventDefault();
    setPage(page + 1);
  }

  return (
    <>
      <table className={className}>
        <tr>
          {columns.map((col, idx) => <th key={idx}>{col.name}</th>)}
        </tr>
        {filteredRoutes.filter(({ airline }) => selectAirline !== 'All' ? format('airline', airline) === selectAirline : true).map((route, idx) => {
          return (
            <tr key={idx}>
              <td>{format('airline', route.airline)}</td>
              <td>{format('src', route.src)}</td>
              <td>{format('dest', route.dest)}</td>
            </tr>
          )
        })}
      </table>
      <div className="pagination">
        <p>
          Showing {perPage * page + 1} - {perPage * (page + 1)} of {total} routes
        </p>
        <p>
          <button key="prev" disabled={page === 0} onClick={handleClickPrev}><FontAwesomeIcon icon={faChevronLeft} /></button>
          <button key="next" disabled={page === (total / perPage) - 1} onClick={handleClickNext}><FontAwesomeIcon icon={faChevronRight} /></button>
        </p>
      </div>
    </>
  )
}

export default Table;