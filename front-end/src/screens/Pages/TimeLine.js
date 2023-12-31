import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";

class TimeLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseCommentBox: ["", "", ""],
    };
  }
  async onCollapse(index) {
    var c = this.state.collapseCommentBox;
    if (c[index] === "") {
      c[index] = "m-t-10 ";
      this.setState({
        collapseCommentBox: [...c],
      });
      setTimeout(() => {
        c[index] = "m-t-10 collapse show";
        this.setState({
          collapseCommentBox: [...c],
        });
      }, 500);
    } else {
      c[index] = "";
      this.setState({
        collapseCommentBox: [...c],
      });
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { collapseCommentBox } = this.state;
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
              HeaderText="Timeline"
              Breadcrumb={[
                { name: "Page", navigate: "" },
                { name: "Timeline", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <div className="col-lg-12">
                <div className="card">
                  <div className="body">
                    <div
                      className="timeline-item green"
                      date-is="20-04-2018 - Today"
                    >
                      <h5>
                        Hello, 'Im a single div responsive timeline without
                        media Queries!
                      </h5>
                      <span>
                        <a>Elisse Joson</a> San Francisco, CA
                      </span>
                      <div className="msg">
                        <p>
                          I'm speaking with myself, number one, because I have a
                          very good brain and I've said a lot of things. I write
                          the best placeholder text, and I'm the biggest
                          developer on the web card she has is the Lorem card.
                        </p>
                        <a className="m-r-20">
                          <i className="icon-heart"></i> Like
                        </a>
                        <a
                          onClick={() => {
                            this.onCollapse(0);
                          }}
                          className={collapseCommentBox[0] ? "collapsed" : ""}
                        >
                          <i className="icon-bubbles"></i> Comment
                        </a>
                        <div
                          className={
                            collapseCommentBox[0]
                              ? collapseCommentBox[0]
                              : "m-t-10 collapse"
                          }
                          id="collapseExample"
                        >
                          <div className="well">
                            <form>
                              <div className="form-group">
                                <textarea
                                  className="form-control no-resize"
                                  placeholder="Enter here for tweet..."
                                  rows="2"
                                ></textarea>
                              </div>
                              <button className="btn btn-primary">
                                Submit
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="timeline-item blue"
                      date-is="19-04-2018 - Yesterday"
                    >
                      <h5>Oeehhh, that's awesome.. Me too!</h5>
                      <span>
                        <a>Katherine Lumaad</a> Oakland, CA
                      </span>
                      <div className="msg">
                        <p>
                          I'm speaking with myself, number one, because I have a
                          very good brain and I've said a lot of things. on the
                          web by far... While that's mock-ups and this is
                          politics, are they really so different? I think the
                          only card she has is the Lorem card.
                        </p>
                        <a className="m-r-20">
                          <i className="icon-heart"></i> Like
                        </a>
                        <a
                          onClick={() => {
                            this.onCollapse(1);
                          }}
                          className={collapseCommentBox[1] ? "collapsed" : ""}
                        >
                          <i className="icon-bubbles"></i> Comment
                        </a>
                        <div
                          className={
                            collapseCommentBox[1]
                              ? collapseCommentBox[1]
                              : "m-t-10 collapse"
                          }
                          id="collapseExample"
                        >
                          <div className="well">
                            <form>
                              <div className="form-group">
                                <textarea
                                  className="form-control no-resize"
                                  placeholder="Enter here for tweet..."
                                  rows="2"
                                ></textarea>
                              </div>
                              <button className="btn btn-primary">
                                Submit
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-item warning" date-is="21-02-2018">
                      <h5>
                        An Engineer Explains Why You Should Always Order the
                        Larger Pizza
                      </h5>
                      <span>
                        <a>Gary Camara</a> San Francisco, CA
                      </span>
                      <div className="msg">
                        <p>
                          I'm speaking with myself, number one, because I have a
                          very good brain and I've said a lot of things. I write
                          the best placeholder text, and I'm the biggest
                          developer on the web by far... While that's mock-ups
                          and this is politics, is the Lorem card.
                        </p>
                        <a className="m-r-20">
                          <i className="icon-heart"></i> Like
                        </a>
                        <a
                          onClick={() => {
                            this.onCollapse(2);
                          }}
                          className={collapseCommentBox[2] ? "collapsed" : ""}
                        >
                          <i className="icon-bubbles"></i> Comment
                        </a>
                        <div
                          className={
                            collapseCommentBox[2]
                              ? collapseCommentBox[2]
                              : "m-t-10 collapse"
                          }
                          id="collapseExample"
                        >
                          <div className="well">
                            <form>
                              <div className="form-group">
                                <textarea
                                  className="form-control no-resize"
                                  placeholder="Enter here for tweet..."
                                  rows="2"
                                ></textarea>
                              </div>
                              <button className="btn btn-primary">
                                Submit
                              </button>
                            </form>
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
      </div>
    );
  }
}

const mapStateToProps = ({ ioTReducer }) => ({
  isSecuritySystem: ioTReducer.isSecuritySystem,
});

export default connect(mapStateToProps, {})(TimeLine);
