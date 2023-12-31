import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import Department from "../../components/Forms/BasicValidation";
// import AdvancedValidation from "../../components/Forms/AdvancedValidation";
import ContactCard from "../../components/ContactCard";
import { ContactCardData } from "../../Data/AppData";
import DoctorsListDatas from "../../dataComponents/DoctorsListDatas";
import AddContact from "../../components/AddContact";


class AllDoctor  extends React.Component {
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
                HeaderText="Doctor"
                Breadcrumb={[
                  { name: "Doctors", navigate:"#" },
                ]}
              />
              <div className="row clearfix">
                {ContactCardData.map((data, i) => {
                  return (
                    <ContactCard
                      key={"udhfguhfudhg" + i}
                      keys={data.name + i}
                      DataId={""}
                      Image={data.image}
                      Name={data.name}
                      AddressFirst={data.addressFirst}
                      AddressSecund={data.adressSecund}
                    />
                  );
                })}
                <DoctorsListDatas />
              </div>
            </div>
          </div>
        </div>
        <AddContact />
      </div>
    );
  }
}

const mapStateToProps = ({ ioTReducer }) => ({});

export default connect(mapStateToProps, {})(AllDoctor);
