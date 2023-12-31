import React from "react";

class InstumateStatusCard extends React.Component {
  render() {
    const {
      Icon,
      InstumentName,
      InstumentToggle,
      FirstPeraText,
      FirstPeraValue,
      SecondPeraText,
      SecondPeraValue,
    } = this.props;
    return (
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card appliances-grp ng-star-inserted">
          <div className="body clearfix">
            <div className="icon">
              <img alt="AC" src={Icon} />
            </div>
            <div className="content">
              <h6>
                {InstumentName}
                <span className="text-success">{InstumentToggle}</span>
              </h6>
              <p className="ng-star-inserted">
                {FirstPeraText}{" "}
                <span className="text-warning">{FirstPeraValue}</span>
              </p>
              <p className="ng-star-inserted">
                {SecondPeraText}{" "}
                <span className="text-warning">{SecondPeraValue}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InstumateStatusCard;
