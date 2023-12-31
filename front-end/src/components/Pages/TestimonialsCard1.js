import React from "react";
import { connect } from "react-redux";
import avatar1 from "../../assets/images/xs/avatar1.jpg";
import avatar2 from "../../assets/images/xs/avatar2.jpg";
import avatar3 from "../../assets/images/xs/avatar3.jpg";
import avatar4 from "../../assets/images/xs/avatar4.jpg";
import { Carousel } from "react-bootstrap";

class TestimonialsCard1 extends React.Component {
  render() {
    return (
      <div className="col-lg-12">
        <div className="card">
          <div className="body">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <div className="testimonial4">
                  <div className="active item">
                    <blockquote className="danger">
                      <p>
                        Denim you probably haven't heard of. Lorem ipsum dolor
                        met consectetur adipisicing sit amet, consectetur
                        adipisicing elit, of them jean shorts sed magna aliqua.
                        Lorem ipsum dolor met.
                      </p>
                    </blockquote>
                    <div className="carousel-info">
                      <img
                        alt=""
                        className="rounded-circle float-left"
                        src={avatar1}
                      />
                      <div className="float-left">
                        <h6 className="mb-0 m-t-5">Lina Mars</h6>
                        <span>Web Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="testimonial4">
                  <div className="active item">
                    <blockquote className="primary">
                      <p>
                        Denim you probably haven't heard of. Lorem ipsum dolor
                        met consectetur adipisicing sit amet, consectetur
                        adipisicing elit, of them jean shorts sed magna aliqua.
                        Lorem ipsum dolor met.
                      </p>
                    </blockquote>
                    <div className="carousel-info">
                      <img
                        alt=""
                        className="rounded-circle float-left"
                        src={avatar2}
                      />
                      <div className="float-left">
                        <h6 className="mb-0 m-t-5">Hossein Shams</h6>
                        <span>Commercial Director</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="testimonial4">
                  <div className="active item">
                    <blockquote className="info">
                      <p>
                        Denim you probably haven't heard of. Lorem ipsum dolor
                        met consectetur adipisicing sit amet, consectetur
                        adipisicing elit, of them jean shorts sed magna aliqua.
                        Lorem ipsum dolor met.
                      </p>
                    </blockquote>
                    <div className="carousel-info">
                      <img
                        alt=""
                        className="rounded-circle float-left"
                        src={avatar3}
                      />
                      <div className="float-left">
                        <h6 className="mb-0 m-t-5">Lina Mars</h6>
                        <span>Front End Developer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="testimonial4">
                  <div className="active item">
                    <blockquote className="warning">
                      <p>
                        Denim you probably haven't heard of. Lorem ipsum dolor
                        met consectetur adipisicing sit amet, consectetur
                        adipisicing elit, of them jean shorts sed magna aliqua.
                        Lorem ipsum dolor met.
                      </p>
                    </blockquote>
                    <div className="carousel-info">
                      <img
                        alt=""
                        className="rounded-circle float-left"
                        src={avatar4}
                      />
                      <div className="float-left">
                        <h6 className="mb-0 m-t-5">John Smith</h6>
                        <span>Commercial Director</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <Carousel controls={true} interval={200000}>
                  <Carousel.Item>
                    <div className="testimonial4">
                      <div className="active item">
                        <blockquote className="warning">
                          <p>
                            Denim you probably haven't heard of. Lorem ipsum
                            dolor met consectetur adipisicing sit amet,
                            consectetur adipisicing elit, of them jean shorts
                            sed magna aliqua. Lorem ipsum dolor met.
                          </p>
                        </blockquote>
                        <div className="carousel-info">
                          <img
                            alt=""
                            className="rounded-circle float-left"
                            src={avatar4}
                          />
                          <div className="float-left">
                            <h6 className="mb-0 m-t-5">John Smith</h6>
                            <span>Commercial Director</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="testimonial4">
                      <div className="active item">
                        <blockquote className="info">
                          <p>
                            Denim you probably haven't heard of. Lorem ipsum
                            dolor met consectetur adipisicing sit amet,
                            consectetur adipisicing elit, of them jean shorts
                            sed magna aliqua. Lorem ipsum dolor met.
                          </p>
                        </blockquote>
                        <div className="carousel-info">
                          <img
                            alt=""
                            className="rounded-circle float-left"
                            src={avatar3}
                          />
                          <div className="float-left">
                            <h6 className="mb-0 m-t-5">Lina Mars</h6>
                            <span>Front End Developer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="testimonial4">
                      <div className="active item">
                        <blockquote className="primary">
                          <p>
                            Denim you probably haven't heard of. Lorem ipsum
                            dolor met consectetur adipisicing sit amet,
                            consectetur adipisicing elit, of them jean shorts
                            sed magna aliqua. Lorem ipsum dolor met.
                          </p>
                        </blockquote>
                        <div className="carousel-info">
                          <img
                            alt=""
                            className="rounded-circle float-left"
                            src={avatar2}
                          />
                          <div className="float-left">
                            <h6 className="mb-0 m-t-5">Hossein Shams</h6>
                            <span>Commercial Director</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(TestimonialsCard1);
