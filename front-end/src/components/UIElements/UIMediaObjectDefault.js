import React from "react";
import { connect } from "react-redux";

class UIMediaObjectDefault extends React.Component {
  render() {
    return (
      <div className="col-lg-12 col-md-12">
        <div className="card">
          <div className="header">
            <h2>Default Media</h2>
          </div>
          <div className="body">
            <div className="media mleft">
              <div className="media-left">
                {" "}
                <a>
                  {" "}
                  <img
                    className="media-object"
                    src="http://via.placeholder.com/64x64"
                    width="64"
                    height="64"
                    alt=""
                  />{" "}
                </a>{" "}
              </div>
              <div className="media-body">
                <h4 className="media-heading">Media heading</h4>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </div>
            </div>
            <div className="media mleft">
              <div className="media-left">
                {" "}
                <a>
                  {" "}
                  <img
                    alt=""
                    className="media-object"
                    src="http://via.placeholder.com/64x64"
                    width="64"
                    height="64"
                  />{" "}
                </a>{" "}
              </div>
              <div className="media-body">
                <h4 className="media-heading">Media heading</h4>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
                <div className="media m-t-20">
                  <div className="media-left">
                    {" "}
                    <a>
                      {" "}
                      <img
                        alt=""
                        className="media-object"
                        src="http://via.placeholder.com/64x64"
                        width="64"
                        height="64"
                      />{" "}
                    </a>{" "}
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">Nested media heading</h4>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                    congue felis in faucibus.{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="media mright">
              <div className="media-body">
                <h4 className="media-heading">Media heading</h4>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis.{" "}
              </div>
              <div className="media-right">
                {" "}
                <a>
                  {" "}
                  <img
                    alt=""
                    className="media-object"
                    src="http://via.placeholder.com/64x64"
                    width="64"
                    height="64"
                  />{" "}
                </a>{" "}
              </div>
            </div>
            <div className="media mleft">
              <div className="media-left">
                {" "}
                <a>
                  {" "}
                  <img
                    alt=""
                    className="media-object"
                    src="http://via.placeholder.com/64x64"
                    width="64"
                    height="64"
                  />{" "}
                </a>{" "}
              </div>
              <div className="media-body">
                <h4 className="media-heading">Media heading</h4>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis.{" "}
              </div>
              <div className="media-right">
                {" "}
                <a>
                  {" "}
                  <img
                    className="media-object"
                    src="http://via.placeholder.com/64x64"
                    width="64"
                    height="64"
                  />{" "}
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(UIMediaObjectDefault);
