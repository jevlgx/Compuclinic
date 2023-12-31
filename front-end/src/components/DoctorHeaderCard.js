import React from "react";
import User from "../assets/images/user.png";
import Avatar1 from "../assets/images/xs/avatar1.jpg";
import Avatar2 from "../assets/images/xs/avatar2.jpg";
import Avatar3 from "../assets/images/xs/avatar3.jpg";
import Avatar4 from "../assets/images/xs/avatar4.jpg";
import Avatar5 from "../assets/images/xs/avatar5.jpg";
import { DataListOf, wapp } from "../Data/Consts";

const DoctorHeaderCardV1 = ({ HeaderText, Breadcrumb }) => {
    const logged_user = DataListOf('login');
    return (
      <div className="body">
        <div className="text-center">
          <img src={User} className="rounded-circle m-b-15" alt="" />
          <div>
            <h4 className="m-b-0">
              <strong>{logged_user.data?.first_name||"Alizee"}</strong> {logged_user.data?.last_name||"Thomas"}
            </h4>
            <span>{logged_user.data?.email||"e@mail.com"}</span>
          </div>
          <div className="progress progress-xs m-b-25 m-t-25">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "60%" }}
            >
              <span className="progress-value">60% Complete</span>
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <h6>17</h6>
              <span>Consultations</span>
            </div>
            <div className="col-4">
              <h6>34</h6>
              <span>Taches</span>
            </div>
            <div className="col-4">
              <h6>78</h6>
              <span>Activités en tout</span>
            </div>
          </div>
        </div>
        <hr />
        {/* <span className="badge badge-default mb-2">Docteur</span> */}
        <span className="badge badge-primary mb-2">Cardiologue</span>
        <span className="badge badge-success mb-2">Chercheur</span>
        <hr />
        <h6><a href={wapp.DOCTOR.ALL}>Docteur</a></h6>
        <ul className="list-unstyled team-info m-t-20">
          <li>
            <img src={Avatar1} title="Médecin" alt="Doctor" />
          </li>
          <li>
            <img src={Avatar2} title="Cardiologue" alt="Doctor" />
          </li>
          <li>
            <img src={Avatar3} title="Pédiatre" alt="Doctor" />
          </li>
          <li>
            <img src={Avatar4} title="Ophtamologue" alt="Doctor" />
          </li>
          <li>
            <img src={Avatar5} title="Dentiste" alt="Doctor" />
          </li>
        </ul>
      </div>
    );
  }

export default DoctorHeaderCardV1;
