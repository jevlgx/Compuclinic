import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import BlogListCard from "../../components/Blog/BlogListCard";
import BlogListCard1 from "../../components/Blog/BlogListCard1";
import BlogReplyCard from "../../components/Blog/BlogReplyCard";
import BlogCommentCard from "../../components/Blog/BlogCommentCard";
import BlogNewPostCard from "../../components/Blog/BlogNewPostCard";
import BlogAdsCard from "../../components/Blog/BlogAdsCard";
import SearchCard from "../../components/Blog/SearchCard";
import BlogAboutCard from "../../components/Blog/BlogAboutMe";
import BlogSocialCouterCard from "../../components/Blog/BlogSocialCouterCard";
import BlogPhotoCard from "../../components/Blog/BlogPhotoCard";
import Image1 from "../../assets/images/blog/blog-page-1.jpg";
import {
  blogAdsCardData,
  componentCardData,
} from "../../Data/BlogData";

class WidgetsBlog extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { modalData, modalCard } = this.props;
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
              HeaderText="Blog"
              Breadcrumb={[
                { name: "Widgets", navigate: "" },
                { name: "Blog", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12">
                <BlogListCard
                  ImageUrl={Image1}
                  HeaderText="ALL PHOTOGRAPHS ARE ACCURATE"
                  Details="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"
                />
                <BlogReplyCard />
              </div>
              <div className="col-lg-6 col-md-12">
                <BlogNewPostCard />
                <BlogListCard1 />
              </div>
            </div>
            <div className="row clearfix">
              <div className="col-lg-8 col-md-12">
                <BlogCommentCard
                  HeaderText={componentCardData.HeaderText}
                  CommentsList={componentCardData.CommentsList}
                />
              </div>
              <div className="col-lg-4 col-md-12">
                <BlogAdsCard
                  HeaderText={blogAdsCardData[0].HeaderText}
                  RefLink={blogAdsCardData[0].RefLink}
                />
                <BlogAdsCard
                  HeaderText={blogAdsCardData[3].HeaderText}
                  EmailFeedbackBar={blogAdsCardData[3].EmailFeedbackBar}
                />
              </div>
            </div>
            <div className="row clearfix">
              <div className="col-lg-4 col-md-12">
                <BlogSocialCouterCard />
                <BlogAdsCard
                  HeaderText={blogAdsCardData[2].HeaderText}
                  ImageList={blogAdsCardData[2].ImageList}
                />
                <BlogAboutCard />
              </div>
              <div className="col-lg-8 col-md-12">
                <SearchCard />
                <BlogPhotoCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ UIElementsReducer }) => ({});

export default connect(mapStateToProps, {})(WidgetsBlog);
