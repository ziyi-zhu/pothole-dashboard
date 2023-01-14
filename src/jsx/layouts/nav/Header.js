import React from "react";

import { Link } from "react-router-dom";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

/// Image
import profile from "../../../images/profile/17.jpg";
import avatar from "../../../images/avatar/1.jpg";
import { Dropdown } from "react-bootstrap";
import Logout from './Logout';

const Header = ({ onNote }) => {
   var path = window.location.pathname.split("/");
   var name = path[path.length - 1].split("-");
   var filterName = name.length >= 3 ? name.filter((n, i) => i > 0) : name;
   var finalName = filterName.includes("app")
      ? filterName.filter((f) => f !== "app")
      : filterName.includes("ui")
      ? filterName.filter((f) => f !== "ui")
      : filterName.includes("uc")
      ? filterName.filter((f) => f !== "uc")
      : filterName.includes("basic")
      ? filterName.filter((f) => f !== "basic")
      : filterName.includes("jquery")
      ? filterName.filter((f) => f !== "jquery")
      : filterName.includes("table")
      ? filterName.filter((f) => f !== "table")
      : filterName.includes("page")
      ? filterName.filter((f) => f !== "page")
      : filterName.includes("email")
      ? filterName.filter((f) => f !== "email")
      : filterName.includes("ecom")
      ? filterName.filter((f) => f !== "ecom")
      : filterName.includes("chart")
      ? filterName.filter((f) => f !== "chart")
      : filterName.includes("editor")
      ? filterName.filter((f) => f !== "editor")
      : filterName;
   return (
      <div className="header">
         <div className="header-content">
            <nav className="navbar navbar-expand">
               <div className="collapse navbar-collapse justify-content-between">
                  <div className="header-left">
                     <div
                        className="dashboard_bar"
                        style={{ textTransform: "capitalize" }}
                     >
                        {finalName.join(" ").length === 0
                           ? "Dashboard"
                           : finalName.join(" ")}
                     </div>
                  </div>

                  <ul className="navbar-nav header-right">
                     <li className="nav-item">
                        <div className="input-group search-area d-xl-inline-flex d-none">
                           <input
                              type="text"
                              className="form-control"
                              placeholder="Search here..."
                           />
                           <div className="input-group-append">
                              <span className="input-group-text">
                                 <Link to="">
                                    <Link className="flaticon-381-search-2"></Link>
                                 </Link>
                              </span>
                           </div>
                        </div>
                     </li>

                     <Dropdown
                        as="li"
                        className="nav-item dropdown notification_dropdown "
                     >
                        <Dropdown.Toggle
                           variant=""
                           className="nav-link  ai-icon i-false"
                           href="#"
                           role="button"
                           data-toggle="dropdown"
                        >
                           <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 fillRule="evenodd"
                                 clipRule="evenodd"
                                 d="M12.8333 5.91732V3.49998C12.8333 2.85598 13.356 2.33331 14 2.33331C14.6428 2.33331 15.1667 2.85598 15.1667 3.49998V5.91732C16.9003 6.16698 18.5208 6.97198 19.7738 8.22498C21.3057 9.75681 22.1667 11.8346 22.1667 14V18.3913L23.1105 20.279C23.562 21.1831 23.5142 22.2565 22.9822 23.1163C22.4513 23.9761 21.5122 24.5 20.5018 24.5H15.1667C15.1667 25.144 14.6428 25.6666 14 25.6666C13.356 25.6666 12.8333 25.144 12.8333 24.5H7.49817C6.48667 24.5 5.54752 23.9761 5.01669 23.1163C4.48469 22.2565 4.43684 21.1831 4.88951 20.279L5.83333 18.3913V14C5.83333 11.8346 6.69319 9.75681 8.22502 8.22498C9.47919 6.97198 11.0985 6.16698 12.8333 5.91732ZM14 8.16664C12.4518 8.16664 10.969 8.78148 9.87469 9.87581C8.78035 10.969 8.16666 12.453 8.16666 14V18.6666C8.16666 18.8475 8.12351 19.026 8.04301 19.1881C8.04301 19.1881 7.52384 20.2265 6.9755 21.322C6.88567 21.5028 6.89501 21.7186 7.00117 21.8901C7.10734 22.0616 7.29517 22.1666 7.49817 22.1666H20.5018C20.7037 22.1666 20.8915 22.0616 20.9977 21.8901C21.1038 21.7186 21.1132 21.5028 21.0234 21.322C20.475 20.2265 19.9558 19.1881 19.9558 19.1881C19.8753 19.026 19.8333 18.8475 19.8333 18.6666V14C19.8333 12.453 19.2185 10.969 18.1242 9.87581C17.0298 8.78148 15.547 8.16664 14 8.16664Z"
                                 fill="#FE634E"
                              ></path>
                           </svg>
                           <div className="pulse-css" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu align="right" className="mt-2">
                           <PerfectScrollbar className="widget-media dz-scroll p-3 height380 ps">
                              <ul className="timeline">
                                 <li>
                                    <div className="timeline-panel">
                                       <div className="media mr-2">
                                          <img
                                             alt="images"
                                             width={50}
                                             src={avatar}
                                          />
                                       </div>
                                       <div className="media-body">
                                          <h6 className="mb-1">
                                             Dr sultads Send you Photo
                                          </h6>
                                          <small className="d-block">
                                             29 July 2020 - 02:26 PM
                                          </small>
                                       </div>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="timeline-panel">
                                       <div className="media mr-2 media-info">
                                          KG
                                       </div>
                                       <div className="media-body">
                                          <h6 className="mb-1">
                                             Resport created successfully
                                          </h6>
                                          <small className="d-block">
                                             29 July 2020 - 02:26 PM
                                          </small>
                                       </div>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="timeline-panel">
                                       <div className="media mr-2 media-success">
                                          <i className="fa fa-home" />
                                       </div>
                                       <div className="media-body">
                                          <h6 className="mb-1">
                                             Reminder : Treatment Time!
                                          </h6>
                                          <small className="d-block">
                                             29 July 2020 - 02:26 PM
                                          </small>
                                       </div>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="timeline-panel">
                                       <div className="media mr-2">
                                          <img
                                             alt=""
                                             width={50}
                                             src={avatar}
                                          />
                                       </div>
                                       <div className="media-body">
                                          <h6 className="mb-1">
                                             Dr sultads Send you Photo
                                          </h6>
                                          <small className="d-block">
                                             29 July 2020 - 02:26 PM
                                          </small>
                                       </div>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="timeline-panel">
                                       <div className="media mr-2 media-danger">
                                          KG
                                       </div>
                                       <div className="media-body">
                                          <h6 className="mb-1">
                                             Resport created successfully
                                          </h6>
                                          <small className="d-block">
                                             29 July 2020 - 02:26 PM
                                          </small>
                                       </div>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="timeline-panel">
                                       <div className="media mr-2 media-primary">
                                          <i className="fa fa-home" />
                                       </div>
                                       <div className="media-body">
                                          <h6 className="mb-1">
                                             Reminder : Treatment Time!
                                          </h6>
                                          <small className="d-block">
                                             29 July 2020 - 02:26 PM
                                          </small>
                                       </div>
                                    </div>
                                 </li>
                              </ul>
                              <div
                                 className="ps__rail-x"
                                 style={{ left: 0, bottom: 0 }}
                              >
                                 <div
                                    className="ps__thumb-x"
                                    tabIndex={0}
                                    style={{ left: 0, width: 0 }}
                                 />
                              </div>
                              <div
                                 className="ps__rail-y"
                                 style={{ top: 0, right: 0 }}
                              >
                                 <div
                                    className="ps__thumb-y"
                                    tabIndex={0}
                                    style={{ top: 0, height: 0 }}
                                 />
                              </div>
                           </PerfectScrollbar>
                           <Link className="all-notification" to="#">
                              See all notifications{" "}
                              <i className="ti-arrow-right" />
                           </Link>
                        </Dropdown.Menu>
                     </Dropdown>
                     <Dropdown
                        as="li"
                        className="nav-item dropdown notification_dropdown "
                     >
                        <Dropdown.Toggle
                           variant=""
                           className="nav-link bell bell-link i-false"
                           onClick={() => onNote()}
                        >
                           <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 fillRule="evenodd"
                                 clipRule="evenodd"
                                 d="M25.6666 8.16666C25.6666 5.5895 23.5771 3.5 21 3.5C17.1161 3.5 10.8838 3.5 6.99998 3.5C4.42281 3.5 2.33331 5.5895 2.33331 8.16666V23.3333C2.33331 23.8058 2.61798 24.2305 3.05315 24.4113C3.48948 24.5922 3.99115 24.4918 4.32481 24.1582C4.32481 24.1582 6.59281 21.8902 7.96714 20.517C8.40464 20.0795 8.99733 19.8333 9.61683 19.8333H21C23.5771 19.8333 25.6666 17.7438 25.6666 15.1667V8.16666ZM23.3333 8.16666C23.3333 6.87866 22.2891 5.83333 21 5.83333C17.1161 5.83333 10.8838 5.83333 6.99998 5.83333C5.71198 5.83333 4.66665 6.87866 4.66665 8.16666V20.517L6.31631 18.8673C7.19132 17.9923 8.37899 17.5 9.61683 17.5H21C22.2891 17.5 23.3333 16.4558 23.3333 15.1667V8.16666ZM8.16665 15.1667H17.5C18.144 15.1667 18.6666 14.644 18.6666 14C18.6666 13.356 18.144 12.8333 17.5 12.8333H8.16665C7.52265 12.8333 6.99998 13.356 6.99998 14C6.99998 14.644 7.52265 15.1667 8.16665 15.1667ZM8.16665 10.5H19.8333C20.4773 10.5 21 9.97733 21 9.33333C21 8.68933 20.4773 8.16666 19.8333 8.16666H8.16665C7.52265 8.16666 6.99998 8.68933 6.99998 9.33333C6.99998 9.97733 7.52265 10.5 8.16665 10.5Z"
                                 fill="#FE634E"
                              ></path>
                           </svg>
                           <div className="pulse-css" />
                        </Dropdown.Toggle>
                     </Dropdown>
                     <Dropdown
                        as="li"
                        className="nav-item dropdown header-profile"
                     >
                        <Dropdown.Toggle
                           variant=""
                           as="a"
                           className="nav-link i-false"
                           href="#"
                           role="button"
                           data-toggle="dropdown"
                        >
                           <img src={profile} width={20} alt="profile" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu align="right" className="mt-2">
                           <Link
                              to="/app-profile"
                              className="dropdown-item ai-icon"
                           >
                              <svg
                                 id="icon-user1"
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="text-primary"
                                 width={18}
                                 height={18}
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth={2}
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                              >
                                 <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                 <circle cx={12} cy={7} r={4} />
                              </svg>
                              <span className="ml-2">Profile </span>
                           </Link>
                           <Link
                              to="/email-inbox"
                              className="dropdown-item ai-icon"
                           >
                              <svg
                                 id="icon-inbox"
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="text-success"
                                 width={18}
                                 height={18}
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth={2}
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                              >
                                 <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                 <polyline points="22,6 12,13 2,6" />
                              </svg>
                              <span className="ml-2">Inbox </span>
                           </Link>
                           <Logout />
                        </Dropdown.Menu>
                     </Dropdown>
                  </ul>
               </div>
            </nav>
         </div>
      </div>
   );
};

export default Header;
