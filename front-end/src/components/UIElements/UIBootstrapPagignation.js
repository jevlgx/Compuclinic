import React from "react";
import { connect } from "react-redux";
import { Accordion, Card } from "react-bootstrap";
import { onPressCloseAlert } from "../../actions";

class UIBootstrapPagognation extends React.Component {
  render() {
    return (
      <div className="col-lg-12">
        <div className="card">
          <div className="header">
            <h2>Pagination</h2>
          </div>
          <div className="body">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link">Previous</a>
                </li>
                <li className="page-item">
                  <a className="page-link">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link">Next</a>
                </li>
              </ul>
            </nav>
            <hr />
            <h6>Working with icons</h6>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
            <hr />
            <h6>Disabled and active states</h6>
            <nav aria-label="...">
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link">Previous</a>
                </li>
                <li className="page-item">
                  <a className="page-link">1</a>
                </li>
                <li className="page-item active">
                  <a className="page-link">
                    2 <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ UIElementsReducer }) => ({
  alertData: UIElementsReducer.alertData,
});

export default connect(mapStateToProps, {
  onPressCloseAlert,
})(UIBootstrapPagognation);
