import React from "react";
import { connect } from "react-redux";
import image1 from "../../assets/images/ecommerce/1.png";
import image10 from "../../assets/images/ecommerce/10.png";
import image11 from "../../assets/images/ecommerce/11.png";
import image5 from "../../assets/images/ecommerce/5.png";

class ProductOrderList extends React.Component {
  render() {
    return (
      <div className="col-lg-12">
        <div className="card product_item_list product-order-list">
          <div className="header">
            <h2>Product Order List</h2>
          </div>
          <div className="body">
            <div className="table-responsive">
              <table className="table table-hover m-b-0">
                <thead className="thead-dark">
                  <tr>
                    <th>Name</th>
                    <th data-breakpoints="sm xs">Order ID</th>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th data-breakpoints="xs">Amount</th>
                    <th>Date</th>
                    <th data-breakpoints="xs md">Status</th>
                    <th data-breakpoints="sm xs md">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John Smith</td>
                    <td>#291989</td>
                    <td>
                      <img alt="Product img" src={image1} width="48" />
                    </td>
                    <td>
                      <h5>Simple Black Clock</h5>
                    </td>
                    <td>$16.00</td>
                    <td>01-05-2018</td>
                    <td>
                      <span className="badge badge-success bg-success text-white">
                        Paid
                      </span>
                    </td>
                    <td>
                      <a className="btn btn-outline-secondary mr-1">
                        <i className="icon-pencil"></i>
                      </a>
                      <a className="btn btn-outline-secondary">
                        <i className="icon-trash"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Hossein Shams</td>
                    <td>#291990</td>
                    <td>
                      <img alt="Product img" src={image10} width="48" />
                    </td>
                    <td>
                      <h5>Brone Candle</h5>
                    </td>
                    <td>$15.00</td>
                    <td>7-05-2018</td>
                    <td>
                      <span className="badge badge-danger bg-danger text-white">
                        Failed
                      </span>
                    </td>
                    <td>
                      <a className="btn btn-outline-secondary mr-1">
                        <i className="icon-pencil"></i>
                      </a>
                      <a className="btn btn-outline-secondary">
                        <i className="icon-trash"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Maryam Amiri</td>
                    <td>#291991</td>
                    <td>
                      <img alt="Product img" src={image11} width="48" />
                    </td>
                    <td>
                      <h5>Wood Simple Clock</h5>
                    </td>
                    <td>$16.00</td>
                    <td>09-05-2018</td>
                    <td>
                      <span className="badge badge-success bg-success text-white">
                        Paid
                      </span>
                    </td>
                    <td>
                      <a className="btn btn-outline-secondary mr-1">
                        <i className="icon-pencil"></i>
                      </a>
                      <a className="btn btn-outline-secondary">
                        <i className="icon-trash"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Tim Hank</td>
                    <td>#291992</td>
                    <td>
                      <img alt="Product img" src={image5} width="48" />
                    </td>
                    <td>
                      <h5>Unero Small Bag</h5>
                    </td>
                    <td>$23.00</td>
                    <td>14-05-2018</td>
                    <td>
                      <span className="badge badge-warning bg-warning text-white">
                        Pending
                      </span>
                    </td>
                    <td>
                      <a className="btn btn-outline-secondary mr-1">
                        <i className="icon-pencil"></i>
                      </a>
                      <a className="btn btn-outline-secondary">
                        <i className="icon-trash"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps, {})(ProductOrderList);
