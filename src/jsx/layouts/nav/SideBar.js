/// Menu
import MetisMenu from "metismenujs";
import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";

//import icon1 from "../../../images/icon1.png";

class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new MetisMenu(this.$el);
  }
  componentWillUnmount() {
  }
    render() {
        return (
            <div className="mm-wrapper">
                <ul className="metismenu" ref={(el) => (this.el = el)}>
                    {this.props.children}
                </ul>
            </div>
        );
    }
}

class SideBar extends Component {
  /// Open menu
  componentDidMount() {
    // sidebar open/close
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    btn.addEventListener("click", toggleFunc);
  }
  state = {
	 newEvent: false, 
    loveEmoji: false,
  };
  render() {
    /// Path
    let path = window.location.pathname;
    path = path.split("/");
    path = path[path.length - 1];
    
    /// Active menu
    let dashBoard = [
        "",
        "road",
        "customers",
        "analytics",
        "road-detail",
        "reviews",
        "task",
      ],
      app = [
        "app-profile",
        "app-calender",
        "email-compose",
        "email-inbox",
        "email-read",
        "ecom-product-grid",
        "ecom-product-list",
        "ecom-product-list",
        "ecom-product-order",
        "ecom-checkout",
        "ecom-invoice",
        "ecom-customers",
        "post-details",
        "ecom-product-detail",
      ],
      email = ["email-compose", "email-inbox", "email-read"],
      shop = [
        "ecom-product-grid",
        "ecom-product-list",
        "ecom-product-list",
        "ecom-product-order",
        "ecom-checkout",
        "ecom-invoice",
        "ecom-customers",
        "ecom-product-detail",
      ],
      charts = [
        "chart-rechart",
        "chart-flot",
        "chart-chartjs",
        "chart-chartist",
        "chart-sparkline",
        "chart-apexchart",
      ],
      bootstrap = [
        "ui-accordion",
        "ui-badge",
        "ui-alert",
        "ui-button",
        "ui-modal",
        "ui-button-group",
        "ui-list-group",
        "ui-media-object",
        "ui-card",
        "ui-carousel",
        "ui-dropdown",
        "ui-popover",
        "ui-progressbar",
        "ui-tab",
        "ui-typography",
        "ui-pagination",
        "ui-grid",
      ],
      plugins = [
        "uc-select2",
        "uc-nestable",
        "uc-sweetalert",
        "uc-toastr",
        "uc-noui-slider",
        "map-jqvmap",
        //"post",
        
      ],
        redux = [
            "todo",
            "form-redux",
            "form-redux-wizard", 
        ],
      widget = ["widget-basic"],
      forms = [
        "form-element",
        "form-wizard",
        "form-editor-summernote",
        "form-pickers",
        "form-validation-jquery",
      ],
      table = [
        "table-bootstrap-basic", 
        "table-datatable-basic",
        "table-sorting",
        "table-filtering",
      ],
      pages = [
        "page-register",
        "page-login",
        "page-lock-screen",
        "page-error-400",
        "page-error-403",
        "page-error-404",
        "page-error-500",
        "page-error-503",
      ],
      error = [
        "page-error-400",
        "page-error-403",
        "page-error-404",
        "page-error-500",
        "page-error-503",
      ];

    return (
      <div className="deznav">
        <PerfectScrollbar className="deznav-scroll">
			<Button
				as="a"
				className="add-menu-sidebar"
				data-toggle="modal"
				data-target="#addOrderModalside"
				onClick={() => this.setState({ newEvent: true })}
			  >
				+ New Potholes
			</Button>
			<Modal className="modal fade" show={this.state.newEvent}>
				<div className="modal-content">
				  <div className="modal-header">
					<h5 className="modal-title">Add Image</h5>
					<Button
					  variant=""
					  type="button"
					  className="close"
					  data-dismiss="modal"
					  onClick={() => this.setState({ newEvent: false })}
					>
					  <span>×</span>
					</Button>
				  </div>
				  <div className="modal-body">
					<form
					  className="comment-form"
					  onSubmit={(e) => {
						e.preventDefault();
						this.setState({ newEvent: false });
					  }}
					>
					  <div>
						<div className="form-group">
						  <label className="text-black font-w500">Road Name</label>
						  <input type="text" className="form-control" />
						</div>
						<div className="form-group">
						  <label className="text-black font-w500">Date</label>
						  <input type="date" className="form-control" />
						</div>
						<div className="form-group">
						  <label className="text-black font-w500">
							Description
						  </label>
						  <input type="text" className="form-control" />
						</div>
						<div className="form-group">
						  <input
							type="submit"
							value="Upload"
							className="btn btn-primary"
						  />
						</div>
					  </div>
					</form>
				  </div>
				</div>
			</Modal>
          <MM className="metismenu" id="menu">
            <li className={`${dashBoard.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-networking"></i>
                <span className="nav-text">Dashboard</span>
              </Link>
				<ul >
					<li>
						<Link className={`${path === "" ? "mm-active" : ""}`} to="/" onClick={() => this.props.onClick3()}>Dashboard</Link>
					</li>
					<li>
						<Link className={`${path === "potholes" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/potholes">
							Potholes
						</Link>
					</li>
					<li>
						<Link className={`${path === "road-detail" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/road-detail" >
							 Road Detail
						</Link>
					</li>
					<li>
					  <Link className={`${ path === "analytics" ? "mm-active" : "" }`} onClick={() => this.props.onClick()} to="/analytics"
					  >
							Analytics
					  </Link>
					</li>				
				</ul>
            </li>
          </MM>
			<div className="copyright">
				<p>
				  <strong>Pothole Classification Dashboard</strong> © 2023 All Rights
				  Reserved
				</p>
				<p>
				  Made with{" "}
				  <span
					className={`${
					  this.state.loveEmoji ? "heart heart-blast" : "heart"
					}`}
					onClick={() =>
					  this.setState({ loveEmoji: !this.state.loveEmoji })
					}
				  ></span>{" "}
				  by Daqian
				</p>
			</div>
		</PerfectScrollbar>
      </div>
    );
  }
}

export default SideBar;
