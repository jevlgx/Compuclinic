import React from "react";
import { connect } from "react-redux";

class PricingTableCard1 extends React.Component {
  render() {
    const { list, head, price, joined } = this.props;
    return (
      <div className="col-lg-3 cool-md-6 col-sm-12">
        <div className="card">
          <ul className="pricing body">
            <li>
              <h2>{head}</h2>
            </li>
            {list.map((d, i) => {
              return <li key={i}>{d}</li>;
            })}
            <li>
              <h3>{price}</h3>
              <span>per month</span>
            </li>
            <li>
              <button
                className={
                  joined ? "btn btn-primary" : "btn btn-outline-secondary"
                }
              >
                Join Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(PricingTableCard1);
