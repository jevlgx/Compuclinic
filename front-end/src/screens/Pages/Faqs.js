import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import { Accordion, Card } from "react-bootstrap";

class Faqs extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div
        style={{ flex: 1 }}
        onClick={() => {
          document.body.classList.remove("offcanvas-active");
        }}
      >
        <div>
          <div className="container-fluid">
            <PageHeader
              HeaderText="FAQs"
              Breadcrumb={[
                { name: "Page", navigate: "" },
                { name: "FAQs", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <div className="card">
                <div className="body">
                  <h6 className="p-10 bg-info text-light">General</h6>
                  <Accordion defaultActiveKey="0">
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle
                          as="button"
                          variant="link"
                          className="btn btn-link collapsed"
                          eventKey="0"
                        >
                          How may times Lorum Ipsum has been used in this theme?
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0" className="card-body">
                        <Card.Body>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle
                          as="button"
                          variant="link"
                          className="btn btn-link collapsed"
                          eventKey="1"
                        >
                          How many instances of Lorum Ipsum usage can be found
                          on the web?
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1" className="card-body">
                        <Card.Body>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle
                          as="button"
                          variant="link"
                          className="btn btn-link collapsed"
                          eventKey="2"
                        >
                          How much does it cost to use Lorem ipsum?
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="2" className="card-body">
                        <Card.Body>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                  <h6 className="p-10 bg-warning text-light">
                    Security and Privacy
                  </h6>
                  <Accordion defaultActiveKey="0">
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle
                          as="button"
                          variant="link"
                          className="btn btn-link collapsed"
                          eventKey="0"
                        >
                          How much does it cost to use Lorem ipsum?
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0" className="card-body">
                        <Card.Body>
                          non cupidatat skateboard dolor brunch. Food truck
                          quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                          tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle
                          as="button"
                          variant="link"
                          className="btn btn-link collapsed"
                          eventKey="1"
                        >
                          Lorem ipsum commodo adipisicing sunt ad aliqua velit
                          nulla?
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1" className="card-body">
                        <Card.Body>
                          non cupidatat skateboard dolor brunch. Food truck
                          quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                          tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle
                          as="button"
                          variant="link"
                          className="btn btn-link collapsed"
                          eventKey="2"
                        >
                          How much does it cost to use Lorem ipsum?
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="2" className="card-body">
                        <Card.Body>
                          non cupidatat skateboard dolor brunch. Food truck
                          quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                          tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ ioTReducer }) => ({
  isSecuritySystem: ioTReducer.isSecuritySystem,
});

export default connect(mapStateToProps, {})(Faqs);
