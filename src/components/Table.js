import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Table = ({ className, columns, format, perPage, routes }) => {
  const [ page, setPage ] = useState(0);

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

  const getRange = () => {
    let start = perPage * page + 1;
    let end = (perPage * (page + 1)) > total ? total : perPage * (page + 1);
    return { start, end };
  }

  return (
    <>
      <table className={className}>
        <tr>
          {columns.map((col, idx) => <th key={idx}>{col.name}</th>)}
        </tr>
        {filteredRoutes.map((route, idx) => {
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
          Showing {getRange().start} - {getRange().end} of {total} routes
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