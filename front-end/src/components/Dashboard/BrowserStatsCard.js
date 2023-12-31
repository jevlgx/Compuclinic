import React from "react";
import { connect } from "react-redux";

class BrowserStatsCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="header">
          <h2>Browser Stats</h2>
        </div>
        <div className="body">
          <table className="table m-b-0">
            <tbody>
              <tr>
                <td>Google Chrome</td>
                <td className="align-right">
                  <span className="badge badge-info">40%</span>
                </td>
              </tr>
              <tr>
                <td>Mozila Firefox</td>
                <td className="align-right">
                  <span className="badge badge-danger">30%</span>
                </td>
              </tr>
              <tr>
                <td>Safari</td>
                <td className="align-right">
                  <span className="badge badge-default">15%</span>
                </td>
              </tr>
              <tr>
                <td>Internet Explorer</td>
                <td className="align-right">
                  <span className="badge badge-warning">15%</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

BrowserStatsCard.propTypes = {};

const mapStateToProps = ({ analyticalReducer }) => ({});

export default connect(mapStateToProps, {})(BrowserStatsCard);
