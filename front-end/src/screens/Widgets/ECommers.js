import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import Receipt from "../../components/Blog/Receipt";
import CustomerRating from "../../components/Blog/CustomerRating";
import ProductRating from "../../components/Blog/ProductRating";
import ProductItem from "../../components/Blog/ProductItem";
import ProductCard from "../../components/Blog/ProductCard";
import UserAvrageRatingCard from "../../components/Blog/UserAvrageRatingCard";
import RatingBreackdown from "../../components/Blog/RatingBreackdown";
import PaymentForm1 from "../../components/Blog/PaymentForm1";
import ProductList from "../../components/Blog/ProductList";
import ProductOrderList from "../../components/Blog/ProductOrderList";
import headphone from "../../assets/images/ecommerce/wireless-red-quarter.jpg";
import cameralens from "../../assets/images/ecommerce/Canon-70-200mm.jpg";
import PaymentForm2 from "../../components/Blog/PaymentForm2";

class WidgetsECommers extends React.Component {
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
              HeaderText="E Commers"
              Breadcrumb={[
                { name: "Widgets", navigate: "" },
                { name: "E Commers", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12">
                <Receipt />
                <CustomerRating />
              </div>
              <div className="col-lg-6 col-md-12">
                <ProductRating />
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <ProductItem />
                    <ProductCard
                      image={headphone}
                      name="BEATS HEADPHONE"
                      rate="$12.95"
                      catagories={["RED", "BEATS", "HEADPHONE"]}
                    />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <UserAvrageRatingCard />
                    <RatingBreackdown />
                    <ProductCard
                      image={cameralens}
                      name="CAMERA LENS"
                      rate="$56.25"
                      catagories={["CAMERA", "GADGET", "LENS"]}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row clearfix">
              <PaymentForm1 name="Payment form1" />
              <PaymentForm2 name="Payment form2" />
            </div>
            <div className="row clearfix">
              <ProductList />
              <ProductOrderList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ UIElementsReducer }) => ({});

export default connect(mapStateToProps, {})(WidgetsECommers);
