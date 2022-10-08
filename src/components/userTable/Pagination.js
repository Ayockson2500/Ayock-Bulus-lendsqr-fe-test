import React from "react";
import "./pagination.scss";
import prev_btn from "../../img/prev_btn.png";
import next_btn from "../../img/next_btn.png";

export default function Pagination({
  pageIndex,
  pageOptions,
  setPageSize,
  pageSize,
  canNextPage,
  canPreviousPage,
  gotoPage,
  previousPage,
  nextPage,
  pageCount,
}) {
  return (
    <div className="pagination">
        <div className='pageOf'>
      <span className="pageNumber">Showing {""}</span>
      <select
        value={pageSize}
        onChange={(e) => setPageSize(Number(e.target.value))}
        className="pageSizeSelect"
      >
        {[10, 20, 30, 40].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            {pageSize}
          </option>
        ))}
      </select>
      <span className="pageNumber">
        {pageIndex + 1} of {pageOptions.length}
        {""}
      </span>
      </div>
      

      <div className="nextPrev">
      <img
        src={prev_btn}
        alt=""
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
        className="previousBtn"
      />

      <span className="pageNumber">
            goto {""}
        <input
          type="number"
          min={1}
          placeholder={pageIndex + 1}
          onChange={(e) => {
            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(pageNumber);
          }}
          className="pageNumberInput"
        />
      </span>
      <img
        src={next_btn}
        alt=""
        onClick={() => nextPage()}
        disabled={!canNextPage}
        className="nextBtn"
      />
      </div>
    </div>
  );
}
