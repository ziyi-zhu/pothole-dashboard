import React, { useState, useRef, useEffect } from "react";
//import { Table, Dropdown } from "react-bootstrap";

import { Link } from "react-router-dom";
// import data from "./tableData.js";

const SoldEventTable = () => {
   const [data, setData] = useState(
      document.querySelectorAll("#example3_wrapper tbody tr")
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
      setData(document.querySelectorAll("#example3_wrapper tbody tr"));
      //chackboxFun();
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
      <div id="Canceled" classname="tab-pane">
         <div className="table-responsive">
            <div id="example3_wrapper" className="dataTables_wrapper no-footer">
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
                           Pothole ID
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
                           Road Name
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
                           Reviewer{" "}
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
                           aria-label="Severity: activate to sort column ascending"
                           style={{ width: 66 }}
                        >
                           Severity
                        </th>
                        <th
                           className="sorting"
                           tabIndex={0}
                           aria-controls="example2"
                           rowSpan={1}
                           colSpan={1}
                           aria-label="REPAIR: activate to sort column ascending"
                           style={{ width: 59 }}
                        >
                           Repaired
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
                           Total Cost
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr role="row" className="even">
                        <td className="sorting_1">#0012451</td>
                        <td>
                           04/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Bani Malek
                           </span>
                        </td>
                        <td>Elisabeth Queen</td>
                        <td>Jeddah, Saudi Arabia</td>
                        <td>Severe</td>
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
                           04/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              As Sulaymaniyyah
                           </span>
                        </td>
                        <td>David Bekam</td>
                        <td>Mecca, Saudi Arabia</td>
                        <td>Severe</td>
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
                           04/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              As Sulaymaniyyah
                           </span>
                        </td>
                        <td>Cive Slauw</td>
                        <td>Mecca, Saudi Arabia</td>
                        <td>Severe</td>
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
                           04/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Bani Malek
                           </span>
                        </td>
                        <td>Andrew Stevano</td>
                        <td>Jeddah, Saudi Arabia</td>
                        <td>Moderate</td>
                        <td>
                           <strong className="text-primary">REPAIR</strong>
                        </td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              $124,55
                           </Link>
                        </td>
                     </tr>
                     <tr role="row" className="odd">
                        <td className="sorting_1">#0012451</td>
                        <td>
                           04/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Al-Qurayat
                           </span>
                        </td>
                        <td>Andrew Stevano</td>
                        <td>Jeddah, Saudi Arabia</td>
                        <td>Mild</td>
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
                           04/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Al-Qurayat
                           </span>
                        </td>
                        <td>Andrew Stevano</td>
                        <td>Jeddah, Saudi Arabia</td>
                        <td>Mild</td>
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
                           04/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              As Sulaymaniyyah
                           </span>
                        </td>
                        <td>Bella Simatupang</td>
                        <td>Mecca, Saudi Arabia</td>
                        <td>Mild</td>
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
                           04/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Ray'zakhir
                           </span>
                        </td>
                        <td>Eddy Cusuma</td>
                        <td>Mecca, Saudi Arabia</td>
                        <td>Moderate</td>
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
                           04/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Ray'zakhir
                           </span>
                        </td>
                        <td>Frank Azire</td>
                        <td>Mecca, Saudi Arabia</td>
                        <td>Mild</td>
                        <td>
                           <strong className="text-black">REPAIR</strong>
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
                           04/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Al Yarmuk
                           </span>
                        </td>
                        <td>Bella Simatupang</td>
                        <td>Riyadh, Saudi Arabia</td>
                        <td>Mild</td>
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
                           04/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Al-Qurayat
                           </span>
                        </td>
                        <td>Elisabeth Queen</td>
                        <td>Jeddah, Saudi Arabia</td>
                        <td>Mild</td>
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
                           04/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Al-Qurayat
                           </span>
                        </td>
                        <td>Andrew Stevano</td>
                        <td>Jeddah, Saudi Arabia</td>
                        <td>Mild</td>
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
                           04/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Al-Qurayat
                           </span>
                        </td>
                        <td>Andrew Stevano</td>
                        <td>Jeddah, Saudi Arabia</td>
                        <td>Mild</td>
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
                           04/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Al-Qurayat
                           </span>
                        </td>
                        <td>Andrew Stevano</td>
                        <td>Jeddah, Saudi Arabia</td>
                        <td>Mild</td>
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
                        to="/potholes"
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
                              to="/potholes"
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
                        to="/potholes"
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

export default SoldEventTable;
