import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import UIModalComponent from "../../components/UIElements/UIModal";
import UIModalCard from "../../components/UIElements/UIModalCard";
import { onClickModalCard, onCloseModal } from "../../actions";

class UIModal extends React.Component {
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
              HeaderText="Modals"
              Breadcrumb={[
                { name: "UI Elements", navigate: "" },
                { name: "Modals", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              {modalCard.map((d, i) => {
                return (
                  <UIModalCard
                    key={"card" + i}
                    title={d.title}
                    onClick={() => {
                      this.props.onClickModalCard(i);
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
        {modalData.map((d, i) => {
          return (
            <UIModalComponent
              key={"modal" + i}
              size={d.size}
              bodyText={d.bodyText}
              title={d.title}
              show={d.show}
              onClose={() => {
                this.props.onCloseModal(i);
              }}
              onSave={() => {
                this.props.onCloseModal(i);
              }}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ UIElementsReducer }) => ({
  modalData: UIElementsReducer.modalData,
  modalCard: UIElementsReducer.modalCard,
});

export default connect(mapStateToProps, {
  onClickModalCard,
  onCloseModal,
})(UIModal);
