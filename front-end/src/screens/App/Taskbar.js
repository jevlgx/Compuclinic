import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import { Draggable, Droppable } from "react-drag-and-drop";
import { onLeave } from "../../actions";
import Avatar1 from "../../assets/images/xs/avatar1.jpg";
import Avatar2 from "../../assets/images/xs/avatar2.jpg";
import Avatar5 from "../../assets/images/xs/avatar5.jpg";

class AppTaskbar extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  state = {
    dropable: [
      {
        type: "fruit",
        Data: "#L1011",
      },
    ],
    gragable: [
      {
        type: "fruit",
        Data: "#L1010",
      },
    ],
    Copmplete: [
      {
        type: "fruit",
        Data: "#L1008",
      },
      {
        type: "fruit",
        Data: "#L1005",
      },
    ],
  };
  onDrop(data) {
    var dropabl = this.state.dropable;
    dropabl = dropabl.filter((item) => item.Data !== data.fruit);
    dropabl.push({
      type: "fruit",
      Data: data.fruit,
    });

    const filteredgragable = this.state.gragable.filter(
      (item) => item.Data !== data.fruit
    );
    const filteredCopmplete = this.state.Copmplete.filter(
      (item) => item.Data !== data.fruit
    );

    this.setState({
      dropable: [...dropabl],
      gragable: [...filteredgragable],
      Copmplete: [...filteredCopmplete],
    });
    // => banana
  }

  onDropT(data) {
    var dropabl = this.state.gragable;
    dropabl = dropabl.filter((item) => item.Data !== data.fruit);
    dropabl.push({
      type: "fruit",
      Data: data.fruit,
    });

    const filtereddropable = this.state.dropable.filter(
      (item) => item.Data !== data.fruit
    );
    const filteredCopmplete = this.state.Copmplete.filter(
      (item) => item.Data !== data.fruit
    );

    this.setState({
      gragable: [...dropabl],
      dropable: [...filtereddropable],
      Copmplete: [...filteredCopmplete],
    });
    // => banana
  }

  onDropCompete(data) {
    var Comp = this.state.Copmplete;
    Comp = Comp.filter((item) => item.Data !== data.fruit);
    Comp.push({
      type: "fruit",
      Data: data.fruit,
    });

    const filteredgragable = this.state.gragable.filter(
      (item) => item.Data !== data.fruit
    );
    const filtereddropable = this.state.dropable.filter(
      (item) => item.Data !== data.fruit
    );

    this.setState({
      gragable: [...filteredgragable],
      dropable: [...filtereddropable],
      Copmplete: [...Comp],
    });
  }

  render() {
    const { isInbox } = this.props;
    const renderItem = ({ item }) => {
      return (
        <li className="dd-item" data-id="1">
          <div className="dd-handle">{item.title}</div>
          <div className="dd-content p-15">
            <h5>{item.text}</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <ul className="list-unstyled team-info m-t-20 m-b-20">
              <li className="m-r-15">
                <small className="text-muted">Team</small>
              </li>
              <li>
                <img src={Avatar1} title="Avatar" alt="Avatar" />
              </li>
              <li>
                <img src={Avatar2} title="Avatar" alt="Avatar" />
              </li>
              <li>
                <img src={Avatar5} title="Avatar" alt="Avatar" />
              </li>
            </ul>
            <hr />
            <div className="action">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                title="Edit"
              >
                <i className="icon-note"></i>
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                title="Time"
              >
                <i className="icon-clock"></i>
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                title="Comment"
              >
                <i className="icon-bubbles"></i>
              </button>
              <button
                type="button"
                data-type="confirm"
                className="btn btn-sm btn-outline-danger float-right js-sweetalert"
                title="Delete"
              >
                <i className="icon-trash"></i>
              </button>
            </div>
          </div>
        </li>
      );
    };
    return (
      <div style={{ flex: 1 }}>
        <div>
          <div className="ng-star-inserted">
            <div className="container-fluid">
              <PageHeader
                HeaderText="TaskBoard"
                Breadcrumb={[{ name: "App" }, { name: "TaskBoard" }]}
              />
              <div className="row clearfix">
                <div className="col-lg-4 col-md-12">
                  <div className="card planned_task">
                    <div className="header">
                      <h2>Planned</h2>
                      <ul className="header-dropdown">
                        <li>
                          <a data-toggle="modal" data-target="#addcontact">
                            <i className="icon-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="body taskboard">
                      <div className="dd" data-plugin="nestable">
                        <Droppable
                          key={"1"}
                          onDragExit={(data) => this.props.onLeave(data)}
                          onDrop={this.onDropT.bind(this)}
                          types={["fruit"]} // <= allowed drop types
                          className="dd-list"
                        >
                          <ul>
                            {this.state.gragable.map((data, i) => {
                              return (
                                <Draggable
                                  type={data.type}
                                  data={data.Data}
                                  key={"gragglkasej" + i}
                                >
                                  <li className="dd-item">
                                    <div className="dd-handle">{data.Data}</div>
                                    <div className="dd-content p-15">
                                      <h5>Job title</h5>
                                      <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry.
                                      </p>
                                      <ul className="list-unstyled team-info m-t-20 m-b-20">
                                        <li className="m-r-15">
                                          <small className="text-muted">
                                            Team
                                          </small>
                                        </li>
                                        <li>
                                          <img
                                            src={Avatar1}
                                            title="Avatar"
                                            alt="Avatar"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={Avatar2}
                                            title="Avatar"
                                            alt="Avatar"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={Avatar5}
                                            title="Avatar"
                                            alt="Avatar"
                                          />
                                        </li>
                                      </ul>
                                      <hr />
                                      <div className="action">
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-outline-secondary"
                                          title="Edit"
                                        >
                                          <i className="icon-note"></i>
                                        </button>
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-outline-secondary"
                                          title="Time"
                                        >
                                          <i className="icon-clock"></i>
                                        </button>
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-outline-secondary"
                                          title="Comment"
                                        >
                                          <i className="icon-bubbles"></i>
                                        </button>
                                        <button
                                          type="button"
                                          data-type="confirm"
                                          className="btn btn-sm btn-outline-danger float-right js-sweetalert"
                                          title="Delete"
                                        >
                                          <i className="icon-trash"></i>
                                        </button>
                                      </div>
                                    </div>
                                  </li>
                                </Draggable>
                              );
                            })}
                          </ul>
                          {this.state.gragable.length === 0 ? (
                            <div className="dd-empty"></div>
                          ) : (
                            <div className="p-10"></div>
                          )}
                        </Droppable>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="card planned_task">
                    <div className="header">
                      <h2>In progress</h2>
                      <ul className="header-dropdown">
                        <li>
                          <a data-toggle="modal" data-target="#addcontact">
                            <i className="icon-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="body taskboard">
                      <div className="dd" data-plugin="nestable">
                        <Droppable
                          key={"1"}
                          onDrop={this.onDrop.bind(this)}
                          types={["fruit"]}
                        >
                          <ul>
                            {this.state.dropable.map((data, i) => {
                              return (
                                <Draggable
                                  type={data.type}
                                  data={data.Data}
                                  key={"gropasndkn" + i}
                                >
                                  <li className="dd-item">
                                    <div className="dd-handle1">
                                      {data.Data}
                                    </div>
                                    <div className="dd-content p-15">
                                      <h5>Job title</h5>
                                      <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry.
                                      </p>
                                      <ul className="list-unstyled team-info m-t-20 m-b-20">
                                        <li className="m-r-15">
                                          <small className="text-muted">
                                            Team
                                          </small>
                                        </li>
                                        <li>
                                          <img
                                            src={Avatar1}
                                            title="Avatar"
                                            alt="Avatar"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={Avatar2}
                                            title="Avatar"
                                            alt="Avatar"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={Avatar5}
                                            title="Avatar"
                                            alt="Avatar"
                                          />
                                        </li>
                                      </ul>
                                      <hr />
                                      <div className="action">
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-outline-secondary"
                                          title="Edit"
                                        >
                                          <i className="icon-note"></i>
                                        </button>
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-outline-secondary"
                                          title="Time"
                                        >
                                          <i className="icon-clock"></i>
                                        </button>
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-outline-secondary"
                                          title="Comment"
                                        >
                                          <i className="icon-bubbles"></i>
                                        </button>
                                        <button
                                          type="button"
                                          data-type="confirm"
                                          className="btn btn-sm btn-outline-danger float-right js-sweetalert"
                                          title="Delete"
                                        >
                                          <i className="icon-trash"></i>
                                        </button>
                                      </div>
                                    </div>
                                  </li>
                                </Draggable>
                              );
                            })}
                          </ul>
                          {this.state.dropable.length === 0 ? (
                            <div className="dd-empty"></div>
                          ) : (
                            <div className="p-10"></div>
                          )}
                        </Droppable>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="card planned_task">
                    <div className="header">
                      <h2>Completed Task</h2>
                      <ul className="header-dropdown">
                        <li>
                          <a data-toggle="modal" data-target="#addcontact">
                            <i className="icon-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="body taskboard">
                      <div className="dd" data-plugin="nestable">
                        <Droppable
                          key={"1"}
                          onDrop={this.onDropCompete.bind(this)}
                          types={["fruit"]}
                        >
                          <ul>
                            {this.state.Copmplete.map((data, i) => {
                              return (
                                <Draggable
                                  type={data.type}
                                  data={data.Data}
                                  key={"UKSGDuih" + i}
                                >
                                  <li className="dd-item">
                                    <div className="dd-handle2">
                                      {data.Data}
                                    </div>
                                    <div className="dd-content p-15">
                                      <h5>Job title</h5>
                                      <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry.
                                      </p>
                                      <ul className="list-unstyled team-info m-t-20 m-b-20">
                                        <li className="m-r-15">
                                          <small className="text-muted">
                                            Team
                                          </small>
                                        </li>
                                        <li>
                                          <img
                                            src={Avatar1}
                                            title="Avatar"
                                            alt="Avatar"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={Avatar2}
                                            title="Avatar"
                                            alt="Avatar"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={Avatar5}
                                            title="Avatar"
                                            alt="Avatar"
                                          />
                                        </li>
                                      </ul>
                                      <hr />
                                      <div className="action">
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-outline-secondary"
                                          title="Edit"
                                        >
                                          <i className="icon-note"></i>
                                        </button>
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-outline-secondary"
                                          title="Time"
                                        >
                                          <i className="icon-clock"></i>
                                        </button>
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-outline-secondary"
                                          title="Comment"
                                        >
                                          <i className="icon-bubbles"></i>
                                        </button>
                                        <button
                                          type="button"
                                          data-type="confirm"
                                          className="btn btn-sm btn-outline-danger float-right js-sweetalert"
                                          title="Delete"
                                        >
                                          <i className="icon-trash"></i>
                                        </button>
                                      </div>
                                    </div>
                                  </li>
                                </Draggable>
                              );
                            })}
                          </ul>
                          {this.state.Copmplete.length === 0 ? (
                            <div className="dd-empty"></div>
                          ) : (
                            <div className="p-10"></div>
                          )}
                        </Droppable>
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

const mapStateToProps = ({ mailInboxReducer }) => ({
  isInbox: mailInboxReducer.isInbox,
});

export default connect(mapStateToProps, { onLeave })(AppTaskbar);
