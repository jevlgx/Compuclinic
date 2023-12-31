import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import { Tabs, Tab, Dropdown } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

const images = [
  {
    original: require("../../assets/images/image-gallery/1.jpg"),
    thumbnail: require("../../assets/images/image-gallery/1.jpg"),
  },
  {
    original: require("../../assets/images/image-gallery/2.jpg"),
    thumbnail: require("../../assets/images/image-gallery/2.jpg"),
  },
  {
    original: require("../../assets/images/image-gallery/3.jpg"),
    thumbnail: require("../../assets/images/image-gallery/3.jpg"),
  },
  {
    original: require("../../assets/images/image-gallery/11.jpg"),
    thumbnail: require("../../assets/images/image-gallery/11.jpg"),
  },
  {
    original: require("../../assets/images/image-gallery/5.jpg"),
    thumbnail: require("../../assets/images/image-gallery/5.jpg"),
  },
];
const images1 = [
  {
    original: require("../../assets/images/image-gallery/4.jpg"),
    thumbnail: require("../../assets/images/image-gallery/4.jpg"),
  },
  {
    original: require("../../assets/images/image-gallery/5.jpg"),
    thumbnail: require("../../assets/images/image-gallery/5.jpg"),
  },
  {
    original: require("../../assets/images/image-gallery/6.jpg"),
    thumbnail: require("../../assets/images/image-gallery/6.jpg"),
  },
  {
    original: require("../../assets/images/image-gallery/11.jpg"),
    thumbnail: require("../../assets/images/image-gallery/11.jpg"),
  },
  {
    original: require("../../assets/images/image-gallery/3.jpg"),
    thumbnail: require("../../assets/images/image-gallery/3.jpg"),
  },
];
const images2 = [
  {
    original: require("../../assets/images/image-gallery/6.jpg"),
    thumbnail: require("../../assets/images/image-gallery/6.jpg"),
  },
  {
    original: require("../../assets/images/image-gallery/7.jpg"),
    thumbnail: require("../../assets/images/image-gallery/7.jpg"),
  },
  {
    original: require("../../assets/images/image-gallery/8.jpg"),
    thumbnail: require("../../assets/images/image-gallery/8.jpg"),
  },
  {
    original: require("../../assets/images/image-gallery/11.jpg"),
    thumbnail: require("../../assets/images/image-gallery/11.jpg"),
  },
  {
    original: require("../../assets/images/image-gallery/3.jpg"),
    thumbnail: require("../../assets/images/image-gallery/3.jpg"),
  },
];

const images3 = [
  {
    original: require("../../assets/images/image-gallery/9.jpg"),
    thumbnail: require("../../assets/images/image-gallery/9.jpg"),
  },
  {
    original: require("../../assets/images/image-gallery/10.jpg"),
    thumbnail: require("../../assets/images/image-gallery/10.jpg"),
  },
  {
    original: require("../../assets/images/image-gallery/11.jpg"),
    thumbnail: require("../../assets/images/image-gallery/11.jpg"),
  },
  {
    original: require("../../assets/images/image-gallery/3.jpg"),
    thumbnail: require("../../assets/images/image-gallery/3.jpg"),
  },
];

class ImageGalleryProfile extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div
          className="container-fluid"
          onClick={() => {
            document.body.classList.remove("offcanvas-active");
          }}
        >
          <PageHeader
            HeaderText="Gallery"
            Breadcrumb={[
              { name: "Page", navigate: "" },
              { name: "Gallery", navigate: "" },
            ]}
          />
          <div className="row clearfix">
            <div className="col-lg-12">
              <div className="card">
                <div className="header">
                  <h2>
                    Bootstrap 4 Gallery With Lightbox{" "}
                    <small>All pictures taken from pexels.com</small>
                  </h2>
                  {/* <ul className="header-dropdown">
                    <li className="dropdown"><a aria-expanded="false" aria-haspopup="true" className="dropdown-toggle" data-toggle="dropdown"  role="button"></a>
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li ><a >Action</a></li>
                      <li ><a >Another Action</a></li>
                      <li ><a >Something else</a></li>
                      </ul></li>
                  </ul> */}
                  <Dropdown className="header-dropdown">
                    <Dropdown.Toggle
                      variant="none"
                      as="a"
                      id="dropdown-basic"
                    ></Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu-right account">
                      <li>
                        <a>Action</a>
                      </li>
                      <li>
                        <a>Another Action</a>
                      </li>
                      <li>
                        <a>Something else</a>
                      </li>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="body">
                  <div className="gallery b4gallery">
                    <Tabs
                      defaultActiveKey="All"
                      className="nav nav-pills justify-content-start"
                    >
                      <Tab eventKey="All" title="All" className="nav-item">
                        <ImageGallery items={images} />
                      </Tab>
                      <Tab eventKey="Tab1" title="Tab1" className="nav-item">
                        <ImageGallery items={images1} />
                      </Tab>
                      <Tab eventKey="Tab2" title="Tab2" className="nav-item">
                        <ImageGallery items={images2} />
                      </Tab>
                      <Tab eventKey="Tab3" title="Tab3" className="nav-item">
                        <ImageGallery items={images3} />
                      </Tab>
                      <Tab eventKey="Tab4" title="Tab4" className="nav-item">
                        <div className="clearfix">
                          <p>No Images available.</p>
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
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

export default connect(mapStateToProps, {})(ImageGalleryProfile);
