const Pagination = ({ handleGetValue, pageNumber }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item" onClick={() => handleGetValue(1)}>
          <button
            className={pageNumber === 1 ? "page-link active" : "page-link"}
          >
            1
          </button>
        </li>
        <li className="page-item" onClick={() => handleGetValue(2)}>
          <button
            className={pageNumber === 2 ? "page-link active" : "page-link"}
          >
            2
          </button>
        </li>
        <li className="page-item" onClick={() => handleGetValue(3)}>
          <button
            className={pageNumber === 3 ? "page-link active" : "page-link"}
          >
            3
          </button>
        </li>
        <li className="page-item" onClick={() => handleGetValue(4)}>
          <button
            className={pageNumber === 4 ? "page-link active" : "page-link"}
          >
            4
          </button>
        </li>
        <li className="page-item" onClick={() => handleGetValue(5)}>
          <button
            className={pageNumber === 5 ? "page-link active" : "page-link"}
          >
            5
          </button>
        </li>
        <li className="page-item" onClick={() => handleGetValue(6)}>
          <button
            className={pageNumber === 6 ? "page-link active" : "page-link"}
          >
            6
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
