import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import React, { useState } from "react";
import {Link} from 'react-router-dom';
import { Dropdown } from "react-bootstrap";
import CustomersDonut from "./acara/dashboardChart/CustomersDonut";
import RevenueAnalutics from "./acara/dashboardChart/RevenueAnalutics";

const SalesComparison = loadable(() =>
  pMinDelay(import("./acara/dashboardChart/SalesComparison"), 1000)
);
const PieChart = loadable(() =>
  pMinDelay(import("./acara/dashboardChart/PieChart"), 1000)
);
const PolarAreaCharts = loadable(() =>
  pMinDelay(import("./acara/dashboardChart/PolarAreaCharts"), 1000)
);

const Analytics = () => {
  const [refreshToggle, setRefreshToggle] = useState(false);
  return (
    <div className="row">
      <div className="col-xl-9 col-xxl-12">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="media align-items-center">
                  <span className="mr-4">
                    <svg
                      width={50}
                      height={53}
                      viewBox="0 0 50 53"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="7.11688"
                        height="52.1905"
                        rx="3.55844"
                        transform="matrix(-1 0 0 1 49.8184 0)"
                        fill="#FE634E"
                      />
                      <rect
                        width="7.11688"
                        height="37.9567"
                        rx="3.55844"
                        transform="matrix(-1 0 0 1 35.585 14.2338)"
                        fill="#FE634E"
                      />
                      <rect
                        width="7.11688"
                        height="16.6061"
                        rx="3.55844"
                        transform="matrix(-1 0 0 1 21.3516 35.5844)"
                        fill="#FE634E"
                      />
                      <rect
                        width="8.0293"
                        height="32.1172"
                        rx="4.01465"
                        transform="matrix(-1 0 0 1 8.0293 20.0732)"
                        fill="#FE634E"
                      />
                    </svg>
                  </span>
                  <div className="media-body ml-1">
                    <p className="mb-2">Cost</p>
                    <h3 className="mb-0 text-black font-w600">$126,000</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="media align-items-center">
                  <span className="mr-4">
                    <svg
                      width={51}
                      height={31}
                      viewBox="0 0 51 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M49.3228 0.840214C50.7496 2.08096 50.9005 4.24349 49.6597 5.67035L34.6786 22.8987C32.284 25.6525 28.1505 26.0444 25.281 23.7898L19.529 19.2704C18.751 18.6591 17.6431 18.7086 16.9226 19.3866L5.77023 29.883C4.3933 31.1789 2.22651 31.1133 0.930578 29.7363C-0.365358 28.3594 -0.299697 26.1926 1.07723 24.8967L13.4828 13.2209C15.9494 10.8993 19.7428 10.7301 22.4063 12.8229L28.0152 17.2299C28.8533 17.8884 30.0607 17.774 30.7601 16.9696L44.4926 1.1772C45.7334 -0.249661 47.8959 -0.400534 49.3228 0.840214Z"
                        fill="#FE634E"
                      />
                    </svg>
                  </span>
                  <div className="media-body ml-1">
                    <p className="mb-2">Repair</p>
                    <h3 className="mb-0 text-black font-w600">109,511</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="media align-items-center">
                  <span className="mr-4">
                    <svg
                      width={51}
                      height={52}
                      viewBox="0 0 51 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M25.5 43C34.8888 43 42.5 35.3888 42.5 26C42.5 16.6112 34.8888 9 25.5 9C16.1112 9 8.5 16.6112 8.5 26C8.5 35.3888 16.1112 43 25.5 43ZM25.5 51.5C39.5833 51.5 51 40.0833 51 26C51 11.9167 39.5833 0.5 25.5 0.5C11.4167 0.5 0 11.9167 0 26C0 40.0833 11.4167 51.5 25.5 51.5Z"
                        fill="white"
                        fillOpacity="0.18"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M33.9997 1.95836C31.9058 1.21807 29.72 0.75304 27.4976 0.578384C26.3965 0.491843 25.4997 1.39543 25.4997 2.5V6.86605C25.4997 7.97062 26.3981 8.854 27.4951 8.98264C29.8644 9.26046 32.1572 10.031 34.223 11.253C36.8645 12.8155 39.0379 15.0589 40.5159 17.7486C41.9939 20.4384 42.7223 23.4757 42.625 26.5433C42.5277 29.6108 41.6082 32.5959 39.9627 35.1866C38.3172 37.7772 36.006 39.8783 33.2707 41.2703C30.5355 42.6623 27.4766 43.294 24.4136 43.0995C21.3507 42.905 18.3963 41.8913 15.8591 40.1645C13.8749 38.814 12.2029 37.0662 10.9444 35.0397C10.3616 34.1013 9.1801 33.6636 8.18029 34.1331L4.2283 35.989C3.22848 36.4585 2.79178 37.6543 3.33818 38.6143C4.44093 40.5516 5.79093 42.3324 7.35106 43.9131C8.50759 45.0848 9.77958 46.1466 11.1519 47.0806C14.9279 49.6506 19.3249 51.1592 23.8834 51.4487C28.4418 51.7382 32.9943 50.798 37.0652 48.7264C41.136 46.6548 44.5756 43.5277 47.0246 39.6721C49.4736 35.8165 50.842 31.3739 50.9868 26.8085C51.1317 22.2432 50.0476 17.7228 47.8479 13.7197C45.6482 9.71663 42.4137 6.37787 38.4824 4.05236C37.0536 3.2072 35.5519 2.50715 33.9997 1.95836Z"
                        fill="#FE634E"
                      />
                    </svg>
                  </span>
                  <div className="media-body ml-1">
                    <p className="mb-2">Than Last Year</p>
                    <div className="d-flex align-items-center">
                      <h3 className="mb-0 mr-3 text-black font-w600">59%</h3>
                      <svg
                        width={29}
                        height={15}
                        viewBox="0 0 29 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 15L14.5 -1.27353e-06L29 15"
                          fill="#21B830"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-xxl-12">
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header pb-0 border-0">
                    <div className="mr-auto">
                      <h4 className="fs-20 text-black mb-0">
                        Cost Comparison
                      </h4>
                      <span className="text-black fs-20 font-w300">
                        Than last day
                      </span>
                    </div>
                    <span className="fs-38 text-black font-w600 mr-2">57%</span>
                  </div>
                  <div className="card-body pt-2 pb-0">
                    {/* <div id="columnChart" /> */}
                    <SalesComparison />
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header border-0 pb-0 d-sm-flex d-block">
                    <h4 className="card-title mb-1">Recent Projects</h4>
                    <Dropdown className="dropdown">
                      <Dropdown.Toggle
                        as="button"
                        variant=""
                        className="btn rounded p-0 i-false"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect x={0} y={0} width={24} height={24} />
                            <circle fill="#000000" cx={12} cy={5} r={2} />
                            <circle fill="#000000" cx={12} cy={12} r={2} />
                            <circle fill="#000000" cx={12} cy={19} r={2} />
                          </g>
                        </svg>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                        <Dropdown.Item
                          className="dropdown-item"
                          to="/analytics"
                        >
                          View Details
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="dropdown-item"
                          to="/analytics"
                        >
                          Edit
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="dropdown-item"
                          to="/analytics"
                        >
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body pt-0 p-0">
                    <div className="align-items-center row mx-0 border-bottom p-4">
                      <span className="number col-2 col-sm-1 px-0 align-self-center">
                        #1
                      </span>
                      <div className="border border-primary rounded-circle p-3 mr-3">
                        <svg
                          width={28}
                          height={28}
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3184 6.59834C12.5373 5.8173 11.271 5.8173 10.49 6.59834L0.556031 16.5323C0.281453 16.8068 0.281453 17.2521 0.556031 17.5266L3.24911 20.2197C3.44481 20.4154 3.73705 20.4781 3.99582 20.3799C5.0289 19.9878 6.20067 20.2386 6.98098 21.0189C7.76129 21.7992 8.01214 22.971 7.62003 24.0041C7.52178 24.2628 7.5845 24.5551 7.78019 24.7508L10.4733 27.4439C10.7479 27.7185 11.1931 27.7185 11.4677 27.4439L21.4016 17.51C22.1826 16.7289 22.1826 15.4626 21.4016 14.6816L13.3184 6.59834Z"
                            fill="#FE634E"
                          />
                          <path
                            d="M27.4439 10.4734L24.7508 7.78025C24.5551 7.58456 24.2628 7.52185 24.0041 7.62009C22.971 8.0122 21.7993 7.76132 21.019 6.98101C20.2386 6.2007 19.9878 5.02893 20.3799 3.99585C20.4781 3.73711 20.4154 3.44484 20.2197 3.24914L17.5266 0.556062C17.252 0.281484 16.8068 0.281484 16.5322 0.556062L14.3128 2.77554C13.5317 3.55659 13.5317 4.82292 14.3128 5.60396L22.396 13.6872C23.1771 14.4683 24.4434 14.4683 25.2244 13.6872L27.4439 11.4677C27.7185 11.1932 27.7185 10.7479 27.4439 10.4734Z"
                            fill="#FE634E"
                          />
                        </svg>
                      </div>
                      <div className="col-sm-4 col-12 col-xxl-5 my-3 my-sm-0 px-0">
                        <h5 className="mt-0 mb-0">
                          <Link to={"./potholes"} className="text-black" >
                            Beautiful Fireworks Shows In The New Year 2020
                          </Link>
                        </h5>
                      </div>
                      <div className="ml-sm-auto col-2 col-sm-2 px-0 d-flex align-self-center align-items-center">
                        <div className="text-center">
                          <h4 className="mb-0 text-black">454</h4>
                          <span className="fs-14">Potholes</span>
                        </div>
                      </div>
                      <div className="mr-3 col-2 col-sm-1">
                        <span
                          className="peity-success"
                          data-style="width:100%;"
                          style={{ display: "none" }}
                        >
                          0,2,1,4
                        </span>
                        <svg
                          width={26}
                          height={27}
                          viewBox="0 0 26 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="3.71426"
                            height={27}
                            rx="1.85713"
                            transform="matrix(-1 0 0 1 26 0)"
                            fill="#FE634E"
                          />
                          <rect
                            width="3.71426"
                            height="19.6364"
                            rx="1.85713"
                            transform="matrix(-1 0 0 1 18.5723 7.36365)"
                            fill="#FE634E"
                          />
                          <rect
                            width="3.71426"
                            height="8.59091"
                            rx="1.85713"
                            transform="matrix(-1 0 0 1 11.1436 18.4091)"
                            fill="#FE634E"
                          />
                          <rect
                            width="4.19045"
                            height="16.6154"
                            rx="2.09522"
                            transform="matrix(-1 0 0 1 4.19043 10.3846)"
                            fill="#FE634E"
                          />
                        </svg>
                      </div>
                      <svg
                        width={22}
                        height={11}
                        className="col-sm-1 col-2"
                        viewBox="0 0 22 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 11L11 -4.72849e-07L22 11" fill="#21B830" />
                      </svg>
                    </div>
                    <div className="align-items-center row mx-0 border-bottom p-4">
                      <span className="number col-2 col-sm-1 px-0 align-self-center">
                        #2
                      </span>
                      <div className="border border-primary rounded-circle p-3 mr-3">
                        <svg
                          width={28}
                          height={28}
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3184 6.59834C12.5373 5.8173 11.271 5.8173 10.49 6.59834L0.556031 16.5323C0.281453 16.8068 0.281453 17.2521 0.556031 17.5266L3.24911 20.2197C3.44481 20.4154 3.73705 20.4781 3.99582 20.3799C5.0289 19.9878 6.20067 20.2386 6.98098 21.0189C7.76129 21.7992 8.01214 22.971 7.62003 24.0041C7.52178 24.2628 7.5845 24.5551 7.78019 24.7508L10.4733 27.4439C10.7479 27.7185 11.1931 27.7185 11.4677 27.4439L21.4016 17.51C22.1826 16.7289 22.1826 15.4626 21.4016 14.6816L13.3184 6.59834Z"
                            fill="#FE634E"
                          />
                          <path
                            d="M27.4439 10.4734L24.7508 7.78025C24.5551 7.58456 24.2628 7.52185 24.0041 7.62009C22.971 8.0122 21.7993 7.76132 21.019 6.98101C20.2386 6.2007 19.9878 5.02893 20.3799 3.99585C20.4781 3.73711 20.4154 3.44484 20.2197 3.24914L17.5266 0.556062C17.252 0.281484 16.8068 0.281484 16.5322 0.556062L14.3128 2.77554C13.5317 3.55659 13.5317 4.82292 14.3128 5.60396L22.396 13.6872C23.1771 14.4683 24.4434 14.4683 25.2244 13.6872L27.4439 11.4677C27.7185 11.1932 27.7185 10.7479 27.4439 10.4734Z"
                            fill="#FE634E"
                          />
                        </svg>
                      </div>
                      <div className="col-sm-4 col-12 col-xxl-5 my-3 my-sm-0 px-0">
                        <h5 className="mt-0 mb-0">
                          <Link to="./potholes" className="text-black" >
                            Jakarta Indie Music Festival 2020
                          </Link>
                        </h5>
                      </div>
                      <div className="ml-sm-auto col-2 col-sm-2 px-0 d-flex align-self-center align-items-center">
                        <div className="text-center">
                          <h4 className="mb-0 text-black">485</h4>
                          <span className="fs-14">Potholes</span>
                        </div>
                      </div>
                      <div className="mr-3 col-2 col-sm-1">
                        <span
                          className="peity-success"
                          data-style="width:100%;"
                          style={{ display: "none" }}
                        >
                          0,2,1,4
                        </span>
                        <svg
                          width={26}
                          height={27}
                          viewBox="0 0 26 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="3.71426"
                            height={27}
                            rx="1.85713"
                            transform="matrix(-1 0 0 1 26 0)"
                            fill="#FE634E"
                          />
                          <rect
                            width="3.71426"
                            height="19.6364"
                            rx="1.85713"
                            transform="matrix(-1 0 0 1 18.5723 7.36365)"
                            fill="#FE634E"
                          />
                          <rect
                            width="3.71426"
                            height="8.59091"
                            rx="1.85713"
                            transform="matrix(-1 0 0 1 11.1436 18.4091)"
                            fill="#FE634E"
                          />
                          <rect
                            width="4.19045"
                            height="16.6154"
                            rx="2.09522"
                            transform="matrix(-1 0 0 1 4.19043 10.3846)"
                            fill="#FE634E"
                          />
                        </svg>
                      </div>
                      <svg
                        width={22}
                        height={11}
                        className="col-sm-1 col-2"
                        viewBox="0 0 22 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 -9.61651e-07L11 11L22 0" fill="#FF2626" />
                      </svg>
                    </div>
                    <div className="align-items-center row mx-0 border-bottom p-4">
                      <span className="number col-2 col-sm-1 px-0 align-self-center">
                        #3
                      </span>
                      <div className="border border-primary rounded-circle p-3 mr-3">
                        <svg
                          width={28}
                          height={28}
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3184 6.59834C12.5373 5.8173 11.271 5.8173 10.49 6.59834L0.556031 16.5323C0.281453 16.8068 0.281453 17.2521 0.556031 17.5266L3.24911 20.2197C3.44481 20.4154 3.73705 20.4781 3.99582 20.3799C5.0289 19.9878 6.20067 20.2386 6.98098 21.0189C7.76129 21.7992 8.01214 22.971 7.62003 24.0041C7.52178 24.2628 7.5845 24.5551 7.78019 24.7508L10.4733 27.4439C10.7479 27.7185 11.1931 27.7185 11.4677 27.4439L21.4016 17.51C22.1826 16.7289 22.1826 15.4626 21.4016 14.6816L13.3184 6.59834Z"
                            fill="#FE634E"
                          />
                          <path
                            d="M27.4439 10.4734L24.7508 7.78025C24.5551 7.58456 24.2628 7.52185 24.0041 7.62009C22.971 8.0122 21.7993 7.76132 21.019 6.98101C20.2386 6.2007 19.9878 5.02893 20.3799 3.99585C20.4781 3.73711 20.4154 3.44484 20.2197 3.24914L17.5266 0.556062C17.252 0.281484 16.8068 0.281484 16.5322 0.556062L14.3128 2.77554C13.5317 3.55659 13.5317 4.82292 14.3128 5.60396L22.396 13.6872C23.1771 14.4683 24.4434 14.4683 25.2244 13.6872L27.4439 11.4677C27.7185 11.1932 27.7185 10.7479 27.4439 10.4734Z"
                            fill="#FE634E"
                          />
                        </svg>
                      </div>
                      <div className="col-sm-4 col-12 col-xxl-5 my-3 my-sm-0 px-0">
                        <h5 className="mt-0 mb-0">
                          <Link to={"./potholes"} className="text-black" >
                            Live Choir in Sydney 2020
                          </Link>
                        </h5>
                      </div>
                      <div className="ml-sm-auto col-2 col-sm-2 px-0 d-flex align-self-center align-items-center">
                        <div className="text-center">
                          <h4 className="mb-0 text-black">250</h4>
                          <span className="fs-14">Potholes</span>
                        </div>
                      </div>
                      <div className="mr-3 col-2 col-sm-1">
                        <span
                          className="peity-success"
                          data-style="width:100%;"
                          style={{ display: "none" }}
                        >
                          0,2,1,4
                        </span>
                        <svg
                          width={26}
                          height={27}
                          viewBox="0 0 26 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="3.71426"
                            height={27}
                            rx="1.85713"
                            transform="matrix(-1 0 0 1 26 0)"
                            fill="#FE634E"
                          />
                          <rect
                            width="3.71426"
                            height="19.6364"
                            rx="1.85713"
                            transform="matrix(-1 0 0 1 18.5723 7.36365)"
                            fill="#FE634E"
                          />
                          <rect
                            width="3.71426"
                            height="8.59091"
                            rx="1.85713"
                            transform="matrix(-1 0 0 1 11.1436 18.4091)"
                            fill="#FE634E"
                          />
                          <rect
                            width="4.19045"
                            height="16.6154"
                            rx="2.09522"
                            transform="matrix(-1 0 0 1 4.19043 10.3846)"
                            fill="#FE634E"
                          />
                        </svg>
                      </div>
                      <svg
                        width={22}
                        height={11}
                        className="col-sm-1 col-2"
                        viewBox="0 0 22 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 11L11 -4.72849e-07L22 11" fill="#21B830" />
                      </svg>
                    </div>
                    <div className="align-items-center row mx-0 border-bottom p-4">
                      <span className="number col-2 col-sm-1 px-0 align-self-center">
                        #4
                      </span>
                      <div className="border border-primary rounded-circle p-3 mr-3">
                        <svg
                          width={28}
                          height={28}
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3184 6.59834C12.5373 5.8173 11.271 5.8173 10.49 6.59834L0.556031 16.5323C0.281453 16.8068 0.281453 17.2521 0.556031 17.5266L3.24911 20.2197C3.44481 20.4154 3.73705 20.4781 3.99582 20.3799C5.0289 19.9878 6.20067 20.2386 6.98098 21.0189C7.76129 21.7992 8.01214 22.971 7.62003 24.0041C7.52178 24.2628 7.5845 24.5551 7.78019 24.7508L10.4733 27.4439C10.7479 27.7185 11.1931 27.7185 11.4677 27.4439L21.4016 17.51C22.1826 16.7289 22.1826 15.4626 21.4016 14.6816L13.3184 6.59834Z"
                            fill="#FE634E"
                          />
                          <path
                            d="M27.4439 10.4734L24.7508 7.78025C24.5551 7.58456 24.2628 7.52185 24.0041 7.62009C22.971 8.0122 21.7993 7.76132 21.019 6.98101C20.2386 6.2007 19.9878 5.02893 20.3799 3.99585C20.4781 3.73711 20.4154 3.44484 20.2197 3.24914L17.5266 0.556062C17.252 0.281484 16.8068 0.281484 16.5322 0.556062L14.3128 2.77554C13.5317 3.55659 13.5317 4.82292 14.3128 5.60396L22.396 13.6872C23.1771 14.4683 24.4434 14.4683 25.2244 13.6872L27.4439 11.4677C27.7185 11.1932 27.7185 10.7479 27.4439 10.4734Z"
                            fill="#FE634E"
                          />
                        </svg>
                      </div>
                      <div className="col-sm-4 col-12 col-xxl-5 my-3 my-sm-0 px-0">
                        <h5 className="mt-0 mb-0">
                          <Link to={"./potholes"} className="text-black" >
                            Artist Performing Festival In Aus..
                          </Link>
                        </h5>
                      </div>
                      <div className="ml-sm-auto col-2 col-sm-2 px-0 d-flex align-self-center align-items-center">
                        <div className="text-center">
                          <h4 className="mb-0 text-black">350</h4>
                          <span className="fs-14">Potholes</span>
                        </div>
                      </div>
                      <div className="mr-3 col-2 col-sm-1">
                        <span
                          className="peity-success"
                          data-style="width:100%;"
                          style={{ display: "none" }}
                        >
                          0,2,1,4
                        </span>
                        <svg
                          width={26}
                          height={27}
                          viewBox="0 0 26 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="3.71426"
                            height={27}
                            rx="1.85713"
                            transform="matrix(-1 0 0 1 26 0)"
                            fill="#FE634E"
                          />
                          <rect
                            width="3.71426"
                            height="19.6364"
                            rx="1.85713"
                            transform="matrix(-1 0 0 1 18.5723 7.36365)"
                            fill="#FE634E"
                          />
                          <rect
                            width="3.71426"
                            height="8.59091"
                            rx="1.85713"
                            transform="matrix(-1 0 0 1 11.1436 18.4091)"
                            fill="#FE634E"
                          />
                          <rect
                            width="4.19045"
                            height="16.6154"
                            rx="2.09522"
                            transform="matrix(-1 0 0 1 4.19043 10.3846)"
                            fill="#FE634E"
                          />
                        </svg>
                      </div>
                      <svg
                        width={22}
                        height={11}
                        className="col-sm-1 col-2"
                        viewBox="0 0 22 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 -9.61651e-07L11 11L22 0" fill="#FF2626" />
                      </svg>
                    </div>
                    <div className="align-items-center row mx-0 border-bottom p-4">
                      <span className="number col-2 col-sm-1 px-0 align-self-center">
                        #5
                      </span>
                      <div className="border border-primary rounded-circle p-3 mr-3">
                        <svg
                          width={28}
                          height={28}
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3184 6.59834C12.5373 5.8173 11.271 5.8173 10.49 6.59834L0.556031 16.5323C0.281453 16.8068 0.281453 17.2521 0.556031 17.5266L3.24911 20.2197C3.44481 20.4154 3.73705 20.4781 3.99582 20.3799C5.0289 19.9878 6.20067 20.2386 6.98098 21.0189C7.76129 21.7992 8.01214 22.971 7.62003 24.0041C7.52178 24.2628 7.5845 24.5551 7.78019 24.7508L10.4733 27.4439C10.7479 27.7185 11.1931 27.7185 11.4677 27.4439L21.4016 17.51C22.1826 16.7289 22.1826 15.4626 21.4016 14.6816L13.3184 6.59834Z"
                            fill="#FE634E"
                          />
                          <path
                            d="M27.4439 10.4734L24.7508 7.78025C24.5551 7.58456 24.2628 7.52185 24.0041 7.62009C22.971 8.0122 21.7993 7.76132 21.019 6.98101C20.2386 6.2007 19.9878 5.02893 20.3799 3.99585C20.4781 3.73711 20.4154 3.44484 20.2197 3.24914L17.5266 0.556062C17.252 0.281484 16.8068 0.281484 16.5322 0.556062L14.3128 2.77554C13.5317 3.55659 13.5317 4.82292 14.3128 5.60396L22.396 13.6872C23.1771 14.4683 24.4434 14.4683 25.2244 13.6872L27.4439 11.4677C27.7185 11.1932 27.7185 10.7479 27.4439 10.4734Z"
                            fill="#FE634E"
                          />
                        </svg>
                      </div>
                      <div className="col-sm-4 col-12 col-xxl-5 my-3 my-sm-0 px-0">
                        <h5 className="mt-0 mb-0">
                          <Link to={"./potholes"} className="text-black" >
                            [LIVE] Football Charity Event 2020
                          </Link>
                        </h5>
                      </div>
                      <div className="ml-sm-auto col-2 col-sm-2 px-0 d-flex align-self-center align-items-center">
                        <div className="text-center">
                          <h4 className="mb-0 text-black">752</h4>
                          <span className="fs-14">Potholes</span>
                        </div>
                      </div>
                      <div className="mr-3 col-2 col-sm-1">
                        <span
                          className="peity-success"
                          data-style="width:100%;"
                          style={{ display: "none" }}
                        >
                          0,2,1,4
                        </span>
                        <svg
                          width={26}
                          height={27}
                          viewBox="0 0 26 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="3.71426"
                            height={27}
                            rx="1.85713"
                            transform="matrix(-1 0 0 1 26 0)"
                            fill="#FE634E"
                          />
                          <rect
                            width="3.71426"
                            height="19.6364"
                            rx="1.85713"
                            transform="matrix(-1 0 0 1 18.5723 7.36365)"
                            fill="#FE634E"
                          />
                          <rect
                            width="3.71426"
                            height="8.59091"
                            rx="1.85713"
                            transform="matrix(-1 0 0 1 11.1436 18.4091)"
                            fill="#FE634E"
                          />
                          <rect
                            width="4.19045"
                            height="16.6154"
                            rx="2.09522"
                            transform="matrix(-1 0 0 1 4.19043 10.3846)"
                            fill="#FE634E"
                          />
                        </svg>
                      </div>
                      <svg
                        width={22}
                        height={11}
                        className="col-sm-1 col-2"
                        viewBox="0 0 22 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 11L11 -4.72849e-07L22 11" fill="#21B830" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-xxl-12">
            <div className="row">
              <div className="col-xl-12 col-xxl-6 col-md-6">
                <div className="card">
                  <div className="card-header pb-0 border-0">
                    <div>
                      <h5 className="mb-0 text-black font-weight-bold">
                        Pie Chart
                      </h5>
                      <p className="fs-14 mb-0">Pothole Repaired</p>
                    </div>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant=""
                        id="dropdown-basic"
                        className="default-select style-1 btn p-0 filter-option"
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
                          href="#/action-1"
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
                          href="#/action-2"
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
                          href="#/action-3"
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
                  <div className="card-body">
                    {/* <div id="chartCircle" /> */}
                    <PieChart />
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-xxl-6 col-md-6">
                <div className="card">
                  <div className="card-header border-0 pb-0">
                    <h6 className="fs-16 text-black font-w600">Reviewers</h6>
                  </div>
                  <div className="card-body">
                    <div className="d-flex mb-4 align-items-center">
                      <div className="d-inline-block position-relative donut-chart-sale mr-3">
                        {/*  */}
                        <CustomersDonut value={29}  backgroundColor2="#f4f4f4"/>
                        <small className="text-black fs-18">29%</small>
                      </div>
                      <div>
                        <h6 className="fs-18 text-black font-w600">Adult</h6>
                        <span className="fs-14">30 - 45 Years</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="d-inline-block position-relative donut-chart-sale mr-3">
                        <CustomersDonut value={84}  backgroundColor2="#f4f4f4"/>
                        <small className="text-black fs-18">84%</small>
                      </div>
                      <div>
                        <h6 className="fs-18 text-black font-w600">Young</h6>
                        <span className="fs-14">17 - 24 Years</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-xxl-12">
        <div className="row">
          <div className="col-xl-12 col-xxl-6 col-md-6">
            <div className="card">
              <div className="card-header border-0 pb-0">
                <h4 className="card-title">Road Summary</h4>
                <Dropdown>
                  <Dropdown.Toggle
                    variant=""
                    id="dropdown-basic"
                    className="default-select style-1 p-0 btn filter-option"
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                    }}
                  >
                    {refreshToggle ? refreshToggle : "This Week"}
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    className="dropdown-menu inner show"
                    style={{ borderRadius: "10px" }}
                  >
                    <Dropdown.Item
                      className="dropdown-item"
                      href="#/action-1"
                      onClick={() => setRefreshToggle("This Week")}
                      style={{
                        fontSize: "12px",
                        fontWeight: "400",
                        textAlign: "center",
                        margin: "0 auto",
                        paddingTop: "15px",
                      }}
                    >
                      This Week
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="dropdown-item"
                      href="#/action-2"
                      onClick={() => setRefreshToggle("Next Week")}
                      style={{
                        fontSize: "12px",
                        fontWeight: "400",
                        textAlign: "center",
                        margin: "0 auto",
                      }}
                    >
                      Next Week
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="dropdown-item"
                      href="#/action-3"
                      onClick={() => setRefreshToggle("This Month")}
                      style={{
                        fontSize: "12px",
                        fontWeight: "400",
                        textAlign: "center",
                        margin: "0 auto",
                      }}
                    >
                      This Month
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="dropdown-item"
                      href="#/action-3"
                      onClick={() => setRefreshToggle("Next Month")}
                      style={{
                        fontSize: "12px",
                        fontWeight: "400",
                        textAlign: "center",
                        margin: "0 auto",
                        paddingBottom: "15px",
                      }}
                    >
                      Next Month
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between fs-14 mb-4">
                  <span className="text-black">Tuesday</span>
                  <span className="text-black">5,523 roads</span>
                </div>
                <div className="text-center">
                  <PolarAreaCharts />
                </div>
                <div className="row mx-0">
                  <div className="col-6 px-0 d-flex align-items-center mb-3">
                    <svg
                      className="mr-3"
                      width={25}
                      height={25}
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={25} height={25} rx="12.5" fill="#FE634E" />
                    </svg>
                    <div>
                      <h5 className="mb-1 text-black">Main</h5>
                      <span>30%</span>
                    </div>
                  </div>
                  <div className="col-6 px-0 d-flex align-items-center mb-3">
                    <svg
                      className="mr-3"
                      width={25}
                      height={25}
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={25} height={25} rx="12.5" fill="#707070" />
                    </svg>
                    <div>
                      <h5 className="mb-1 text-black">Residential</h5>
                      <span>24%</span>
                    </div>
                  </div>
                  <div className="col-6 px-0 d-flex align-items-center">
                    <svg
                      className="mr-3"
                      width={25}
                      height={25}
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={25} height={25} rx="12.5" fill="#BFBFBF" />
                    </svg>
                    <div>
                      <h5 className="mb-1 text-black">Industrial</h5>
                      <span>30%</span>
                    </div>
                  </div>
                  <div className="col-6 px-0 d-flex align-items-center">
                    <svg
                      className="mr-3"
                      width={25}
                      height={25}
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={25} height={25} rx="12.5" fill="#F3F3F3" />
                    </svg>
                    <div>
                      <h5 className="mb-1 text-black">Motorways</h5>
                      <span>2%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12 col-xxl-6 col-md-6">
            <div className="card">
              <div className="card-header border-0 pb-0">
                <h4 className="card-title">Total Cost</h4>
                <Dropdown className="dropdown">
                  <Dropdown.Toggle
                    as="button"
                    variant=""
                    className="btn rounded p-0 i-false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect x={0} y={0} width={24} height={24} />
                        <circle fill="#000000" cx={12} cy={5} r={2} />
                        <circle fill="#000000" cx={12} cy={12} r={2} />
                        <circle fill="#000000" cx={12} cy={19} r={2} />
                      </g>
                    </svg>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                    <Dropdown.Item className="dropdown-item" to="/potholess">
                      View Details
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" to="/potholess">
                      Edit
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" to="/potholess">
                      Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="card-body">
                {/* <canvas id="areaChart_2" height={350} /> */}
                <RevenueAnalutics />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
