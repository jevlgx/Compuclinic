import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import Department from "../../components/Forms/BasicValidation";
import { wapp } from "../../Data/Consts";
// import AdvancedValidation from "../../components/Forms/AdvancedValidation";
import SecretaryImg from "../../assets/images/hospital-receptionist.png";
import CaisseImg from "../../assets/images/cashier.jpg";
import InfirmerieImg from "../../assets/images/nurse-man.jpg";
import MedecineImg from "../../assets/images/auth_bg1.jpeg";
import PlateauTechniqueImg from "../../assets/images/hospital-infrastructure.jpeg";
import LaborantinImg from "../../assets/images/image-gallery/1.jpg";
import GrhImg from "../../assets/images/hospital-grh.jpg";

class Departments extends React.Component {
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
              HeaderText="All Departments"
              Breadcrumb={[
                { name: "All", navigate: "" },
                { name: "Department", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <Department title="Secretariat" role="Secretaire" image={SecretaryImg} link={wapp.DEPARTMENT.SECRETARY} />
              <Department title="Caisse" role="Caissier" image={CaisseImg} link={wapp.DEPARTMENT.CAISSE} />
              <Department title="Infirmerie" role="Infirmier" image={InfirmerieImg} link={wapp.DEPARTMENT.INFIRMERIE} />
              <Department title="Medecine" role="Docteur" image={MedecineImg} link={wapp.DEPARTMENT.MEDECINE} />
              <Department title="Plateau Technique" role="Technicien" image={PlateauTechniqueImg} link={wapp.DEPARTMENT.PLATEAU_TECHNIQUE} />
              <Department title="Laboratoire" role="Laborantin" image={LaborantinImg} link={wapp.DEPARTMENT.LABORANTIN} />
              <Department title="Ressources Humaines" role="RH" image={GrhImg} link={wapp.DEPARTMENT.GRH} />
            </div>
            {/*<div className="row clearfix">
              <AdvancedValidation />
            </div>*/}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ ioTReducer }) => ({});

export default connect(mapStateToProps, {})(Departments);
