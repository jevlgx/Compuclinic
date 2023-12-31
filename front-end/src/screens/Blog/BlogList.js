import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import BlogListCard from "../../components/Blog/BlogListCard";
import SearchCard from "../../components/Blog/SearchCard";
import BlogAdsCard from "../../components/Blog/BlogAdsCard";
import { blogListCardData, blogAdsCardData } from "../../Data/BlogData";

class BlogList extends React.Component {
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
              HeaderText="Blog List"
              Breadcrumb={[
                { name: "Blog", navigate: "" },
                { name: "Blog List", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <div className="col-lg-8 col-md-12 left-box">
                {blogListCardData.map((data, i) => {
                  return (
                    <BlogListCard
                      key={"eni" + i}
                      ImageUrl={data.ImageUrl}
                      HeaderText={data.HeaderText}
                      Details={data.Details}
                    />
                  );
                })}
              </div>
              <div className="col-lg-4 col-md-12 left-box">
                <SearchCard />
                {blogAdsCardData.map((data, i) => {
                  return (
                    <BlogAdsCard
                      key={"adszdsgs" + `${i}`}
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

export default connect(mapStateToProps, {})(BlogList);
