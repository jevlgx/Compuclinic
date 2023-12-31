import React from "react";
import { connect } from "react-redux";

class ProductCard extends React.Component {
  render() {
    const { image, name, rate, catagories } = this.props;
    return (
      <div className="card">
        <div className="body">
          <div className="top-bar">
            <span>{rate}</span>
            <span className="float-right icon-heart"></span>
          </div>
          <img className="img-fluid" src={image} />
          <div className="title">
            {name}
            <span className="icon-basket float-right"></span>
          </div>
          <hr />
          <div className="footer">
            {catagories.map((data, i) => {
              return (
                <span key={i} className="badge badge-default mt-1">
                  {data}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ UIElementsReducer }) => ({});

export default connect(mapStateToProps, {})(ProductCard);
