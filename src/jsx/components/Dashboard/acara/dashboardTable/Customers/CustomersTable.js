import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// import data from "./tableData.js";

const CustomersTable = () => {
  const [data, setData] = useState(
    document.querySelectorAll("#example2_Customers tbody tr")
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
    setData(document.querySelectorAll("#example2_Customers tbody tr"));
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

 
  const chackbox = document.querySelectorAll(".sorting_1 input");
  const motherChackBox = document.querySelector(".sorting_asc input");
  // console.log(document.querySelectorAll(".sorting_1 input")[0].checked);
  const chackboxFun = (type) => {
    for (let i = 0; i < chackbox.length; i++) {
      const element = chackbox[i];
      if (type === "all") {
        if (motherChackBox.checked) {
          element.checked = true;
        } else {
          element.checked = false;
        }
      } else {
        if (!element.checked) {
          motherChackBox.checked = false;
          break;
        } else {
          motherChackBox.checked = true;
        }
      }
    }
  };
  return (
    <div className="table-responsive">
      <div id="example2_Customers" className="dataTables_wrapper no-footer">
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
                tabindex="0"
                aria-controls="example2"
                rowSpan="1"
                colSpan="1"
                aria-sort="ascending"
                aria-label="
               : activate to sort column descending"
                style={{ width: "24px" }}
              >
                <div className="checkbox mr-0 align-self-center">
                  <div className="custom-control custom-checkbox ">
                    <input
                      type="checkbox"
                      onClick={() => chackboxFun("all")}
                      className="custom-control-input"
                      id="checkAll"
                      required=""
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="checkAll"
                    ></label>
                  </div>
                </div>
              </th>
              <th
                className="sorting"
                tabindex="0"
                aria-controls="example2"
                rowSpan="1"
                colSpan="1"
                aria-label="Cust. ID: activate to sort column ascending"
                style={{ width: "63px" }}
              >
                Cust. ID
              </th>
              <th
                className="sorting"
                tabindex="0"
                aria-controls="example2"
                rowSpan="1"
                colSpan="1"
                aria-label="Date Join: activate to sort column ascending"
                style={{ width: "70px" }}
              >
                Date Join
              </th>
              <th
                className="sorting"
                tabindex="0"
                aria-controls="example2"
                rowSpan="1"
                colSpan="1"
                aria-label="Customer Name: activate to sort column ascending"
                style={{ width: "114px" }}
              >
                Customer Name
              </th>
              <th
                className="sorting"
                tabindex="0"
                aria-controls="example2"
                rowSpan="1"
                colSpan="1"
                aria-label="Ticket Ordered : activate to sort column ascending"
                style={{ width: "156px" }}
              >
                Ticket Ordered{" "}
              </th>
              <th
                className="sorting"
                tabindex="0"
                aria-controls="example2"
                rowSpan="1"
                colSpan="1"
                aria-label="Location: activate to sort column ascending"
                style={{ width: "89px" }}
              >
                Location
              </th>
              <th
                className="sorting"
                tabindex="0"
                aria-controls="example2"
                rowSpan="1"
                colSpan="1"
                aria-label="Last Order: activate to sort column ascending"
                style={{ width: "76px" }}
              >
                Last Order
              </th>
              <th
                className="sorting"
                tabindex="0"
                aria-controls="example2"
                rowSpan="1"
                colSpan="1"
                aria-label="Total Spent: activate to sort column ascending"
                style={{ width: "81px" }}
              >
                Total Spent
              </th>
              <th
                className="sorting"
                tabindex="0"
                aria-controls="example2"
                rowSpan="1"
                colSpan="1"
                aria-label=": activate to sort column ascending"
                style={{ width: "46px" }}
              ></th>
            </tr>
          </thead>

          <tbody>
            <tr role="row" className="odd">
              <td className="sorting_1">
                <div className="checkbox mr-0 align-self-center">
                  <div className="custom-control custom-checkbox ">
                    <input
                      type="checkbox"
                      onClick={() => chackboxFun()}
                      className="custom-control-input"
                      id="customCheckBox2"
                      required=""
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckBox2"
                    ></label>
                  </div>
                </div>
              </td>
              <td>#0012451</td>
              <td>21/11/2017</td>
              <td>Bella Simatupang</td>
              <td>
                <span className="text-nowrap">
                  The Powerfull Concert <br /> Festival London 2020
                </span>
              </td>
              <td>Sydney, Australia</td>
              <td>
                04/08/2020
                <br />
                12:34 AM
              </td>
              <td>
                <span className="text-primary">$623,55</span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/customers" className="mr-4">
                    <i className="las la-pencil-alt scale-2"></i>
                  </Link>
                  <Link to="/customers">
                    <i className="las la-trash-alt scale-2 text-danger"></i>
                  </Link>
                </div>
              </td>
            </tr>
            <tr role="row" className="even">
              <td className="sorting_1">
                <div className="checkbox mr-0 align-self-center">
                  <div className="custom-control custom-checkbox ">
                    <input
                      type="checkbox"
                      onClick={() => chackboxFun()}
                      className="custom-control-input"
                      id="customCheckBox3"
                      required=""
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckBox3"
                    ></label>
                  </div>
                </div>
              </td>
              <td>#0012451</td>
              <td>21/11/2017</td>
              <td>Olivia Brownlee</td>
              <td>
                <span className="text-nowrap">
                  The Powerfull Concert <br />
                  Festival London 2020
                </span>
              </td>
              <td>Medan, Indonesia</td>
              <td>
                04/08/2020
                <br />
                12:34 AM
              </td>
              <td>
                <span className="text-primary">$246,45</span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/customers" className="mr-4">
                    <i className="las la-pencil-alt scale-2"></i>
                  </Link>
                  <Link to="/customers">
                    <i className="las la-trash-alt scale-2 text-danger"></i>
                  </Link>
                </div>
              </td>
            </tr>
            <tr role="row" className="odd">
              <td className="sorting_1">
                <div className="checkbox mr-0 align-self-center">
                  <div className="custom-control custom-checkbox ">
                    <input
                      type="checkbox"
                      onClick={() => chackboxFun()}
                      className="custom-control-input"
                      id="customCheckBox4"
                      required=""
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckBox4"
                    ></label>
                  </div>
                </div>
              </td>
              <td>#0012451</td>
              <td>21/11/2017</td>
              <td>Cive Slauw</td>
              <td>
                <span className="text-nowrap">
                  The Story of Danau Toba <br />
                  (Musical Drama)
                </span>
              </td>
              <td>London, United Kingdom</td>
              <td>
                04/08/2020
                <br />
                12:34 AM
              </td>
              <td>
                <span className="text-primary">$1,300</span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/customers" className="mr-4">
                    <i className="las la-pencil-alt scale-2"></i>
                  </Link>
                  <Link to="/customers">
                    <i className="las la-trash-alt scale-2 text-danger"></i>
                  </Link>
                </div>
              </td>
            </tr>
            <tr role="row" className="even">
              <td className="sorting_1">
                <div className="checkbox mr-0 align-self-center">
                  <div className="custom-control custom-checkbox ">
                    <input
                      type="checkbox"
                      onClick={() => chackboxFun()}
                      className="custom-control-input"
                      id="customCheckBox5"
                      required=""
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckBox5"
                    ></label>
                  </div>
                </div>
              </td>
              <td>#0012451</td>
              <td>21/11/2017</td>
              <td>Andrew Stevano</td>
              <td>
                <span className="text-nowrap">
                  The Story of Danau Toba <br />
                  (Musical Drama)
                </span>
              </td>
              <td>Sydney, Australia</td>
              <td>
                04/08/2020
                <br />
                12:34 AM
              </td>
              <td>
                <span className="text-primary">$623,55</span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/customers" className="mr-4">
                    <i className="las la-pencil-alt scale-2"></i>
                  </Link>
                  <Link to="/customers">
                    <i className="las la-trash-alt scale-2 text-danger"></i>
                  </Link>
                </div>
              </td>
            </tr>
            <tr role="row" className="odd">
              <td className="sorting_1">
                <div className="checkbox mr-0 align-self-center">
                  <div className="custom-control custom-checkbox ">
                    <input
                      type="checkbox"
                      onClick={() => chackboxFun()}
                      className="custom-control-input"
                      id="customCheckBox6"
                      required=""
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckBox6"
                    ></label>
                  </div>
                </div>
              </td>
              <td>#0012451</td>
              <td>21/11/2017</td>
              <td>James Roberto</td>
              <td>
                <span className="text-nowrap">
                  The Powerfull Concert <br />
                  Festival London 2020
                </span>
              </td>
              <td>Sydney, Australia</td>
              <td>
                04/08/2020
                <br />
                12:34 AM
              </td>
              <td>
                <span className="text-primary">$1,300</span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/customers" className="mr-4">
                    <i className="las la-pencil-alt scale-2"></i>
                  </Link>
                  <Link to="/customers">
                    <i className="las la-trash-alt scale-2 text-danger"></i>
                  </Link>
                </div>
              </td>
            </tr>
            <tr role="row" className="even">
              <td className="sorting_1">
                <div className="checkbox mr-0 align-self-center">
                  <div className="custom-control custom-checkbox ">
                    <input
                      type="checkbox"
                      onClick={() => chackboxFun()}
                      className="custom-control-input"
                      id="customCheckBox7"
                      required=""
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckBox7"
                    ></label>
                  </div>
                </div>
              </td>
              <td>#0012451</td>
              <td>21/11/2017</td>
              <td>Kevin Hurt</td>
              <td>
                <span className="text-nowrap">
                  The Powerfull Concert <br />
                  Festival London 2020
                </span>
              </td>
              <td>Medan, Indonesia</td>
              <td>
                04/08/2020
                <br />
                12:34 AM
              </td>
              <td>
                <span className="text-primary">$623,66</span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/customers" className="mr-4">
                    <i className="las la-pencil-alt scale-2"></i>
                  </Link>
                  <Link to="/customers">
                    <i className="las la-trash-alt scale-2 text-danger"></i>
                  </Link>
                </div>
              </td>
            </tr>
            <tr role="row" className="odd">
              <td className="sorting_1">
                <div className="checkbox mr-0 align-self-center">
                  <div className="custom-control custom-checkbox ">
                    <input
                      type="checkbox"
                      onClick={() => chackboxFun()}
                      className="custom-control-input"
                      id="customCheckBox8"
                      required=""
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckBox8"
                    ></label>
                  </div>
                </div>
              </td>
              <td>#0012451</td>
              <td>21/11/2017</td>
              <td>Kevin Hurt</td>
              <td>
                <span className="text-nowrap">
                  The Powerfull Concert <br />
                  Festival London 2020
                </span>
              </td>
              <td>Medan, Indonesia</td>
              <td>
                04/08/2020
                <br />
                12:34 AM
              </td>
              <td>
                <span className="text-primary">$623,55</span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/customers" className="mr-4">
                    <i className="las la-pencil-alt scale-2"></i>
                  </Link>
                  <Link to="/customers">
                    <i className="las la-trash-alt scale-2 text-danger"></i>
                  </Link>
                </div>
              </td>
            </tr>
            <tr role="row" className="even">
              <td className="sorting_1">
                <div className="checkbox mr-0 align-self-center">
                  <div className="custom-control custom-checkbox ">
                    <input
                      type="checkbox"
                      onClick={() => chackboxFun()}
                      className="custom-control-input"
                      id="customCheckBox9"
                      required=""
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckBox9"
                    ></label>
                  </div>
                </div>
              </td>
              <td>#0012451</td>
              <td>21/11/2017</td>
              <td>Sanuel Jakson</td>
              <td>
                <span className="text-nowrap">
                  The Story of Danau Toba <br />
                  (Musical Drama)
                </span>
              </td>
              <td>Jakarta, Indonesia</td>
              <td>
                04/08/2020
                <br />
                12:34 AM
              </td>
              <td>
                <span className="text-primary">$56,125</span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/customers" className="mr-4">
                    <i className="las la-pencil-alt scale-2"></i>
                  </Link>
                  <Link to="/customers">
                    <i className="las la-trash-alt scale-2 text-danger"></i>
                  </Link>
                </div>
              </td>
            </tr>
            <tr role="row" className="odd">
              <td className="sorting_1">
                <div className="checkbox mr-0 align-self-center">
                  <div className="custom-control custom-checkbox ">
                    <input
                      type="checkbox"
                      onClick={() => chackboxFun()}
                      className="custom-control-input"
                      id="customCheckBox21"
                      required=""
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckBox21"
                    ></label>
                  </div>
                </div>
              </td>
              <td>#0012451</td>
              <td>21/11/2017</td>
              <td>Bella Simatupang</td>
              <td>
                <span className="text-nowrap">
                  The Powerfull Concert <br />
                  Festival London 2020
                </span>
              </td>
              <td>Sydney, Australia</td>
              <td>
                04/08/2020
                <br />
                12:34 AM
              </td>
              <td>
                <span className="text-primary">$623,55</span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/customers" className="mr-4">
                    <i className="las la-pencil-alt scale-2"></i>
                  </Link>
                  <Link to="/customers">
                    <i className="las la-trash-alt scale-2 text-danger"></i>
                  </Link>
                </div>
              </td>
            </tr>
            <tr role="row" className="even">
              <td className="sorting_1">
                <div className="checkbox mr-0 align-self-center">
                  <div className="custom-control custom-checkbox ">
                    <input
                      type="checkbox"
                      onClick={() => chackboxFun()}
                      className="custom-control-input"
                      id="customCheckBox22"
                      required=""
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckBox22"
                    ></label>
                  </div>
                </div>
              </td>
              <td>#0012451</td>
              <td>21/11/2017</td>
              <td>Bella Simatupang</td>
              <td>
                <span className="text-nowrap">
                  The Powerfull Concert <br />
                  Festival London 2020
                </span>
              </td>
              <td>Sydney, Australia</td>
              <td>
                04/08/2020
                <br />
                12:34 AM
              </td>
              <td>
                <span className="text-primary">$623,55</span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/customers" className="mr-4">
                    <i className="las la-pencil-alt scale-2"></i>
                  </Link>
                  <Link to="/customers">
                    <i className="las la-trash-alt scale-2 text-danger"></i>
                  </Link>
                </div>
              </td>
            </tr>
            <tr role="row" className="even">
              <td className="sorting_1">
                <div className="checkbox mr-0 align-self-center">
                  <div className="custom-control custom-checkbox ">
                    <input
                      type="checkbox"
                      onClick={() => chackboxFun()}
                      className="custom-control-input"
                      id="customCheckBox22"
                      required=""
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckBox22"
                    ></label>
                  </div>
                </div>
              </td>
              <td>#0012451</td>
              <td>21/11/2017</td>
              <td>Bella Simatupang</td>
              <td>
                <span className="text-nowrap">
                  The Powerfull Concert <br />
                  Festival London 2020
                </span>
              </td>
              <td>Sydney, Australia</td>
              <td>
                04/08/2020
                <br />
                12:34 AM
              </td>
              <td>
                <span className="text-primary">$623,55</span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/customers" className="mr-4">
                    <i className="las la-pencil-alt scale-2"></i>
                  </Link>
                  <Link to="/customers">
                    <i className="las la-trash-alt scale-2 text-danger"></i>
                  </Link>
                </div>
              </td>
            </tr>
            <tr role="row" className="even">
              <td className="sorting_1">
                <div className="checkbox mr-0 align-self-center">
                  <div className="custom-control custom-checkbox ">
                    <input
                      type="checkbox"
                      onClick={() => chackboxFun()}
                      className="custom-control-input"
                      id="customCheckBox22"
                      required=""
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckBox22"
                    ></label>
                  </div>
                </div>
              </td>
              <td>#0012451</td>
              <td>21/11/2017</td>
              <td>Bella Simatupang</td>
              <td>
                <span className="text-nowrap">
                  The Powerfull Concert <br />
                  Festival London 2020
                </span>
              </td>
              <td>Sydney, Australia</td>
              <td>
                04/08/2020
                <br />
                12:34 AM
              </td>
              <td>
                <span className="text-primary">$623,55</span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/customers" className="mr-4">
                    <i className="las la-pencil-alt scale-2"></i>
                  </Link>
                  <Link to="/customers">
                    <i className="las la-trash-alt scale-2 text-danger"></i>
                  </Link>
                </div>
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
              to="/customers"
              onClick={() =>
                activePag.current > 0 && onClick(activePag.current - 1)
              }
            >
              Previous
            </Link>
            <span>
              {paggination.map((number, i) => (
                <Link
                  key={i}
                  to="/customers"
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
              to="/customers"
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
  );
};

export default CustomersTable;
