import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import ContactCard from "../../components/ContactCard";
import { ContactCardData } from "../../Data/AppData";
import AddContact from "../../components/AddContact";
import { onPressAddContact } from "../../actions";

class Chat extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { isContactModal } = this.props;
    return (
      <div style={{ flex: 1 }}>
        <div style={{ opacity: isContactModal ? 0.3 : 1 }}>
          <div className="ng-star-inserted">
            <div className="container-fluid">
              <PageHeader
                HeaderText="Contact"
                Breadcrumb={[{ name: "App" }, { name: "Contact" }]}
              />
              <div className="row clearfix">
                {ContactCardData.map((data, i) => {
                  return (
                    <ContactCard
                      key={"udhfguhfudhg" + i}
                      keys={data.name + i}
                      Image={data.image}
                      Name={data.name}
                      AddressFirst={data.addressFirst}
                      AddressSecund={data.adressSecund}
                    />
                  );
                })}
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="card">
                    <div className="body text-center">
                      <div className="p-t-65 p-b-65">
                        <h6>Add New Contact</h6>
                        <button
                          className="btn btn-outline-primary"
                          onClick={() => {
                            this.props.onPressAddContact();
                          }}
                          data-target="#addcontact"
                          data-toggle="modal"
                          type="button"
                        >
                          <i className="fa fa-plus-circle"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AddContact />
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({
  isContactModal: mailInboxReducer.isContactModal,
});

export default connect(mapStateToProps, { onPressAddContact })(Chat);
