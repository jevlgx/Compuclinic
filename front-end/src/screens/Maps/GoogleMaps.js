import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const stamenTonerTiles = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const stamenTonerAttr =
  'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const mapCenter = [40.73061, -73.935242];
const zoomLevel = 10;

class Faqs extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidMount() {
    const leafletMap = this.leafletMap.leafletElement;
    leafletMap.on("zoomend", () => {
      // Actions for on zoomed event
    });
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
              HeaderText="Leaflet Map"
              Breadcrumb={[
                { name: "Maps", navigate: "" },
                { name: "Leaflet Map", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12">
                <div className="card">
                  <div className="body">
                    <Map
                      ref={(m) => {
                        this.leafletMap = m;
                      }}
                      center={mapCenter}
                      zoom={zoomLevel}
                      {...this.props}
                    >
                      <TileLayer
                        attribution={stamenTonerAttr}
                        url={stamenTonerTiles}
                      />
                    </Map>
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

export default connect(mapStateToProps, {})(Faqs);
