import React from "react";
import { connect } from "react-redux";
import image10 from "../../assets/images/ecommerce/10.png";
import image11 from "../../assets/images/ecommerce/11.png";
import image5 from "../../assets/images/ecommerce/5.png";
import image1 from "../../assets/images/ecommerce/1.png";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: [true, false, false, false, false],
    };
  }
  render() {
    const { tab } = this.state;
    return (
      <div className="col-lg-12">
        <div className="card product_item_list">
          <div className="header">
            <h2>Product List</h2>
          </div>
          <div className="body">
            <div className="table-responsive">
              <table className="table table-hover m-b-0">
                <thead className="thead-dark">
                  <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th data-breakpoints="sm xs">Detail</th>
                    <th data-breakpoints="xs">Amount</th>
                    <th data-breakpoints="xs md">Stock</th>
                    <th data-breakpoints="sm xs md">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img alt="Product img" src={image1} width="48" />
                    </td>
                    <td>
                      <h5>Simple Black Clock</h5>
                    </td>
                    <td>
                      <span className="text-muted">
                        randomised words even slightly believable
                      </span>
                    </td>
                    <td>$16.00</td>
                    <td>
                      <span className="col-green">In Stock</span>
                    </td>
                    <td>
                      <a className="btn btn-outline-secondary mr-1">
                        <i className="icon-pencil"></i>
                      </a>
                      <a className="btn btn-outline-danger">
                        <i className="icon-trash"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img alt="Product img" src={image10} width="48" />
                    </td>
                    <td>
                      <h5>Brone Candle</h5>
                    </td>
                    <td>
                      <span className="text-muted">
                        It is a long established will be distracted
                      </span>
                    </td>
                    <td>$15.00</td>
                    <td>
                      <span className="col-amber">Low Stock</span>
                    </td>
                    <td>
                      <a className="btn btn-outline-secondary mr-1">
                        <i className="icon-pencil"></i>
                      </a>
                      <a className="btn btn-outline-danger">
                        <i className="icon-trash"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img alt="Product img" src={image11} width="48" />
                    </td>
                    <td>
                      <h5>Wood Simple Clock</h5>
                    </td>
                    <td>
                      <span className="text-muted">
                        There passages of Lorem Ipsum available
                      </span>
                    </td>
                    <td>$16.00</td>
                    <td>
                      <span className="col-amber">Low Stock</span>
                    </td>
                    <td>
                      <a className="btn btn-outline-secondary mr-1">
                        <i className="icon-pencil"></i>
                      </a>
                      <a className="btn btn-outline-danger">
                        <i className="icon-trash"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img alt="Product img" src={image5} width="48" />
                    </td>
                    <td>
                      <h5>Unero Small Bag</h5>
                    </td>
                    <td>
                      <span className="text-muted">
                        It is a long established fact that a distracted
                      </span>
                    </td>
                    <td>$23.00</td>
                    <td>
                      <span className="col-red">Out Of Stock</span>
                    </td>
                    <td>
                      <a className="btn btn-outline-secondary mr-1">
                        <i className="icon-pencil"></i>
                      </a>
                      <a className="btn btn-outline-danger">
                        <i className="icon-trash"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="body">
            <div className="row">
              <div className="preview col-lg-4 col-md-12">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active">
                    <img
                      className={`img-fluid ${!tab[0] && "d-none"}`}
                      src={image1}
                      alt=""
                    />
                    <img
                      className={`img-fluid ${!tab[1] && "d-none"}`}
                      src={require("../../assets/images/ecommerce/2.png")}
                      alt=""
                    />
                    <img
                      className={`img-fluid ${!tab[2] && "d-none"}`}
                      src={require("../../assets/images/ecommerce/3.png")}
                      alt=""
                    />
                    <img
                      className={`img-fluid ${!tab[3] && "d-none"}`}
                      src={require("../../assets/images/ecommerce/4.png")}
                      alt=""
                    />
                    <img
                      className={`img-fluid ${!tab[4] && "d-none"}`}
                      src={require("../../assets/images/ecommerce/5.png")}
                      alt=""
                    />
                  </div>
                </div>
                <ul className="preview-thumbnail nav nav-tabs">
                  <li className="nav-item">
                    <a
                      className={`nav-link ${tab[0] && "active"}`}
                      data-toggle="tab"
                      onClick={() => {
                        this.setState({
                          tab: [true, false, false, false, false],
                        });
                      }}
                    >
                      <img
                        className="img-fluid"
                        src={require("../../assets/images/ecommerce/1.png")}
                        style={{ height: 50 }}
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${tab[1] && "active"}`}
                      data-toggle="tab"
                      onClick={() => {
                        this.setState({
                          tab: [false, true, false, false, false],
                        });
                      }}
                    >
                      <img
                        className="img-fluid"
                        src={require("../../assets/images/ecommerce/2.png")}
                        style={{ height: 50 }}
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${tab[2] && "active"}`}
                      data-toggle="tab"
                      onClick={() => {
                        this.setState({
                          tab: [false, false, true, false, false],
                        });
                      }}
                    >
                      <img
                        className="img-fluid"
                        src={require("../../assets/images/ecommerce/3.png")}
                        style={{ height: 50 }}
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="nav-item">

                    <a
                      className={`nav-link ${tab[3] && "active"}`}
                      data-toggle="tab"
                      onClick={() => {
                        this.setState({
                          tab: [false, false, false, true, false],
                        });
                      }}
                    >
                      <img
                        className="img-fluid"
                        src={require("../../assets/images/ecommerce/4.png")}
                        style={{ height: 50 }}
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${tab[4] && "active"}`}
                      data-toggle="tab"
                      onClick={() => {
                        this.setState({
                          tab: [false, false, false, false, true],
                        });
                      }}
                    >
                      <img
                        className="img-fluid"
                        src={require("../../assets/images/ecommerce/5.png")}
                        style={{ height: 50 }}
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="details col-lg-8 col-md-12">
                <h3 className="product-title m-b-0">Simple Black Clock</h3>
                <div className="rating">
                  <div className="stars">
                    <span className="icon-star text-warning"></span>
                    <span className="icon-star text-warning"></span>
                    <span className="icon-star text-warning"></span>
                    <span className="icon-star text-warning"></span>
                    <span className="icon-star text-muted"></span>
                  </div>
                  <span className="m-l-10">41 reviews</span>
                </div>
                <hr />
                <h5 className="price m-t-0">
                  Current Price: <span className="text-warning">$180</span>
                </h5>
                <p className="product-description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p className="vote">
                  <strong>78%</strong> of buyers enjoyed this product!{" "}
                  <strong>(23 votes)</strong>
                </p>
                <h5 className="sizes">
                  sizes:{" "}
                  <span className="size" title="small">
                    s
                  </span>
                  <span className="size" title="medium">
                    m
                  </span>
                  <span className="size" title="large">
                    l
                  </span>
                  <span className="size" title="xtra large">
                    xl
                  </span>
                </h5>
                <h5 className="colors">
                  colors:{" "}
                  <span
                    className="color bg-warning not-available"
                    title="Not In store"
                  ></span>
                  <span className="color bg-success"></span>
                  <span className="color bg-primary"></span>
                </h5>
                <hr />
                <div className="action">
                  <button className="btn btn-primary mr-1" type="button">
                    Add to Cart
                  </button>
                  <button className="btn btn-danger" type="button">
                    <span className="icon-heart"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ UIElementsReducer }) => ({});

export default connect(mapStateToProps, {})(ProductList);
