import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import ResentChat from "../../components/Dashboard/ResentChat";
import ReferralsCard from "../../components/Dashboard/ReferralsCard";
import TwitterFeedCard from "../../components/Dashboard/TwitterFeedCard";
import FeedCards from "../../components/Dashboard/FeedsCard";
import TimelineCard from "../../components/Dashboard/TimelineCard";
import SubscribeCard from "../../components/Dashboard/SubscribeCard";
import FollowersCard from "../../components/Dashboard/FollowersCard";
import DesignTeamCard from "../../components/Dashboard/DesignTeamCard";
import BrowserStatsCard from "../../components/Dashboard/BrowserStatsCard";
import MyStatsCard from "../../components/Dashboard/MyStatsCard";
import MenuListCard from "../../components/Dashboard/MenuListCard";
import PriceCard from "../../components/Dashboard/PriceCard";
import LastCommentCard from "../../components/Dashboard/LastCommentCard";
import ToDoListCard from "../../components/Dashboard/ToDoListCard";
import PlanCard from "../../components/Dashboard/PlanCard";
import InvoiceCard from "../../components/Dashboard/InvoiceCard";

import {
  facebookProgressBar,
  twitterProgressBar,
  affiliatesProgressBar,
  searchProgressBar,
} from "../../actions";

class WidgetsData extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.facebookProgressBar();
    this.props.twitterProgressBar();
    this.props.affiliatesProgressBar();
    this.props.searchProgressBar();
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
              HeaderText="Data"
              Breadcrumb={[
                { name: "Widgets", navigate: "" },
                { name: "Data", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <div className="col-lg-4 col-md-12">
                <FeedCards />
                <SubscribeCard />
                <FollowersCard />
                <ResentChat />
                <DesignTeamCard />
                <BrowserStatsCard />
                <MyStatsCard />
              </div>
              <div className="col-lg-4 col-md-12">
                <TimelineCard />
                <MenuListCard />
                <TwitterFeedCard />
                <PriceCard />
              </div>
              <div className="col-lg-4 col-md-12">
                <LastCommentCard />
                <ToDoListCard />
                <ReferralsCard />
                <PlanCard />
                <InvoiceCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ UIElementsReducer }) => ({});

export default connect(mapStateToProps, {
  facebookProgressBar,
  twitterProgressBar,
  affiliatesProgressBar,
  searchProgressBar,
})(WidgetsData);
