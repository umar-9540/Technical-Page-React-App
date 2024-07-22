import React from "react";
import { NavLink } from "react-router-dom";

function Common(props) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-12 col-md-12 col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong style={{ color: "#3884c7" }}>UmarTechnical</strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented developer making websites
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn btn-get-started">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    className="img-fluid animated"
                    src={props.imgsrc}
                    alt="about img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Common;
