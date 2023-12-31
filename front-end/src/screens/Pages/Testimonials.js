import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import TestimonialsCard1 from "../../components/Pages/TestimonialsCard1";
import TestimonialsCard2 from "../../components/Pages/TestimonialsCard2";
import TestimonialsCard3 from "../../components/Pages/TestimonialsCard3";
import { TestimonialsCard2Data } from "../../Data/Pages";

class Testimonials extends React.Component {
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
              HeaderText="Testimonials"
              Breadcrumb={[
                { name: "Page", navigate: "" },
                { name: "Testimonials", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <TestimonialsCard1 />
            </div>
            <div className="row clearfix">
              {TestimonialsCard2Data.map((data, i) => {
                return (
                  <TestimonialsCard2
                    key={i}
                    name={data.name}
                    image={data.image}
                  />
                );
              })}
            </div>
            <div className="row clearfix">
              <TestimonialsCard3 />
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

export default connect(mapStateToProps, {})(Testimonials);
