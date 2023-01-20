import React, { useState, useRef, useEffect } from "react";
//import { Table, Dropdown } from "react-bootstrap";

import { Link } from "react-router-dom";
// import data from "./tableData.js";

const AllEventTable = () => {
   const [data, setData] = useState(
      document.querySelectorAll("#example2_wrapper tbody tr")
   );
   const sort = 20;
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
                           Scene Name
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
                           Segment ID
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
                           Frame ID
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
                           Depth (cm)
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
                           Area (cm x cm)
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
                           Severity
                        </th>
                     </tr>
                  </thead>
                  <tbody>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0000</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#00</td>
                        <td>#016</td>
                        <td>2.610</td>
                        <td>1812.5</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0001</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#00</td>
                        <td>#016</td>
                        <td>4.424</td>
                        <td>742.3</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0002</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#00</td>
                        <td>#016</td>
                        <td>3.352</td>
                        <td>3083.8</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0003</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#00</td>
                        <td>#016</td>
                        <td>3.296</td>
                        <td>2428.6</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0004</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#00</td>
                        <td>#016</td>
                        <td>2.732</td>
                        <td>8183.6</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0005</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#00</td>
                        <td>#016</td>
                        <td>4.231</td>
                        <td>282.6</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0006</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#00</td>
                        <td>#016</td>
                        <td>1.126</td>
                        <td>1965.3</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0007</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#00</td>
                        <td>#025</td>
                        <td>4.128</td>
                        <td>1110.6</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0008</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#00</td>
                        <td>#025</td>
                        <td>1.000</td>
                        <td>962.8</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0009</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#00</td>
                        <td>#025</td>
                        <td>4.390</td>
                        <td>1013.5</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0010</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#00</td>
                        <td>#025</td>
                        <td>1.000</td>
                        <td>759.3</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0011</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#00</td>
                        <td>#010</td>
                        <td>1.005</td>
                        <td>747.6</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0012</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#00</td>
                        <td>#010</td>
                        <td>1.000</td>
                        <td>2170.7</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0013</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#00</td>
                        <td>#010</td>
                        <td>2.688</td>
                        <td>2799.1</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0014</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#00</td>
                        <td>#010</td>
                        <td>4.204</td>
                        <td>203.5</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0015</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#00</td>
                        <td>#010</td>
                        <td>1.000</td>
                        <td>687.3</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0016</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#00</td>
                        <td>#010</td>
                        <td>1.252</td>
                        <td>4259.5</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0017</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#00</td>
                        <td>#010</td>
                        <td>3.672</td>
                        <td>2863.3</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0018</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#00</td>
                        <td>#010</td>
                        <td>4.836</td>
                        <td>556.8</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0019</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#00</td>
                        <td>#010</td>
                        <td>1.453</td>
                        <td>942.2</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0020</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#00</td>
                        <td>#010</td>
                        <td>2.988</td>
                        <td>2086.2</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0021</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#00</td>
                        <td>#020</td>
                        <td>1.506</td>
                        <td>984.7</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0022</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#00</td>
                        <td>#020</td>
                        <td>4.878</td>
                        <td>2167.4</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0023</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#01</td>
                        <td>#066</td>
                        <td>1.150</td>
                        <td>2333.7</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0024</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#01</td>
                        <td>#035</td>
                        <td>3.237</td>
                        <td>927.4</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0025</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#01</td>
                        <td>#035</td>
                        <td>2.773</td>
                        <td>600.6</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0026</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#01</td>
                        <td>#035</td>
                        <td>1.000</td>
                        <td>995.0</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0027</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#01</td>
                        <td>#035</td>
                        <td>1.000</td>
                        <td>1312.5</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0028</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#01</td>
                        <td>#035</td>
                        <td>3.743</td>
                        <td>413.1</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0029</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#01</td>
                        <td>#035</td>
                        <td>4.680</td>
                        <td>970.7</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0030</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#01</td>
                        <td>#040</td>
                        <td>4.475</td>
                        <td>884.1</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0031</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#01</td>
                        <td>#040</td>
                        <td>1.000</td>
                        <td>1271.3</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0032</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#01</td>
                        <td>#040</td>
                        <td>1.136</td>
                        <td>1168.4</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0033</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#01</td>
                        <td>#040</td>
                        <td>3.960</td>
                        <td>976.6</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0034</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#01</td>
                        <td>#040</td>
                        <td>3.403</td>
                        <td>211.1</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0035</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#01</td>
                        <td>#044</td>
                        <td>3.772</td>
                        <td>1722.1</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0036</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#01</td>
                        <td>#046</td>
                        <td>3.159</td>
                        <td>1373.3</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0037</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#01</td>
                        <td>#046</td>
                        <td>3.953</td>
                        <td>140.7</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0038</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#01</td>
                        <td>#048</td>
                        <td>3.398</td>
                        <td>1016.6</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0039</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#01</td>
                        <td>#062</td>
                        <td>1.176</td>
                        <td>305.5</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0040</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#02</td>
                        <td>#080</td>
                        <td>4.155</td>
                        <td>672.0</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0041</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#02</td>
                        <td>#080</td>
                        <td>1.514</td>
                        <td>1797.5</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0042</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#02</td>
                        <td>#080</td>
                        <td>1.000</td>
                        <td>1464.7</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0043</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#02</td>
                        <td>#080</td>
                        <td>1.000</td>
                        <td>2075.0</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0044</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#02</td>
                        <td>#080</td>
                        <td>2.625</td>
                        <td>1642.4</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0045</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#02</td>
                        <td>#080</td>
                        <td>3.760</td>
                        <td>947.5</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0046</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#02</td>
                        <td>#080</td>
                        <td>1.000</td>
                        <td>1184.0</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0047</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#02</td>
                        <td>#080</td>
                        <td>4.382</td>
                        <td>232.0</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0048</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#02</td>
                        <td>#074</td>
                        <td>1.000</td>
                        <td>1150.6</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0049</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#02</td>
                        <td>#074</td>
                        <td>1.188</td>
                        <td>1975.5</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0050</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#02</td>
                        <td>#074</td>
                        <td>4.067</td>
                        <td>1576.1</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0051</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#02</td>
                        <td>#088</td>
                        <td>2.639</td>
                        <td>1496.4</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0052</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#02</td>
                        <td>#088</td>
                        <td>3.428</td>
                        <td>386.1</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0053</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#02</td>
                        <td>#088</td>
                        <td>1.153</td>
                        <td>186.1</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0054</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#03</td>
                        <td>#130</td>
                        <td>1.035</td>
                        <td>1370.7</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0055</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#03</td>
                        <td>#130</td>
                        <td>2.502</td>
                        <td>338.8</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0056</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#03</td>
                        <td>#135</td>
                        <td>3.076</td>
                        <td>899.6</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0057</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#03</td>
                        <td>#135</td>
                        <td>4.395</td>
                        <td>291.0</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0058</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#03</td>
                        <td>#135</td>
                        <td>2.512</td>
                        <td>161.8</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0059</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#03</td>
                        <td>#137</td>
                        <td>4.114</td>
                        <td>156.8</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0060</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#03</td>
                        <td>#106</td>
                        <td>1.695</td>
                        <td>717.4</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0061</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#03</td>
                        <td>#106</td>
                        <td>1.502</td>
                        <td>624.6</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0062</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#03</td>
                        <td>#106</td>
                        <td>1.000</td>
                        <td>237.7</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0063</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#03</td>
                        <td>#106</td>
                        <td>2.998</td>
                        <td>235.7</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0064</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#03</td>
                        <td>#113</td>
                        <td>1.175</td>
                        <td>498.5</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0065</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#03</td>
                        <td>#113</td>
                        <td>1.150</td>
                        <td>950.9</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0066</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#03</td>
                        <td>#118</td>
                        <td>1.000</td>
                        <td>1319.8</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0067</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#03</td>
                        <td>#119</td>
                        <td>1.000</td>
                        <td>1623.3</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0068</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#03</td>
                        <td>#121</td>
                        <td>1.000</td>
                        <td>2468.3</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0069</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#03</td>
                        <td>#123</td>
                        <td>3.345</td>
                        <td>289.8</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0070</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#04</td>
                        <td>#169</td>
                        <td>1.000</td>
                        <td>3147.3</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0071</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#04</td>
                        <td>#169</td>
                        <td>2.739</td>
                        <td>1181.3</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0072</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#04</td>
                        <td>#169</td>
                        <td>2.507</td>
                        <td>1170.9</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0073</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#04</td>
                        <td>#169</td>
                        <td>4.734</td>
                        <td>2750.8</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0074</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#04</td>
                        <td>#169</td>
                        <td>3.164</td>
                        <td>997.6</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0075</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#04</td>
                        <td>#173</td>
                        <td>4.980</td>
                        <td>1536.4</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0076</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#04</td>
                        <td>#173</td>
                        <td>1.000</td>
                        <td>775.6</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0077</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#04</td>
                        <td>#143</td>
                        <td>4.917</td>
                        <td>345.6</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0078</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#04</td>
                        <td>#144</td>
                        <td>3.281</td>
                        <td>689.7</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0079</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#04</td>
                        <td>#144</td>
                        <td>4.128</td>
                        <td>250.1</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0080</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#04</td>
                        <td>#152</td>
                        <td>4.009</td>
                        <td>568.9</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0081</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#05</td>
                        <td>#194</td>
                        <td>3.799</td>
                        <td>291.3</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0082</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#05</td>
                        <td>#194</td>
                        <td>3.123</td>
                        <td>505.7</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0083</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#05</td>
                        <td>#211</td>
                        <td>1.170</td>
                        <td>2269.9</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0084</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#05</td>
                        <td>#211</td>
                        <td>4.087</td>
                        <td>1207.2</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0085</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#05</td>
                        <td>#211</td>
                        <td>4.021</td>
                        <td>6807.9</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0086</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#05</td>
                        <td>#211</td>
                        <td>3.518</td>
                        <td>417.7</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0087</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#05</td>
                        <td>#211</td>
                        <td>3.743</td>
                        <td>427.5</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0088</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#05</td>
                        <td>#211</td>
                        <td>4.062</td>
                        <td>175.7</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0089</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#05</td>
                        <td>#216</td>
                        <td>4.756</td>
                        <td>1330.4</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0090</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#05</td>
                        <td>#216</td>
                        <td>4.304</td>
                        <td>247.2</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0091</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#05</td>
                        <td>#216</td>
                        <td>1.173</td>
                        <td>340.8</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0092</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#05</td>
                        <td>#216</td>
                        <td>2.773</td>
                        <td>993.0</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0093</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#05</td>
                        <td>#218</td>
                        <td>1.035</td>
                        <td>1753.0</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0094</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#05</td>
                        <td>#218</td>
                        <td>4.128</td>
                        <td>618.8</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0095</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#05</td>
                        <td>#218</td>
                        <td>1.172</td>
                        <td>1794.7</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0096</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#05</td>
                        <td>#218</td>
                        <td>4.575</td>
                        <td>896.6</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0097</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#05</td>
                        <td>#218</td>
                        <td>2.971</td>
                        <td>1240.3</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0098</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#05</td>
                        <td>#218</td>
                        <td>3.621</td>
                        <td>1263.2</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Moderate
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0099</td>
                        <td>
                           20/01/2023
                           <br />
                           12:34 AM
                        </td>
                        <td className>
                           <span className="text-nowrap">
                              Scene 1
                           </span>
                        </td>
                        <td>#05</td>
                        <td>#189</td>
                        <td>3.401</td>
                        <td>1144.7</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
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

export default AllEventTable;
