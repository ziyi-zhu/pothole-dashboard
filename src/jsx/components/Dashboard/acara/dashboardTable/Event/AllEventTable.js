import React, { useState, useRef, useEffect } from "react";
//import { Table, Dropdown } from "react-bootstrap";

import { Link } from "react-router-dom";
// import data from "./tableData.js";

const AllEventTable = () => {
   const [data, setData] = useState(
      document.querySelectorAll("#example2_wrapper tbody tr")
   );
   const sort = 10;
   const activePag = useRef(0);
   const [test, settest] = useState(0);

   // Active data
   const chageData = (frist, sec) => {
      for (var i = 0; i < data.length; ++i) {
         if (i >= frist && i < sec) {
            data[i].classList.remove("d-none");
         } else {
            data[i].classList.add("d-none");
         }
      }
   };
   // use effect
   useEffect(() => {
      setData(document.querySelectorAll("#example2_wrapper tbody tr"));
     // chackboxFun();
   }, [test]);

  
   // Active pagginarion
   activePag.current === 0 && chageData(0, sort);
   // paggination
   let paggination = Array(Math.ceil(data.length / sort))
      .fill()
      .map((_, i) => i + 1);

   // Active paggination & chage data
   const onClick = (i) => {
      activePag.current = i;
      chageData(activePag.current * sort, (activePag.current + 1) * sort);
      settest(i);
   };

  
  
   return (
      <div id="All" classname="tab-pane">
         <div className="table-responsive">
            <div id="example2_wrapper" className="dataTables_wrapper no-footer">
               <table
                  id="example2"
                  className="table card-table display dataTablesCard dataTable no-footer"
                  role="grid"
                  aria-describedby="example2_info"
               >
                  <thead>
                     <tr role="row">
                        <th
                           className="sorting_asc"
                           tabIndex={0}
                           aria-controls="example2"
                           rowSpan={1}
                           colSpan={1}
                           aria-label="Order ID: activate to sort column descending"
                           style={{ width: 63 }}
                           aria-sort="ascending"
                        >
                           Order ID
                        </th>
                        <th
                           className="sorting"
                           tabIndex={0}
                           aria-controls="example2"
                           rowSpan={1}
                           colSpan={1}
                           aria-label="Date: activate to sort column ascending"
                           style={{ width: 71 }}
                        >
                           Date
                        </th>
                        <th
                           className="sorting"
                           tabIndex={0}
                           aria-controls="example2"
                           rowSpan={1}
                           colSpan={1}
                           aria-label="Event Name: activate to sort column ascending"
                           style={{ width: 156 }}
                        >
                           Event Name
                        </th>
                        <th
                           className="sorting"
                           tabIndex={0}
                           aria-controls="example2"
                           rowSpan={1}
                           colSpan={1}
                           aria-label="Customer : activate to sort column ascending"
                           style={{ width: 75 }}
                        >
                           Customer{" "}
                        </th>
                        <th
                           className="sorting"
                           tabIndex={0}
                           aria-controls="example2"
                           rowSpan={1}
                           colSpan={1}
                           aria-label="Location: activate to sort column ascending"
                           style={{ width: 63 }}
                        >
                           Location
                        </th>
                        <th
                           className="sorting"
                           tabIndex={0}
                           aria-controls="example2"
                           rowSpan={1}
                           colSpan={1}
                           aria-label="Sold Ticket: activate to sort column ascending"
                           style={{ width: 80 }}
                        >
                           Sold Ticket
                        </th>
                        <th
                           className="sorting"
                           tabIndex={0}
                           aria-controls="example2"
                           rowSpan={1}
                           colSpan={1}
                           aria-label="Available: activate to sort column ascending"
                           style={{ width: 66 }}
                        >
                           Available
                        </th>
                        <th
                           className="sorting"
                           tabIndex={0}
                           aria-controls="example2"
                           rowSpan={1}
                           colSpan={1}
                           aria-label="Refund: activate to sort column ascending"
                           style={{ width: 59 }}
                        >
                           Refund
                        </th>
                        <th
                           className="sorting"
                           tabIndex={0}
                           aria-controls="example2"
                           rowSpan={1}
                           colSpan={1}
                           aria-label="Total Revenue: activate to sort column ascending"
                           style={{ width: 102 }}
                        >
                           Total Revenue
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr role="row" className="odd">
                        <td className="sorting_1">#0012451</td>
                        <td>
                           04/08/2020
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Charity Fun Games at <br /> Lapangan Merdeka
                           </span>
                        </td>
                        <td>Andrew Stevano</td>
                        <td>Jakarta, Indonesia</td>
                        <td>2 Pcs</td>
                        <td>567k left</td>
                        <td>
                           <strong className="text-primary">REFUND</strong>
                        </td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              $124,55
                           </Link>
                        </td>
                     </tr>
                     <tr role="row" className="even">
                        <td className="sorting_1">#0012451</td>
                        <td>
                           04/08/2020
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Envato Authors Meetup
                              <br />
                              2020
                           </span>
                        </td>
                        <td>Elisabeth Queen</td>
                        <td>Medan, Indonesia</td>
                        <td>4 Pcs</td>
                        <td>567k left</td>
                        <td>
                           <strong className="text-black">NO</strong>
                        </td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              $536,00
                           </Link>
                        </td>
                     </tr>
                     <tr role="row" className="odd">
                        <td className="sorting_1">#0012451</td>
                        <td>
                           04/08/2020
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Great Big Fireworks at <br /> Newyork City
                           </span>
                        </td>
                        <td>David Bekam</td>
                        <td>Sydney, Australia</td>
                        <td>4 Pcs</td>
                        <td>567k left</td>
                        <td>
                           <strong className="text-black">NO</strong>
                        </td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              $65,22
                           </Link>
                        </td>
                     </tr>
                     <tr role="row" className="even">
                        <td className="sorting_1">#0012451</td>
                        <td>
                           04/08/2020
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Indonesian Envato <br /> Authors Fun Run{" "}
                           </span>
                        </td>
                        <td>Cive Slauw</td>
                        <td>Penang, Malaysia</td>
                        <td>4 Pcs</td>
                        <td>567k left</td>
                        <td>
                           <strong className="text-black">NO</strong>
                        </td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              $536,00
                           </Link>
                        </td>
                     </tr>
                     <tr role="row" className="odd">
                        <td className="sorting_1">#0012451</td>
                        <td>
                           04/08/2020
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              The Story of Danau Toba
                              <br /> (Musical Drama)
                           </span>
                        </td>
                        <td>Bella Simatupang</td>
                        <td>London, US</td>
                        <td>1 Pcs</td>
                        <td>567k left</td>
                        <td>
                           <strong className="text-black">NO</strong>
                        </td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              $125,70
                           </Link>
                        </td>
                     </tr>
                     <tr role="row" className="even">
                        <td className="sorting_1">#0012451</td>
                        <td>
                           04/08/2020
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              The Story of Danau Toba
                              <br /> (Musical Drama)
                           </span>
                        </td>
                        <td>Eddy Cusuma</td>
                        <td>Medan, Indonesia</td>
                        <td>3 Pcs</td>
                        <td>567k left</td>
                        <td>
                           <strong className="text-black">NO</strong>
                        </td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              $44,00
                           </Link>
                        </td>
                     </tr>
                     <tr role="row" className="odd">
                        <td className="sorting_1">#0012451</td>
                        <td>
                           04/08/2020
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              The Story of Danau Toba
                              <br /> (Musical Drama)
                           </span>
                        </td>
                        <td>Frank Azire</td>
                        <td>Bangkok, Thailand</td>
                        <td>1 Pcs</td>
                        <td>567k left</td>
                        <td>
                           <strong className="text-black">REFUND</strong>
                        </td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              $51,50
                           </Link>
                        </td>
                     </tr>
                     <tr role="row" className="even">
                        <td className="sorting_1">#0012451</td>
                        <td>
                           04/08/2020
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              The Story of Danau Toba
                              <br /> (Musical Drama)
                           </span>
                        </td>
                        <td>Bella Simatupang</td>
                        <td>London, US</td>
                        <td>1 Pcs</td>
                        <td>567k left</td>
                        <td>
                           <strong className="text-black">NO</strong>
                        </td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              $125,70
                           </Link>
                        </td>
                     </tr>
                     <tr role="row" className="odd">
                        <td className="sorting_1">#0012451</td>
                        <td>
                           04/08/2020
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              The Story of Danau Toba
                              <br /> (Musical Drama)
                           </span>
                        </td>
                        <td>Elisabeth Queen</td>
                        <td>London, US</td>
                        <td>1 Pcs</td>
                        <td>567k left</td>
                        <td>
                           <strong className="text-black">NO</strong>
                        </td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              $125,70
                           </Link>
                        </td>
                     </tr>
                     <tr role="row" className="even">
                        <td className="sorting_1">#0012451</td>
                        <td>
                           04/08/2020
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              The Story of Danau Toba
                              <br /> (Musical Drama)
                           </span>
                        </td>
                        <td>Andrew Stevano</td>
                        <td>London, US</td>
                        <td>1 Pcs</td>
                        <td>567k left</td>
                        <td>
                           <strong className="text-black">NO</strong>
                        </td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              $125,70
                           </Link>
                        </td>
                     </tr>

                     <tr role="row" className="odd">
                        <td className="sorting_1">#0012451</td>
                        <td>
                           04/08/2020
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              The Story of Danau Toba
                              <br /> (Musical Drama)
                           </span>
                        </td>
                        <td>Andrew Stevano</td>
                        <td>London, US</td>
                        <td>1 Pcs</td>
                        <td>567k left</td>
                        <td>
                           <strong className="text-black">NO</strong>
                        </td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              $125,70
                           </Link>
                        </td>
                     </tr>

                     <tr role="row" className="even">
                        <td className="sorting_1">#0012451</td>
                        <td>
                           04/08/2020
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              The Story of Danau Toba
                              <br /> (Musical Drama)
                           </span>
                        </td>
                        <td>Andrew Stevano</td>
                        <td>London, US</td>
                        <td>1 Pcs</td>
                        <td>567k left</td>
                        <td>
                           <strong className="text-black">NO</strong>
                        </td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              $125,70
                           </Link>
                        </td>
                     </tr>

                     <tr role="row" className="odd">
                        <td className="sorting_1">#0012451</td>
                        <td>
                           04/08/2020
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              The Story of Danau Toba
                              <br /> (Musical Drama)
                           </span>
                        </td>
                        <td>Andrew Stevano</td>
                        <td>London, US</td>
                        <td>1 Pcs</td>
                        <td>567k left</td>
                        <td>
                           <strong className="text-black">NO</strong>
                        </td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              $125,70
                           </Link>
                        </td>
                     </tr>

                     <tr role="row" className="even">
                        <td className="sorting_1">#0012451</td>
                        <td>
                           04/08/2020
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              The Story of Danau Toba
                              <br /> (Musical Drama)
                           </span>
                        </td>
                        <td>Andrew Stevano</td>
                        <td>London, US</td>
                        <td>1 Pcs</td>
                        <td>567k left</td>
                        <td>
                           <strong className="text-black">NO</strong>
                        </td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              $125,70
                           </Link>
                        </td>
                     </tr>
                  </tbody>
               </table>

               <div className="d-sm-flex text-center justify-content-between align-items-center mt-3">
                  <div className="dataTables_info">
                     Showing {activePag.current * sort + 1} to{" "}
                     {data.length > (activePag.current + 1) * sort
                        ? (activePag.current + 1) * sort
                        : data.length}{" "}
                     of {data.length} entries
                  </div>
                  <div
                     className="dataTables_paginate paging_simple_numbers"
                     id="example2_paginate"
                  >
                     <Link
                        className="paginate_button previous disabled"
                        to="/event"
                        onClick={() =>
                           activePag.current > 0 &&
                           onClick(activePag.current - 1)
                        }
                     >
                        Previous
                     </Link>
                     <span>
                        {paggination.map((number, i) => (
                           <Link
                              key={i}
                              to="/event"
                              className={`paginate_button  ${
                                 activePag.current === i ? "current" : ""
                              } `}
                              onClick={() => onClick(i)}
                           >
                              {number}
                           </Link>
                        ))}
                     </span>

                     <Link
                        className="paginate_button next"
                        to="/event"
                        onClick={() =>
                           activePag.current + 1 < paggination.length &&
                           onClick(activePag.current + 1)
                        }
                     >
                        Next
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AllEventTable;
