import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import MailInbox from "../../components/MailInbox";
import MailCompose from "../../components/MailCompose";

class Inbox extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { isInbox } = this.props;
    return (
      <div style={{ flex: 1 }}>
        <div>
          <div className="container-fluid">
            <PageHeader
              HeaderText="Inbox"
              Breadcrumb={
                isInbox
                  ? [{ name: "App" }, { name: "Inbox" }]
                  : [
                      { name: "App" },
                      { name: "Inbox", navigate: "appinbox" },
                      { name: "Compose" },
                    ]
              }
            />
            {isInbox ? <MailInbox /> : <MailCompose />}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({
  isInbox: mailInboxReducer.isInbox,
});

export default connect(mapStateToProps, {})(Inbox);
