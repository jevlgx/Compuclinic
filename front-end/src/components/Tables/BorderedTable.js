import React from "react";
import { connect } from "react-redux";

class BorderedTable extends React.Component {
  render() {
    return (
      <div className="col-lg-12">
        <div className="card">
          <div className="header">
            <h2>
              Bordered Table{" "}
              <small>
                Add <code>.table-bordered</code> for borders on all sides of the
                table and cells.
              </small>
            </h2>
          </div>
          <div className="body table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>FIRST NAME</th>
                  <th>LAST NAME</th>
                  <th>USERNAME</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Larry</td>
                  <td>Jellybean</td>
                  <td>@lajelly</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Larry</td>
                  <td>Kikat</td>
                  <td>@lakitkat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(BorderedTable);
