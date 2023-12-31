import React from "react";
import { connect } from "react-redux";

class BlogAdsCard extends React.Component {
  render() {
    const {
      HeaderText,
      Details,
      RefLink,
      PostList,
      ImageList,
      HeaderDetails,
      EmailFeedbackBar,
    } = this.props;

    return (
      <div className="card">
        <div className="header">
          <h2>
            {HeaderText}
            {HeaderDetails ? <small>{HeaderDetails}</small> : null}
          </h2>
        </div>
        {RefLink ? (
          <div className="body widget">
            <ul className="list-unstyled categories-clouds m-b-0">
              {RefLink
                ? RefLink.map((data, i) => {
                    return (
                      <li key={"fihgi" + i}>
                        <a
                          href="#!"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          {data.name}
                        </a>
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
        ) : null}
        {PostList ? (
          <div className="body widget popular-post">
            <div className="row">
              <div className="col-lg-12">
                {PostList.map((data, i) => {
                  return (
                    <div key={"jslfk" + i} className="single_post">
                      <p className="m-b-0">{data.Ads}</p>
                      <span>{data.Date}</span>
                      <div className="img-post">
                        <img alt="Awesome Image" src={data.ImageUrl} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : null}
        {ImageList ? (
          <div className="body widget">
            <ul className="list-unstyled instagram-plugin m-b-0">
              {ImageList.map((data, i) => {
                return (
                  <li key={"imagesdd" + i}>
                    <a>
                      <img src={data.ImageUrl} alt="image description" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
        {EmailFeedbackBar ? (
          <div className="body widget newsletter">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email"
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="icon-paper-plane"></i>
                </span>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(BlogAdsCard);
