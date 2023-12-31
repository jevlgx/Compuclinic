import React from "react";
import { connect } from "react-redux";
import image from "../../assets/images/ecommerce/1.png";

class ProductItem extends React.Component {
  render() {
    return (
      <div className="card product_item">
        <div className="body">
          <div className="cp_img">
            <img alt="Product" className="img-fluid" src={image} />
            <div className="hover">
              <a className="btn btn-primary mr-1">
                <i className="icon-eye"></i>
              </a>
              <a className="btn btn-primary">
                <i className="icon-basket"></i>
              </a>
            </div>
          </div>
          <div className="product_details">
            <h5>
              <a>Simple Black Clock</a>
            </h5>
            <ul className="product_price list-unstyled">
              <li className="old_price">$16.00</li>
              <li className="new_price">$13.00</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ UIElementsReducer }) => ({});

export default connect(mapStateToProps, {})(ProductItem);
