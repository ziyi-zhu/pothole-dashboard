import React, { useState, useRef, useEffect } from "react";
//import { Table, Dropdown } from "react-bootstrap";

import { Link } from "react-router-dom";
// import data from "./tableData.js";

const CanceledEventTable = () => {
   const [data, setData] = useState(
      document.querySelectorAll("#example5_wrapper tbody tr")
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
      setData(document.querySelectorAll("#example5_wrapper tbody tr"));
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
      <div id="Canceled" classname="tab-pane">
         <div className="table-responsive">
            <div id="example5_wrapper" className="dataTables_wrapper no-footer">
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

                      <tr role="row" className="even">
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

                      <tr role="row" className="odd">
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

                      <tr role="row" className="even">
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

                      <tr role="row" className="odd">
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

                      <tr role="row" className="even">
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

                      <tr role="row" className="odd">
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

                      <tr role="row" className="even">
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

                      <tr role="row" className="odd">
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

                      <tr role="row" className="even">
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

                      <tr role="row" className="odd">
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

                      <tr role="row" className="even">
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

                      <tr role="row" className="odd">
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

                      <tr role="row" className="even">
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

                      <tr role="row" className="odd">
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

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0105</td>
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
                        <td>#224</td>
                        <td>4.849</td>
                        <td>2494.9</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0116</td>
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
                        <td>3.638</td>
                        <td>520.6</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0120</td>
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
                        <td>3.203</td>
                        <td>1020.7</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0123</td>
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
                        <td>#252</td>
                        <td>1.088</td>
                        <td>430.8</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0125</td>
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
                        <td>#252</td>
                        <td>1.000</td>
                        <td>731.0</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0126</td>
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
                        <td>#252</td>
                        <td>3.289</td>
                        <td>369.4</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0127</td>
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
                        <td>#252</td>
                        <td>1.173</td>
                        <td>3745.4</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0130</td>
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
                        <td>#222</td>
                        <td>3.140</td>
                        <td>721.5</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0132</td>
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
                        <td>#222</td>
                        <td>2.822</td>
                        <td>1036.9</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0133</td>
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
                        <td>#222</td>
                        <td>4.866</td>
                        <td>223.7</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0134</td>
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
                        <td>3.347</td>
                        <td>306.1</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0135</td>
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
                        <td>3.936</td>
                        <td>184.3</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0139</td>
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
                        <td>2.703</td>
                        <td>1293.8</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0142</td>
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
                        <td>2.961</td>
                        <td>1300.1</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0143</td>
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
                        <td>3.230</td>
                        <td>1156.4</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0150</td>
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
                        <td>4.739</td>
                        <td>995.6</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0152</td>
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
                        <td>3.213</td>
                        <td>345.8</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0158</td>
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
                        <td>3.254</td>
                        <td>1404.8</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0168</td>
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
                        <td>4.426</td>
                        <td>1531.6</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0169</td>
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
                        <td>2.896</td>
                        <td>1888.2</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0172</td>
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
                        <td>2.861</td>
                        <td>234.7</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0174</td>
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
                        <td>4.683</td>
                        <td>181.9</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0176</td>
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
                        <td>2.866</td>
                        <td>1579.0</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0178</td>
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
                        <td>#296</td>
                        <td>4.729</td>
                        <td>736.1</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0189</td>
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
                        <td>3.943</td>
                        <td>2604.9</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0193</td>
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
                        <td>4.587</td>
                        <td>2951.6</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0198</td>
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
                        <td>#344</td>
                        <td>3.511</td>
                        <td>315.1</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0199</td>
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
                        <td>#344</td>
                        <td>4.495</td>
                        <td>336.7</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0200</td>
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
                        <td>#344</td>
                        <td>4.622</td>
                        <td>487.8</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0203</td>
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
                        <td>#344</td>
                        <td>4.878</td>
                        <td>2315.4</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0205</td>
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
                        <td>2.585</td>
                        <td>893.4</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="even">
                        <td className="sorting_1">#0207</td>
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
                        <td>4.917</td>
                        <td>828.7</td>
                        <td>
                           <Link to={"#"} className="btn btn-primary btn-sm light">
                              Severe
                           </Link>
                        </td>
                     </tr>

                      <tr role="row" className="odd">
                        <td className="sorting_1">#0210</td>
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
                        <td>4.185</td>
                        <td>494.5</td>
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

export default CanceledEventTable;
