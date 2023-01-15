import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// images
import image05 from "../../../../../images/events/1.jpg";
import image06 from "../../../../../images/events/2.jpg";
import image07 from "../../../../../images/events/3.jpg";
import image08 from "../../../../../images/events/4.jpg";
import image09 from "../../../../../images/events/5.jpg";

const EventSlide = () => {
  const [asd, setAsd] = useState();
  const renderArrows = () => {
    return (
      <div className="owl-nav">
        <div className="owl-prev" onClick={() => asd.slickPrev()}>
          <i className="fa fa-caret-left" aria-hidden="true"></i>
        </div>
        <div className="owl-next" onClick={() => asd.slickNext()}>
          <i className="fa fa-caret-right" aria-hidden="true"></i>
        </div>
      </div>
    );
  };
  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "0%",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1749,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "25%",
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "0%",
          centerMode: false,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "25%",
          centerMode: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "25%",
          centerMode: true,
        },
      },
	  {
        breakpoint: 591,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0%",
          centerMode: false,
        },
      },
    ],
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div class="owl-dots">
        <div class="owl-dot">
          <span></span>
        </div>
      </div>
    ),
  };
  return (
    <div className="event-bx owl-carousel owl-loaded owl-drag po-relative home-slider">
      <div className="owl-stage-outer">
        <Slider className="owl-stage" {...settings} ref={(c) => setAsd(c)}>
          <div className="items p-2">
            <div className="image-bx">
              <img src={image05} alt="image05" />
              <div className="info">
                <p className="fs-18 font-w600">
                  <Link to="/road-detail" className="text-black">
                    Bani Malek
                  </Link>
                </p>
                <span className="fs-14 text-black d-block mb-3">
                  Jeddah, Saudi Arabia
                </span>
                <p className="fs-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad mini
                </p>
                <ul>
                  <li>
                    <i className="las la-dollar-sign" />
                    $124,00
                  </li>
                  <li>
                    <i className="las la-calendar" />
                    Jan. 15, 2023
                  </li>
                  <li>
                    <i className="fa fa-wrench" />
                    56
                  </li>
                  <li>
                    <i className="las la-clock" />
                    08:35 AM
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="items p-2"
            
          >
            <div className="image-bx">
              <img src={image06} alt="image06" />
              <div className="info">
                <p className="fs-18 font-w600">
                  <Link to="/road-detail" className="text-black">
                    As Sulaymaniyyah
                  </Link>
                </p>
                <span className="fs-14 text-black d-block mb-3">
                  Mecca, Saudi Arabia
                </span>
                <p className="fs-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad mini
                </p>
                <ul>
                  <li>
                    <i className="las la-dollar-sign" />
                    $124,00
                  </li>
                  <li>
                    <i className="las la-calendar" />
                    Jan. 15, 2023
                  </li>
                  <li>
                    <i className="fa fa-wrench" />
                    56
                  </li>
                  <li>
                    <i className="las la-clock" />
                    08:35 AM
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="items p-2"
            
          >
            <div className="image-bx">
              <img src={image07} alt="image07" />
              <div className="info">
                <p className="fs-18 font-w600">
                  <Link to="/road-detail" className="text-black">
                    Ray'zakhir
                  </Link>
                </p>
                <span className="fs-14 text-black d-block mb-3">
                  Mecca, Saudi Arabia
                </span>
                <p className="fs-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad mini
                </p>
                <ul>
                  <li>
                    <i className="las la-dollar-sign" />
                    $124,00
                  </li>
                  <li>
                    <i className="las la-calendar" />
                    Jan. 15, 2023
                  </li>
                  <li>
                    <i className="fa fa-wrench" />
                    56
                  </li>
                  <li>
                    <i className="las la-clock" />
                    08:35 AM
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="items p-2"
            
          >
            <div className="image-bx">
              <img src={image08} alt="image08" />
              <div className="info">
                <p className="fs-18 font-w600">
                  <Link to="/road-detail" className="text-black">
                    Al Yarmuk
                  </Link>
                </p>
                <span className="fs-14 text-black d-block mb-3">
                  Riyadh, Saudi Arabia
                </span>
                <p className="fs-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad mini
                </p>
                <ul>
                  <li>
                    <i className="las la-dollar-sign" />
                    $124,00
                  </li>
                  <li>
                    <i className="las la-calendar" />
                    Jan. 15, 2023
                  </li>
                  <li>
                    <i className="fa fa-wrench" />
                    56
                  </li>
                  <li>
                    <i className="las la-clock" />
                    08:35 AM
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="items p-2"
            
          >
            <div className="image-bx">
              <img src={image09} alt="image09" />
              <div className="info">
                <p className="fs-18 font-w600">
                  <Link to="/road-detail" className="text-black">
                    Al-Qurayat
                  </Link>
                </p>
                <span className="fs-14 text-black d-block mb-3">
                  Jeddah, Saudi Arabia
                </span>
                <p className="fs-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad mini
                </p>
                <ul>
                  <li>
                    <i className="las la-dollar-sign" />
                    $124,00
                  </li>
                  <li>
                    <i className="las la-calendar" />
                    Jan. 15, 2023
                  </li>
                  <li>
                    <i className="fa fa-wrench" />
                    56
                  </li>
                  <li>
                    <i className="las la-clock" />
                    08:35 AM
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="po-absolute">{renderArrows()}</div>
    </div>
  );
};

export default EventSlide;
