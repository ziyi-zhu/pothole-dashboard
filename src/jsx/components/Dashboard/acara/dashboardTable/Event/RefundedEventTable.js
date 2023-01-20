import React, { useState, useRef, useEffect } from "react";
//import { Table, Dropdown } from "react-bootstrap";

import { Link } from "react-router-dom";
// import data from "./tableData.js";

const RefundedEventTable = () => {
   const [data, setData] = useState(
      document.querySelectorAll("#example4_wrapper tbody tr")
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
      setData(document.querySelectorAll("#example4_wrapper tbody tr"));
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
            <div id="example4_wrapper" className="dataTables_wrapper no-footer">
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

                      <tr role="row" className="odd">
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

                      <tr role="row" className="even">
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

                      <tr role="row" className="odd">
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

                      <tr role="row" className="even">
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

                      <tr role="row" className="odd">
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

                      <tr role="row" className="even">
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

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0101</td>
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
                        <td>1.000</td>
                        <td>4485.1</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0102</td>
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
                        <td>2.966</td>
                        <td>246.9</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0104</td>
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
                        <td>3.352</td>
                        <td>2097.8</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0118</td>
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
                        <td>#06</td>
                        <td>#219</td>
                        <td>2.812</td>
                        <td>1354.6</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0119</td>
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
                        <td>#06</td>
                        <td>#219</td>
                        <td>3.792</td>
                        <td>334.2</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0121</td>
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
                        <td>#06</td>
                        <td>#219</td>
                        <td>3.525</td>
                        <td>145.4</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0136</td>
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
                        <td>#06</td>
                        <td>#223</td>
                        <td>2.700</td>
                        <td>847.6</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0138</td>
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
                        <td>#06</td>
                        <td>#223</td>
                        <td>3.867</td>
                        <td>221.0</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0140</td>
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
                        <td>#07</td>
                        <td>#261</td>
                        <td>3.452</td>
                        <td>1509.3</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0144</td>
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
                        <td>#07</td>
                        <td>#261</td>
                        <td>2.844</td>
                        <td>165.9</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0146</td>
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
                        <td>#07</td>
                        <td>#277</td>
                        <td>3.074</td>
                        <td>602.6</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0147</td>
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
                        <td>#07</td>
                        <td>#277</td>
                        <td>4.832</td>
                        <td>1324.7</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0148</td>
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
                        <td>#07</td>
                        <td>#277</td>
                        <td>2.659</td>
                        <td>536.8</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0154</td>
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
                        <td>#07</td>
                        <td>#277</td>
                        <td>3.894</td>
                        <td>361.6</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0163</td>
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
                        <td>#08</td>
                        <td>#320</td>
                        <td>2.817</td>
                        <td>997.7</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0164</td>
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
                        <td>#08</td>
                        <td>#320</td>
                        <td>3.704</td>
                        <td>423.3</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0165</td>
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
                        <td>#08</td>
                        <td>#321</td>
                        <td>1.000</td>
                        <td>1352.4</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0173</td>
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
                        <td>#08</td>
                        <td>#323</td>
                        <td>3.015</td>
                        <td>1007.2</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0175</td>
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
                        <td>#08</td>
                        <td>#323</td>
                        <td>4.417</td>
                        <td>755.8</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0177</td>
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
                        <td>#08</td>
                        <td>#323</td>
                        <td>4.836</td>
                        <td>1181.3</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0188</td>
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
                        <td>#09</td>
                        <td>#328</td>
                        <td>4.299</td>
                        <td>988.9</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0192</td>
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
                        <td>#09</td>
                        <td>#328</td>
                        <td>1.112</td>
                        <td>1462.8</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0194</td>
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
                        <td>#09</td>
                        <td>#328</td>
                        <td>3.687</td>
                        <td>198.4</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0195</td>
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
                        <td>#09</td>
                        <td>#328</td>
                        <td>3.474</td>
                        <td>345.5</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0208</td>
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
                        <td>#09</td>
                        <td>#342</td>
                        <td>3.779</td>
                        <td>191.5</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Mild
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

export default RefundedEventTable;
