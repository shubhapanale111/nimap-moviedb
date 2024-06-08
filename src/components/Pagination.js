import React, { useContext } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { MovieContext } from '../context/MovieContext'; // Adjust the path as necessary

function Paginationn() {
  const { nextPage, prevPage, currentPage, goToPage } = useContext(MovieContext);

  return (
    <nav aria-label="Page navigation example" style={{padding:'5px'}}>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <a className="page-link" href="#" onClick={prevPage}>
            Previous
          </a>
        </li>
        {[...Array(10)].map((_, idx) => (
          <li
            key={idx}
            className={`page-item ${currentPage === idx + 1 ? 'active' : ''}`}
          >
            <a
              className="page-link"
              href="#"
              onClick={() => goToPage(idx + 1)}
            >
              {idx + 1}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" href="#" onClick={nextPage}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Paginationn;
