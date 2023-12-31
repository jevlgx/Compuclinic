import React from "react";
import { connect } from "react-redux";
import { ProgressBar } from "react-bootstrap";

class ProjectsListTable extends React.Component {
  render() {
    const { bodyData } = this.props;
    return (
      <div className="table-responsive">
        <table className="table m-b-0 table-hover">
          <thead className="thead-light">
            <tr>
              <th>Status</th>
              <th>Project</th>
              <th>Prograss</th>
              <th>Team</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bodyData.map((data, i) => {
              return (
                <tr key={"dihf" + i}>
                  <td>
                    {data.status === "Active" ? (
                      <span className="badge badge-success">Active</span>
                    ) : data.status === "InActive" ? (
                      <span className="badge badge-default">InActive</span>
                    ) : data.status === "PENDING" ? (
                      <span className="badge badge-warning">Pending</span>
                    ) : data.status === "Closed" ? (
                      <span className="badge badge-primary">Closed</span>
                    ) : null}
                  </td>
                  <td className="project-title">
                    <h6>
                      <a>{data.details}</a>
                    </h6>
                    <small>Created {data.date}</small>
                  </td>
                  <td>
                    <ProgressBar
                      now={data.Prograss}
                      style={{ height: "5px" }}
                    />
                    <small>Completion with: {data.Prograss}%</small>
                  </td>
                  <td>
                    <ul className="list-unstyled team-info">
                      {data.team.map((data, i) => {
                        return (
                          <li key={i}>
                            <img alt="Avatar" src={data} />
                          </li>
                        );
                      })}
                    </ul>
                  </td>
                  <td className="project-actions">
                    <a className="btn btn-outline-secondary mr-1">
                      <i className="icon-eye"></i>
                    </a>
                    <a className="btn btn-outline-secondary">
                      <i className="icon-pencil"></i>
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(ProjectsListTable);
