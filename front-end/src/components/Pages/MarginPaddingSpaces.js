import React from "react";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";

class MarginPaddingSpaces extends React.Component {
  render() {
    return (
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="card">
          <div className="header">
            <h2>
              Margin Padding Spaces{" "}
              <small>
                You can use classes which names are{" "}
                <code>.m-t-10, .m-t--10, .m-r-5, .p-t-10, .p-b-5</code>
              </small>
            </h2>
            <Dropdown as="ul" className="header-dropdown">
              <Dropdown.Toggle variant="success" as="li" id="dropdown-basic">
                <Dropdown.Menu
                  as="ul"
                  className="dropdown-menu dropdown-menu-right"
                >
                  <li>
                    <a>Action</a>
                  </li>
                  <li>
                    <a>Another Action</a>
                  </li>
                  <li>
                    <a>Something else</a>
                  </li>
                </Dropdown.Menu>
              </Dropdown.Toggle>
            </Dropdown>
          </div>
          <div className="body m-b-10">
            <p>
              <b>Margins</b>
            </p>
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6">
                <span className="col-red font-bold">M</span>argin{" "}
                <span className="col-red font-bold">T</span>op{" "}
                <span className="col-red font-bold">10</span>px →{" "}
                <code>.m-t-10</code>
              </div>
              <div className="col-lg-4 col-md-6">
                <span className="col-red font-bold">M</span>argin{" "}
                <span className="col-red font-bold">T</span>op{" "}
                <span className="col-red font-bold">0</span>px →{" "}
                <code>.m-t-0</code>
              </div>
              <div className="col-lg-4 col-md-6">
                <span className="col-red font-bold">M</span>argin{" "}
                <span className="col-red font-bold">T</span>op{" "}
                <span className="col-red font-bold">-10</span>px →{" "}
                <code>.m-t--10</code>
              </div>
              <div className="col-lg-4 col-md-6">
                <span className="col-red font-bold">M</span>argin{" "}
                <span className="col-red font-bold">L</span>eft{" "}
                <span className="col-red font-bold">35</span>px →{" "}
                <code>.m-l-35</code>
              </div>
              <div className="col-lg-4 col-md-6">
                <span className="col-red font-bold">M</span>argin{" "}
                <span className="col-red font-bold">L</span>eft{" "}
                <span className="col-red font-bold">0</span>px →{" "}
                <code>.m-l-0</code>
              </div>
              <div className="col-lg-4 col-md-6">
                <span className="col-red font-bold">M</span>argin{" "}
                <span className="col-red font-bold">L</span>eft{" "}
                <span className="col-red font-bold">-35</span>px →{" "}
                <code>.m-l--35</code>
              </div>
              <div className="col-lg-4 col-md-6">
                <span className="col-red font-bold">M</span>argin{" "}
                <span className="col-red font-bold">B</span>ottom{" "}
                <span className="col-red font-bold">15</span>px →{" "}
                <code>.m-b-15</code>
              </div>
              <div className="col-lg-4 col-md-6">
                <span className="col-red font-bold">M</span>argin{" "}
                <span className="col-red font-bold">B</span>ottom{" "}
                <span className="col-red font-bold">0</span>px →{" "}
                <code>.m-b-0</code>
              </div>
              <div className="col-lg-4 col-md-6">
                <span className="col-red font-bold">M</span>argin{" "}
                <span className="col-red font-bold">B</span>ottom{" "}
                <span className="col-red font-bold">-20</span>px →{" "}
                <code>.m-b--20</code>
              </div>
              <div className="col-lg-4 col-md-6">
                <span className="col-red font-bold">M</span>argin{" "}
                <span className="col-red font-bold">R</span>ight{" "}
                <span className="col-red font-bold">30</span>px →{" "}
                <code>.m-r-30</code>
              </div>
              <div className="col-lg-4 col-md-6">
                <span className="col-red font-bold">M</span>argin{" "}
                <span className="col-red font-bold">R</span>ight{" "}
                <span className="col-red font-bold">0</span>px →{" "}
                <code>.m-r-0</code>
              </div>
              <div className="col-lg-4 col-md-6">
                <span className="col-red font-bold">M</span>argin{" "}
                <span className="col-red font-bold">R</span>ight{" "}
                <span className="col-red font-bold">-30</span>px →{" "}
                <code>.m-r--30</code>
              </div>
              <div className="col-lg-4 col-md-6">
                <span className="col-red font-bold">ALL M</span>argin{" "}
                <span className="col-red font-bold">0</span>px →{" "}
                <code>.margin-0</code>
              </div>
            </div>
          </div>
          <div className="body">
            <p className="m-t-25">
              <b>Paddings</b>
            </p>
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6">
                <span className="col-red font-bold">P</span>adding{" "}
                <span className="col-red font-bold">T</span>op{" "}
                <span className="col-red font-bold">10</span>px →{" "}
                <code>.p-t-10</code>
              </div>
              <div className="col-lg-4 col-md-6">
                <span className="col-red font-bold">P</span>adding{" "}
                <span className="col-red font-bold">T</span>op{" "}
                <span className="col-red font-bold">0</span>px →{" "}
                <code>.p-t-0</code>
              </div>
              <div className="col-lg-4 col-md-6">
                <span className="col-red font-bold">P</span>adding{" "}
                <span className="col-red font-bold">L</span>eft{" "}
                <span className="col-red font-bold">35</span>px →{" "}
                <code>.p-l-35</code>
              </div>
              <div className="col-lg-4 col-md-6">
                <span className="col-red font-bold">P</span>adding{" "}
                <span className="col-red font-bold">L</span>eft{" "}
                <span className="col-red font-bold">0</span>px →{" "}
                <code>.p-l-0</code>
              </div>
              <div className="col-lg-4 col-md-6">
                <span className="col-red font-bold">P</span>adding{" "}
                <span className="col-red font-bold">B</span>ottom{" "}
                <span className="col-red font-bold">15</span>px →{" "}
                <code>.p-b-15</code>
              </div>
              <div className="col-lg-4 col-md-6">
                <span className="col-red font-bold">P</span>adding{" "}
                <span className="col-red font-bold">B</span>ottom{" "}
                <span className="col-red font-bold">0</span>px →{" "}
                <code>.p-b-0</code>
              </div>
              <div className="col-lg-4 col-md-6">
                <span className="col-red font-bold">P</span>adding{" "}
                <span className="col-red font-bold">R</span>ight{" "}
                <span className="col-red font-bold">30</span>px →{" "}
                <code>.p-r-30</code>
              </div>
              <div className="col-lg-4 col-md-6">
                <span className="col-red font-bold">P</span>adding{" "}
                <span className="col-red font-bold">R</span>ight{" "}
                <span className="col-red font-bold">0</span>px →{" "}
                <code>.p-r-0</code>
              </div>
              <div className="col-lg-4 col-md-6">
                <span className="col-red font-bold">ALL P</span>adding{" "}
                <span className="col-red font-bold">0</span>px →{" "}
                <code>.padding-0</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(MarginPaddingSpaces);
