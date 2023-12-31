import React from "react";
import { connect } from "react-redux";

class TestimonialsCard2 extends React.Component {
  render() {
    const { name, image } = this.props;
    return (
      <div className="col-lg-3 col-md-6">
        <div className="card testimonials">
          <div className="body">
            <i className="fa fa-quote-left"></i>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="m-t-30">
              <img
                alt=""
                className="media-object rounded-circle shadow"
                src={image}
              />
              <h6 className="mb-0 m-t-10">{name}</h6>
              <span>CEO, Apple inc</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(TestimonialsCard2);
