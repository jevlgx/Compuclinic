import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import BlogListCard from "../../components/Blog/BlogListCard";
import SearchCard from "../../components/Blog/SearchCard";
import BlogAdsCard from "../../components/Blog/BlogAdsCard";
import BlogCommentCard from "../../components/Blog/BlogCommentCard";
import BlogReplyCard from "../../components/Blog/BlogReplyCard";
import {
  blogDetailsCardData,
  blogAdsCardData,
  componentCardData,
} from "../../Data/BlogData";

class BlogDetails extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div
        onClick={() => {
          document.body.classList.remove("offcanvas-active");
        }}
      >
        <div>
          <div className="container-fluid">
            <PageHeader
              HeaderText="Blog Details"
              Breadcrumb={[
                { name: "Blog", navigate: "" },
                { name: "Blog Details", navigate: "" },
              ]}
            />

            <div className="row clearfix">
              <div className="col-lg-8 col-md-12 left-box">
                <BlogListCard
                  ImageUrl={blogDetailsCardData.ImageUrl}
                  HeaderText={blogDetailsCardData.HeaderText}
                  Details={blogDetailsCardData.Details}
                />
                <BlogCommentCard
                  HeaderText={componentCardData.HeaderText}
                  CommentsList={componentCardData.CommentsList}
                />
                <BlogReplyCard />
              </div>
              <div className="col-lg-4 col-md-12 left-box">
                <SearchCard />
                {blogAdsCardData.map((data, i) => {
                  return (
                    <BlogAdsCard
                      key={`${i}` + "OUSHDOIGHSO"}
                      HeaderText={data.HeaderText}
                      RefLink={data.RefLink}
                      PostList={data.PostList}
                      ImageList={data.ImageList}
                      EmailFeedbackBar={data.EmailFeedbackBar}
                      HeaderDetails={data.HeaderDetails}
                    />
                  );
                })}
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

export default connect(mapStateToProps, {})(BlogDetails);
