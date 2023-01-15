import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
// images
import image001 from "../../../images/road.jpg";
import Donut from "./acara/dashboardChart/Donut";
import Donut2 from "./acara/dashboardChart/Donut2";
import Increase from "./acara/dashboardChart/Increase";
import SalesChart from "./acara/dashboardChart/Sales";
// Charts
import SalesCharts from "./acara/dashboardChart/SalesCharts";

const EventDetail = () => {
  const [refreshToggle, setRefreshToggle] = useState(false);
  return (
    <>
      <div className="modal fade" id="addOrderModalside">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Event</h5>
              <button type="button" className="close" data-dismiss="modal">
                <span>×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label className="text-black font-w500">Event Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="text-black font-w500">Event Date</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="text-black font-w500">Description</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <button type="button" className="btn btn-primary">
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-9 col-xxl-8">
          <div className="row">
            <div className="col-xl-12">
              <div className="card event-detail-bx overflow-hidden">
                <div className="card-media">
                  <img src={image001} alt="image001" className="w-100" />
                </div>
                <div className="card-body">
                  <div className="d-flex flex-wrap align-items-center mb-4">
                    <h2 className="text-black col-xl-6 p-0 col-xxl-12 mr-auto title mb-3">
                      Abd Al Rahman Al Naser
                    </h2>
                    <div className="d-flex align-items-center">
                      <Link
                        to="/road-detail"
                        className="btn btn-primary light mr-3"
                      >
                        <i
                          className="fa fa-wrench mr-3 scale5"
                          aria-hidden="true"
                        ></i>
                        Repairs Activity
                      </Link>
                      <Link to="/road-detail" className="share-icon mr-3">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11 2H6C3.791 2 2 3.791 2 6V18C2 20.209 3.791 22 6 22H18C20.209 22 22 20.209 22 18C22 15.729 22 13 22 13C22 12.448 21.552 12 21 12C20.448 12 20 12.448 20 13V18C20 19.104 19.104 20 18 20C14.67 20 9.329 20 6 20C4.895 20 4 19.104 4 18C4 14.67 4 9.329 4 6C4 4.895 4.895 4 6 4H11C11.552 4 12 3.552 12 3C12 2.448 11.552 2 11 2ZM18.586 4H15C14.448 4 14 3.552 14 3C14 2.448 14.448 2 15 2H21C21.552 2 22 2.448 22 3V9C22 9.552 21.552 10 21 10C20.448 10 20 9.552 20 9V5.414L12.707 12.707C12.317 13.097 11.683 13.097 11.293 12.707C10.902 12.317 10.902 11.683 11.293 11.293L18.586 4Z"
                            fill="#FE634E"
                          ></path>
                        </svg>
                      </Link>
                      <Dropdown className="">
                        <Dropdown.Toggle
                          as="button"
                          variant=""
                          className="share-icon i-false"
                          style={{
							backgroundColor: "transparent",
                          }}
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                              stroke="#FE634E"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                              stroke="#FE634E"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                              stroke="#FE634E"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                          <Dropdown.Item className="dropdown-item" to="/events">
                            View Detail
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" to="/events">
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" to="/events">
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-xxl-6 mb-3">
                      <div className="media bg-light p-3 rounded align-items-center">
                        <svg
                          className="mr-2"
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.07438 25H7.95454V22.6464C11.8595 22.302 14 19.6039 14 16.8197C14 12.7727 10.8471 11.9977 7.95454 11.3088V5.10907C9.34297 5.4535 10.1529 6.5155 10.2686 7.66361H13.7975C13.5372 4.42021 11.281 2.61194 7.95454 2.32492V0H6.07438V2.35362C2.4876 2.66935 0 4.87945 0 8.09415C0 12.1412 3.18182 12.9449 6.07438 13.6625V19.977C4.45455 19.69 3.64463 18.628 3.52893 17.1929H0C0 20.4363 2.54545 22.3594 6.07438 22.6751V25ZM10.6736 16.992C10.6736 18.4845 9.69008 19.69 7.95454 19.977V14.1504C9.51653 14.6383 10.6736 15.3559 10.6736 16.992ZM3.35537 7.92193C3.35537 6.17107 4.48347 5.22388 6.07438 5.02296V10.8209C4.5124 10.333 3.35537 9.58668 3.35537 7.92193Z"
                            fill="#FE634E"
                          ></path>
                        </svg>
                        <div className="media-body">
                          <span className="fs-12 d-block mb-1">
                            Estimated Cost
                          </span>
                          <span className="fs-16 text-black">$124,000</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-xxl-6 mb-3">
                      <div className="media bg-light p-3 rounded align-items-center">
                        <svg
                          className="mr-4"
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0)">
                            <path
                              d="M21 3H20C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.31607 17.7956 0 17 0C16.2044 0 15.4413 0.31607 14.8787 0.87868C14.3161 1.44129 14 2.20435 14 3H10C10 2.20435 9.68393 1.44129 9.12132 0.87868C8.55871 0.316071 7.79565 4.47035e-08 7 4.47035e-08C6.20435 4.47035e-08 5.44129 0.316071 4.87868 0.87868C4.31607 1.44129 4 2.20435 4 3H3C2.20435 3 1.44129 3.31607 0.87868 3.87868C0.31607 4.44129 0 5.20435 0 6L0 21C0 21.7956 0.31607 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24H21C21.7956 24 22.5587 23.6839 23.1213 23.1213C23.6839 22.5587 24 21.7956 24 21V6C24 5.20435 23.6839 4.44129 23.1213 3.87868C22.5587 3.31607 21.7956 3 21 3ZM3 5H4C4 5.79565 4.31607 6.55871 4.87868 7.12132C5.44129 7.68393 6.20435 8 7 8C7.26522 8 7.51957 7.89464 7.70711 7.70711C7.89464 7.51957 8 7.26522 8 7C8 6.73478 7.89464 6.48043 7.70711 6.29289C7.51957 6.10536 7.26522 6 7 6C6.73478 6 6.48043 5.89464 6.29289 5.70711C6.10536 5.51957 6 5.26522 6 5V3C6 2.73478 6.10536 2.48043 6.29289 2.29289C6.48043 2.10536 6.73478 2 7 2C7.26522 2 7.51957 2.10536 7.70711 2.29289C7.89464 2.48043 8 2.73478 8 3V4C8 4.26522 8.10536 4.51957 8.29289 4.70711C8.48043 4.89464 8.73478 5 9 5H14C14 5.79565 14.3161 6.55871 14.8787 7.12132C15.4413 7.68393 16.2044 8 17 8C17.2652 8 17.5196 7.89464 17.7071 7.70711C17.8946 7.51957 18 7.26522 18 7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6C16.7348 6 16.4804 5.89464 16.2929 5.70711C16.1054 5.51957 16 5.26522 16 5V3C16 2.73478 16.1054 2.48043 16.2929 2.29289C16.4804 2.10536 16.7348 2 17 2C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V4C18 4.26522 18.1054 4.51957 18.2929 4.70711C18.4804 4.89464 18.7348 5 19 5H21C21.2652 5 21.5196 5.10536 21.7071 5.29289C21.8946 5.48043 22 5.73478 22 6V10H2V6C2 5.73478 2.10536 5.48043 2.29289 5.29289C2.48043 5.10536 2.73478 5 3 5ZM21 22H3C2.73478 22 2.48043 21.8946 2.29289 21.7071C2.10536 21.5196 2 21.2652 2 21V12H22V21C22 21.2652 21.8946 21.5196 21.7071 21.7071C21.5196 21.8946 21.2652 22 21 22Z"
                              fill="#FE634E"
                            ></path>
                            <path
                              d="M12 16C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15C11 15.5523 11.4477 16 12 16Z"
                              fill="#FE634E"
                            ></path>
                            <path
                              d="M18 16C18.5523 16 19 15.5523 19 15C19 14.4477 18.5523 14 18 14C17.4477 14 17 14.4477 17 15C17 15.5523 17.4477 16 18 16Z"
                              fill="#FE634E"
                            ></path>
                            <path
                              d="M6 16C6.55228 16 7 15.5523 7 15C7 14.4477 6.55228 14 6 14C5.44771 14 5 14.4477 5 15C5 15.5523 5.44771 16 6 16Z"
                              fill="#FE634E"
                            ></path>
                            <path
                              d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                              fill="#FE634E"
                            ></path>
                            <path
                              d="M18 20C18.5523 20 19 19.5523 19 19C19 18.4477 18.5523 18 18 18C17.4477 18 17 18.4477 17 19C17 19.5523 17.4477 20 18 20Z"
                              fill="#FE634E"
                            ></path>
                            <path
                              d="M6 20C6.55228 20 7 19.5523 7 19C7 18.4477 6.55228 18 6 18C5.44771 18 5 18.4477 5 19C5 19.5523 5.44771 20 6 20Z"
                              fill="#FE634E"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0">
                              <rect width="24" height="24" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                        <div className="media-body">
                          <span className="fs-12 d-block mb-1">Date</span>
                          <span className="fs-16 text-black">
                            Sunday, 15 January 2023
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-xxl-12 mb-3">
                      <div className="media bg-light p-3 rounded align-items-center">
                        <svg
                          className="mr-4"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="">
                            <path
                              d="M27.5713 13.4286C27.5713 22.4286 15.9999 30.1428 15.9999 30.1428C15.9999 30.1428 4.42847 22.4286 4.42847 13.4286C4.42847 10.3596 5.6476 7.41638 7.81766 5.24632C9.98772 3.07625 12.931 1.85712 15.9999 1.85712C19.0688 1.85712 22.0121 3.07625 24.1821 5.24632C26.3522 7.41638 27.5713 10.3596 27.5713 13.4286Z"
                              stroke="#FE634E"
                              stroke-width="3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M15.9997 17.2857C18.13 17.2857 19.8569 15.5588 19.8569 13.4286C19.8569 11.2983 18.13 9.57141 15.9997 9.57141C13.8695 9.57141 12.1426 11.2983 12.1426 13.4286C12.1426 15.5588 13.8695 17.2857 15.9997 17.2857Z"
                              stroke="#FE634E"
                              stroke-width="3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip3">
                              <rect
                                width="30.8571"
                                height="30.8571"
                                fill="white"
                                transform="translate(0.571289 0.571411)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                        <div className="media-body">
                          <span className="fs-12 d-block mb-1">Location</span>
                          <span className="fs-16 text-black">
                            King Faisal Dt., Riyadh 13215, Saudi Arabia
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="fs-20 text-black font-w600">
                    Road Description
                  </h4>
                  <p className="fs-14 mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body p-0">
                  <div className="table-responsive fs-14">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>
                            <strong>Pothole ID</strong>
                          </th>
                          <th>
                            <strong>Date</strong>
                          </th>
                          <th>
                            <strong>Reviewer</strong>
                          </th>
                          <th>
                            <strong>Location</strong>
                          </th>
                          <th>
                            <strong>Severity</strong>
                          </th>
                          <th>
                            <strong>Repaired</strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#0012451</td>
                          <td>04/01/2023 12:34 AM</td>
                          <td>Elisabeth Queen</td>
                          <td>Riyadh, Saudi Arabia</td>
                          <td>Moderate</td>
                          <td>
                            <strong>NO</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>#0012451</td>
                          <td>04/01/2023 12:34 AM</td>
                          <td>Elisabeth Queen</td>
                          <td>Riyadh, Saudi Arabia</td>
                          <td>Moderate</td>
                          <td>
                            <strong>NO</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>#0012451</td>
                          <td>04/01/2023 12:34 AM</td>
                          <td>Elisabeth Queen</td>
                          <td>Riyadh, Saudi Arabia</td>
                          <td>Moderate</td>
                          <td>
                            <strong>NO</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>#0012451</td>
                          <td>04/01/2023 12:34 AM</td>
                          <td>Elisabeth Queen</td>
                          <td>Riyadh, Saudi Arabia</td>
                          <td>Moderate</td>
                          <td>
                            <strong>NO</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>#0012451</td>
                          <td>04/01/2023 12:34 AM</td>
                          <td>Elisabeth Queen</td>
                          <td>Riyadh, Saudi Arabia</td>
                          <td>Moderate</td>
                          <td>
                            <strong>NO</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>#0012451</td>
                          <td>04/01/2023 12:34 AM</td>
                          <td>Elisabeth Queen</td>
                          <td>Riyadh, Saudi Arabia</td>
                          <td>Moderate</td>
                          <td>
                            <strong>NO</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-xxl-4">
          <div className="row">
            <div className="col-xl-12 col-sm-6">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h4 className="fs-20 text-black">Road Summary</h4>
                </div>
                <div className="card-body pt-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fs-14">Tuesday</span>
                    <span className="text-black fs-18 font-w500">215 potholes</span>
                  </div>
                  {/* <div id="radialBar"></div> */}
                  <SalesChart />
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className="fs-28 text-black font-w600 mb-1">25 Left</p>
                      <span>Pending Repairs</span>
                    </div>
                    <div className="d-inline-block ml-auto position-relative donut-chart-sale">
                      <Donut2 value={65} backgroundColor2="#f4f4f4"/>
                      <small className="text-primary">65%</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-sm-6">
              <div className="row">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-end">
                        <div className="chartjs-size-monitor">
                          <div className="chartjs-size-monitor-expand">
                            <div className=""></div>
                          </div>
                          <div className="chartjs-size-monitor-shrink">
                            <div className=""></div>
                          </div>
                        </div>
                        <div>
                          <p className="fs-14 mb-1">New Potholes</p>
                          <span className="fs-35 text-black font-w600">
                            93
                            <svg
                              className="ml-2"
                              width="19"
                              height="12"
                              viewBox="0 0 19 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.00401 11.1924C0.222201 11.1924 -0.670134 9.0381 0.589795 7.77817L7.78218 0.585786C8.56323 -0.195262 9.82956 -0.195262 10.6106 0.585786L17.803 7.77817C19.0629 9.0381 18.1706 11.1924 16.3888 11.1924H2.00401Z"
                                fill="#33C25B"
                              ></path>
                            </svg>
                          </span>
                        </div>
                        <SalesCharts />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <p className="fs-14 mb-1">Repaired</p>
                          <span className="fs-35 text-black font-w600">
                            56
                            <svg
                              className="ml-2"
                              width="19"
                              height="12"
                              viewBox="0 0 19 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.00401 11.1924C0.222201 11.1924 -0.670134 9.0381 0.589795 7.77817L7.78218 0.585786C8.56323 -0.195262 9.82956 -0.195262 10.6106 0.585786L17.803 7.77817C19.0629 9.0381 18.1706 11.1924 16.3888 11.1924H2.00401Z"
                                fill="#33C25B"
                              ></path>
                            </svg>
                          </span>
                        </div>
                        <div className="d-inline-block ml-auto position-relative donut-chart-sale">
                          <Donut value={75}  backgroundColor2="#f4f4f4" />
                          <small className="text-secondary">90%</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0 border-0">
                      <div>
                        <h4 className="fs-16 mb-0 text-black font-w600">
                          Increase 25%
                        </h4>
                        <span className="fs-12">Comparisson</span>
                      </div>
                      <div className="dropdown bootstrap-select form-control style-1 default-select">
                        <Dropdown>
                          <Dropdown.Toggle
                            variant=""
                            id="dropdown-basic"
                            className="default-select style-1 btn filter-option"
                            style={{
                              fontSize: "12px",
                              fontWeight: "400",
                            }}
                          >
                            {refreshToggle ? refreshToggle : "Daily"}
                          </Dropdown.Toggle>

                          <Dropdown.Menu
                            className="dropdown-menu inner show"
                            style={{ borderRadius: "10px" }}
                          >
                            <Dropdown.Item
                              className="dropdown-item"
                              href="#"
                              onClick={() => setRefreshToggle("Daily")}
                              style={{
                                fontSize: "12px",
                                fontWeight: "400",
                                margin: "0 auto",
                                paddingTop: "15px",
                              }}
                            >
                              Daily
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="dropdown-item"
                              href="#"
                              onClick={() => setRefreshToggle("Monthly")}
                              style={{
                                fontSize: "12px",
                                fontWeight: "400",
                                margin: "0 auto",
                              }}
                            >
                              Monthly
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="dropdown-item"
                              href="#"
                              onClick={() => setRefreshToggle("Weekly")}
                              style={{
                                fontSize: "12px",
                                fontWeight: "400",
                                margin: "0 auto",
                              }}
                            >
                              Weekly
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    <div className="card-body pt-0">
                      <div className="chartjs-size-monitor">
                        <div className="chartjs-size-monitor-expand">
                          <div className=""></div>
                        </div>
                        <div className="chartjs-size-monitor-shrink">
                          <div className=""></div>
                        </div>
                      </div>
                      <Increase />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetail;
