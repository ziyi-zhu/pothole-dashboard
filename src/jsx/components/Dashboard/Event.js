import React, { useState } from "react";
import { Dropdown, Nav, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
// Table
import AllEventTable from "./acara/dashboardTable/Event/AllEventTable";
import CanceledEventTable from "./acara/dashboardTable/Event/CanceledEventTable";
import RefundedEventTable from "./acara/dashboardTable/Event/RefundedEventTable";
import SoldEventTable from "./acara/dashboardTable/Event/SoldEventTable";

const Event = () => {
  const [refreshToggle, setRefreshToggle] = useState(false);
  return (
    <>
      <Tab.Container defaultActiveKey="all">
        <div className="d-flex flex-wrap mb-2 align-items-center justify-content-between">
          <div className="mb-3 mr-3">
            <h6 className="fs-16 text-black font-w600 mb-0">
              968 Total Potholes
            </h6>
            <span className="fs-14">Based your location</span>
          </div>
          <div className="event-tabs mb-3 mr-3">
            <Nav as="ul" className="nav nav-tabs" role="tablist">
              <Nav.Item className="nav-item">
                <Nav.Link
                  className="nav-link"
                  data-toggle="tab"
                  to="#all1"
                  role="tab"
                  eventKey="all"
                >
                  All
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link
                  className="nav-link"
                  data-toggle="tab"
                  to="#refunded1"
                  role="tab"
                  eventKey="refunded"
                >
                  Reviewed
                </Nav.Link>
              </Nav.Item>
               <Nav.Item className="nav-item">
                <Nav.Link
                  className="nav-link"
                  data-toggle="tab"
                  to="#sold1"
                  role="tab"
                  eventKey="sold"
                >
                  Repaired
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="d-flex mb-3">
            <div className="dropdown cs-dropdown bootstrap-select form-control style-2 default-select mr-3 dropup">
              <Dropdown>
                <Dropdown.Toggle
                  variant=""
                  id="dropdown-basic"
                  className="default-select style-2 btn"
                >
                  {refreshToggle ? refreshToggle : "Newest"}
                </Dropdown.Toggle>

                <Dropdown.Menu
                  className="dropdown-menu inner show"
                  style={{ borderRadius: "10px" }}
                >
                  <Dropdown.Item
                    className="dropdown-item"
                    to="#"
                    onClick={() => setRefreshToggle("Newest")}
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      padding: "0.25rem 1rem",
                    }}
                    eventKey="all"
                  >
                    Newest
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item"
                    to="#"
                    onClick={() => setRefreshToggle("Monthly")}
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      padding: "0.25rem 1rem",
                    }}
                    eventKey="all"
                  >
                    Monthly
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item"
                    to="#"
                    onClick={() => setRefreshToggle("Weekly")}
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      padding: "0.25rem 1rem",
                    }}
                    eventKey="all"
                  >
                    Weekly
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <Link to="/potholes" className="btn btn-primary text-nowrap">
              <i className="fa fa-file-text scale5 mr-3" aria-hidden="true" />
              Generate Report
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <Tab.Content>
              <div className="tab-content">
                <Tab.Pane eventKey="all">
                  <AllEventTable />
                </Tab.Pane>
                <Tab.Pane eventKey="sold">
                  <SoldEventTable />
                </Tab.Pane>
                <Tab.Pane eventKey="refunded">
                  <RefundedEventTable />
                </Tab.Pane>
                <Tab.Pane eventKey="canceled">
                  <CanceledEventTable />
                </Tab.Pane>
              </div>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </>
  );
};

export default Event;
