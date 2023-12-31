import React from "react";
import { connect } from "react-redux";

class BlogCommentCard extends React.Component {
  render() {
    const { CommentsList, HeaderText } = this.props;
    return (
      <div className="card">
        <div className="header">
          <h2>{HeaderText}</h2>
        </div>
        <div className="body">
          <ul className="comment-reply list-unstyled">
            {CommentsList
              ? CommentsList.map((data, i) => {
                  return (
                    <li key={"dhfkj" + i} className="row clearfix">
                      <div className="icon-box col-md-2 col-4">
                        <img
                          className="img-fluid img-thumbnail"
                          src={data.ImageUrl}
                          alt="Awesome Image"
                        />
                      </div>
                      <div className="text-box col-md-10 col-8 p-l-0 p-r0">
                        <h5 className="m-b-0">{data.Name}</h5>
                        <p>{data.comment}</p>
                        <ul className="list-inline">
                          <li>
                            <a>{data.Date}</a>
                          </li>
                          <li>
                            <a>Reply</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(BlogCommentCard);
