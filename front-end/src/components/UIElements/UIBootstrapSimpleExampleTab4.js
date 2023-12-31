import React from "react";
import { connect } from "react-redux";

class UIBootstrapSimpleExampleTab4 extends React.Component {
  onTabChange = (e) => {
    var tab1 = document.getElementById("bacicTab4-1");
    tab1.classList.remove("active");
    tab1.children[0].classList.remove("active");
    var tab2 = document.getElementById("bacicTab4-2");
    tab2.classList.remove("active");
    tab2.children[0].classList.remove("active");
    var tab3 = document.getElementById("bacicTab4-3");
    tab3.classList.remove("active");
    tab3.children[0].classList.remove("active");
    var actab = document.getElementById("bacicTab4-" + e);
    actab.classList.add("active");
    actab.children[0].classList.add("active");

    var tabpan1 = document.getElementById("bacicTab4pan-1");
    tabpan1.classList.remove("active");
    var tabpan2 = document.getElementById("bacicTab4pan-2");
    tabpan2.classList.remove("active");
    var tabpan3 = document.getElementById("bacicTab4pan-3");
    tabpan3.classList.remove("active");
    var actabpab = document.getElementById("bacicTab4pan-" + e);
    actabpab.classList.add("active");
  };
  render() {
    return (
      <div className="col-lg-12 col-md-12">
        <div className="card">
          <div className="header">
            <h2>
              Example Tab 2<small>nav nav-tabs-new</small>
            </h2>
          </div>
          <div className="body">
            <ul className="nav nav-tabs" role="tablist">
              <li
                className="nav-item mr-1 active"
                id="bacicTab4-1"
                role="presentation"
                onClick={() => {
                  this.onTabChange(1);
                }}
              >
                <a className="nav-link active">Home</a>
              </li>
              <li
                className="nav-item mr-1"
                id="bacicTab4-2"
                role="presentation"
                onClick={() => {
                  this.onTabChange(2);
                }}
              >
                <a className="nav-link" data-toggle="tab">
                  Profile
                </a>
              </li>
              <li
                className="nav-item mr-1"
                id="bacicTab4-3"
                role="presentation"
                onClick={() => {
                  this.onTabChange(3);
                }}
              >
                <a className="nav-link" data-toggle="tab">
                  Contact
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div id="bacicTab4pan-1" className="tab-pane show active">
                <h6>Home</h6>
                <p>
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master
                  cleanse. Mustache cliche tempor, williamsburg carles vegan
                  helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                  synth. Cosby sweater eu banh mi, qui irure terry richardson ex
                  squid. Aliquip placeat salvia cillum iphone. Seitan aliquip
                  quis cardigan american apparel, butcher voluptate nisi qui.
                </p>
              </div>
              <div id="bacicTab4pan-2" className="tab-pane ">
                <h6>Profile</h6>
                <p>
                  Etsy mixtape wayfarers, ethical wes anderson tofu before they
                  sold out mcsweeney's organic lomo retro fanny pack lo-fi
                  farm-to-table readymade. Messenger bag gentrify pitchfork
                  tattooed craft beer, iphone skateboard locavore carles etsy
                  salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                  Leggings gentrify squid 8-bit cred pitchfork. Williamsburg
                  banh mi whatever gluten-free, carles pitchfork biodiesel
                  fixie.
                </p>
              </div>
              <div id="bacicTab4pan-3" className="tab-pane">
                <h6>Contact</h6>
                <p>
                  Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                  single-origin coffee squid. Exercitation +1 labore velit, blog
                  sartorial PBR leggings next level wes anderson artisan four
                  loko farm-to-table craft beer twee. Qui photo booth
                  letterpress, commodo enim craft beer mlkshk aliquip jean
                  shorts ullamco ad vinyl cillum PBR. Homo nostrud organic,
                  assumenda labore aesthetic magna delectus mollit. Keytar
                  helvetica VHS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(UIBootstrapSimpleExampleTab4);
