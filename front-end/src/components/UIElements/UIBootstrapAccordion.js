import React from "react";
import { connect } from "react-redux";
import { Accordion, Card } from "react-bootstrap";
import { onPressCloseAlert } from "../../actions";

class UIBootstrapAccordion extends React.Component {
  render() {
    return (
      <div className="col-lg-12">
        <div className="card">
          <div className="header">
            <h2>Alert Messages With Icon</h2>
          </div>
          <div className="body">
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as="button"
                    variant="link"
                    className="btn btn-link"
                    eventKey="0"
                  >
                    Collapsible Group Item #1
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0" className="card-body">
                  <Card.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as="button"
                    variant="link"
                    className="btn btn-link"
                    eventKey="1"
                  >
                    Collapsible Group Item #2
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1" className="card-body">
                  <Card.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as="button"
                    variant="link"
                    className="btn btn-link"
                    eventKey="2"
                  >
                    Collapsible Group Item #3
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2" className="card-body">
                  <Card.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div className="body">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <h6>Accordion Link</h6>
                <p>
                  <button
                    className="btn btn-primary mr-1"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    onClick={() => {
                      var details = document.getElementById(
                        "collapseExampleopne"
                      );
                      if (details.classList.contains("show")) {
                        details.classList.remove("show");
                      } else {
                        details.classList.add("show");
                      }
                    }}
                  >
                    Link with href
                  </button>
                  <button
                    className="btn btn-primary mr-1"
                    type="button"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    onClick={() => {
                      var details = document.getElementById(
                        "collapseExampleopne"
                      );
                      if (details.classList.contains("show")) {
                        details.classList.remove("show");
                      } else {
                        details.classList.add("show");
                      }
                    }}
                  >
                    Button with data-target
                  </button>
                </p>
                <div className="collapse" id="collapseExampleopne">
                  <div className="card card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div>
                  <h6>Multiple targets Accordion</h6>
                  <p>
                    <button
                      className="btn btn-primary mr-1"
                      data-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="multiCollapseExample1"
                      onClick={() => {
                        var details = document.getElementById(
                          "multiCollapseExample1"
                        );
                        document
                          .getElementById("multiCollapseExample2")
                          .classList.remove("show");
                        if (details.classList.contains("show")) {
                          details.classList.remove("show");
                        } else {
                          details.classList.add("show");
                        }
                      }}
                    >
                      Toggle first element
                    </button>
                    <button
                      className="btn btn-primary mr-1"
                      type="button"
                      data-toggle="collapse"
                      data-target="#multiCollapseExample2"
                      aria-expanded="false"
                      aria-controls="multiCollapseExample2"
                      onClick={() => {
                        var details = document.getElementById(
                          "multiCollapseExample2"
                        );
                        document
                          .getElementById("multiCollapseExample1")
                          .classList.remove("show");
                        if (details.classList.contains("show")) {
                          details.classList.remove("show");
                        } else {
                          details.classList.add("show");
                        }
                      }}
                    >
                      Toggle second element
                    </button>
                    <button
                      className="btn btn-primary mr-1"
                      type="button"
                      data-toggle="collapse"
                      data-target=".multi-collapse"
                      aria-expanded="false"
                      aria-controls="multiCollapseExample1 multiCollapseExample2"
                      onClick={() => {
                        var details = document.getElementById(
                          "multiCollapseExample2"
                        );

                        if (details.classList.contains("show")) {
                          details.classList.remove("show");
                          document
                            .getElementById("multiCollapseExample1")
                            .classList.remove("show");
                        } else {
                          details.classList.add("show");
                          document
                            .getElementById("multiCollapseExample1")
                            .classList.add("show");
                        }
                      }}
                    >
                      Toggle both elements
                    </button>
                  </p>
                  <div className="row">
                    <div className="col">
                      <div
                        className="collapse multi-collapse"
                        id="multiCollapseExample1"
                      >
                        <div className="card card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. Nihil anim
                          keffiyeh helvetica, craft beer labore wes anderson
                          cred nesciunt sapiente ea proident.
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        className="collapse multi-collapse"
                        id="multiCollapseExample2"
                      >
                        <div className="card card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. Nihil anim
                          keffiyeh helvetica, craft beer labore wes anderson
                          cred nesciunt sapiente ea proident.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
})(UIBootstrapAccordion);
