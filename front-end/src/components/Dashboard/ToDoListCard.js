import React from "react";
import { connect } from "react-redux";

class ToDoListCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card">
        <div className="header">
          <h2>
            ToDo List <small>This Month task list</small>
          </h2>
        </div>
        <div className="body todo_list">
          <ul className="list-unstyled mb-0">
            <li>
              <label className="fancy-checkbox mb-0">
                <input name="checkbox" type="checkbox" />
                <span>Report Panel Usag</span>
              </label>
              <hr />
            </li>
            <li>
              <label className="fancy-checkbox mb-0">
                <input name="checkbox" type="checkbox" />
                <span>Report Panel Usag</span>
              </label>
              <hr />
            </li>
            <li>
              <label className="fancy-checkbox mb-0">
                <input name="checkbox" type="checkbox" />
                <span>New logo design for InfiniO</span>
              </label>
              <hr />
            </li>
            <li>
              <label className="fancy-checkbox mb-0">
                <input name="checkbox" type="checkbox" />
                <span>Design PSD files for InfiniO</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

ToDoListCard.propTypes = {};

const mapStateToProps = ({ analyticalReducer }) => ({});

export default connect(mapStateToProps, {})(ToDoListCard);
