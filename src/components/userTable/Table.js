import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
  useResizeColumns,
  useFlexLayout,
} from "react-table";
import Users  from "../../users";
import { Columns } from "./Column";
import { GlobalFilter } from "./GlobalFilter";
import "./table.scss";
import sorting from "../../img/sorting.png";
import Pagination from "./Pagination";

export default function Table() {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => Users, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 10 },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useResizeColumns,
    useFlexLayout
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
    <div className="tableContainer">
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps(), {
                    style: { minWidth: column.minWidth },
                  })}
                >
                  {column.render("Header")}
                  <span className="sortIcon">
                    <img className="sortIconImg" src={sorting} alt="sorting" />
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps({
                        style: {
                          minWidth: cell.column.minWidth,
                          overflow: cell.column.overflow,
                          textOverflow: cell.column.textOverflow,
                        },
                      })}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
      <Pagination
        pageIndex={pageIndex}
        pageOptions={pageOptions}
        setPageSize={setPageSize}
        pageSize={pageSize}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        nextPage={nextPage}
        gotoPage={gotoPage}
        previousPage={previousPage}
        pageCount={pageCount}
      />
   </>
  );
}
