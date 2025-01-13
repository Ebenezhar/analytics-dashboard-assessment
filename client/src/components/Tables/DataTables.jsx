import React, { useState } from 'react'
import TablePagination from '@mui/material/TablePagination';
import MenuOptions from '../Menu/MenuOptions';




const DataTables = ({ data }) => {
  // Get the keys of the first object in the data array for table headers
  const headers = data.length > 0 ? Object.keys(data[0]) : [];



  const [page, setPage] = useState(0);
  const [chosenHeader, setChosenHeader] = useState(headers?.slice(0, 5));
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <div className="overflow-x-auto rounded-lg bg-[#eff6ee] shadow-xl">
      <div className='flex justify-end p-2'>
        {/* <SearchBar/> */}
        <MenuOptions data={headers} chosenHeader={chosenHeader} setChosenHeader={setChosenHeader} />
      </div>
      <table className="w-full text-sm 3xl:text-base text-center text-gray-800 border-collapse overflow-x-auto table-auto bg-white">
        <thead className=" bg-[#81fc69] uppercase !rounded-lg relative">
          <tr className="z-1 relative">
            {chosenHeader.map((header) => (
              <th scope="col" className="px-2 py-4">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
            return (
              <tr className={` border-b bg-white hover:bg-gray-100 border-gray-700 `}>
                {chosenHeader.map((header) => (
                  <td className="px-2 py-4">{row[header]}</td>
                ))}
              </tr>
            )
          }
          )}
        </tbody>
      </table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>



  );
};



export default DataTables;


