import React, { useEffect, useState } from "react";
import { wServer, wapp } from "../Data/Consts";
import ProfileHeaderCard from "../components/Pages/ProfileHeaderCard";
import ProfileInfoCard from "../components/Pages/ProfileInfoCard";
import { useParams } from "react-router-dom";
import { LoadingWidget } from "./utils";


//check datas

function DoctorActivityProfileData( {location} ) {

    const [loading, setLoading] = useState(false)
    const [datas, setDatas] = useState([]);

    const route_params = useParams()
    
    useEffect(()=> {
        const loadDatas = async () => {
            
            setLoading(true);

            //get doctor id
            //const query_id = new URLSearchParams(location.search).get("doc_id") 
            //console.log(route_params?.doc_id) //1003bd5f-771b-462d-805e-292eb6ee3fa4
            
            fetch(`${wServer.GET.CONSULTATION("medecin_id="+route_params?.doc_id)}`, {
                method: 'GET',
                redirect: 'follow',
                headers: {'Authorization': `Token ${localStorage.getItem("_compuclinicToken")}`}
            })
            .then((response) => {
              if (response.status === 200) return response.json();
            })
            .then((result) => {
              //if(typeof(result) === typeof(Array)) setDatas(undefined);
              if(result) {
                //console.log(typeof(result));
                  //console.log(result);
                  setDatas(result);
                  setTimeout(setLoading(false), 1500);
                }
            })
            .catch(error => console.log('error', error)); 
        }

        //exec
        loadDatas();
    }, [])
    
    if(datas) return (
      <> 
        <div className="row clearfix">
          <div className="col">
            <div className="card text-center bg-primary">
                <div className="body">
                    <div className="p-15 text-light">
                        <h3>52</h3>
                        <span>Patients soignés</span>
                    </div>
                </div>
            </div>
          </div>
          <div className="col">
              <div className="card text-center bg-success">
                  <div className="body">
                      <div className="p-15 text-light">
                          <h3>21</h3>
                          <span>Opérat. réussi</span>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col">
              <div className="card text-center bg-danger">
                  <div className="body">
                      <div className="p-15 text-light">
                          <h3>05</h3>
                          <span>Echecs</span>
                      </div>
                  </div>
              </div>
          </div>
            
        </div>
        <div className="row clearfix">
        <div className="card">
          <div className="header">
              <h2>Consultations 
                <small>Patients à consulter</small>
              </h2>
          </div>
          <div className="body">                            
            <ul className="list-unstyled feeds_widget">
            {datas.length > 0 && datas.map((data, i) => {
              return(
              <li key={i}>
                <div className="feeds-left">
                  <i className="fa fa-user"></i>
                </div>
                <div className="feeds-body">
                    <h4 className="title">
                      <a href={wapp.PATIENT.PROFILE(data.patient.id)}>
                        {data.patient.nom} {data.patient.prenom}
                      </a>
                      <small className="float-right text-muted">
                        {new Date(data.schedule.date_debut||'').toISOString()}
                      </small>
                    </h4>
                    <small>{data.patient?.symptomes?.replace(",", "|")}</small>
                </div>
              </li>
              )
            })}                                
            </ul>
          </div>
        </div>
        </div>
      </>
    )
    //display template if there is nothing to fetch
    if(datas===[]) return (
      <> 
        <div className="row clearfix">
          <div className="col">
            <div className="card text-center bg-primary">
                <div className="body">
                    <div className="p-15 text-light">
                        <h3>52</h3>
                        <span>Patients soignés</span>
                    </div>
                </div>
            </div>
          </div>
          <div className="col">
              <div className="card text-center bg-success">
                  <div className="body">
                      <div className="p-15 text-light">
                          <h3>21</h3>
                          <span>Opérat. réussi</span>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col">
              <div className="card text-center bg-danger">
                  <div className="body">
                      <div className="p-15 text-light">
                          <h3>05</h3>
                          <span>Echecs</span>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <div className="row clearfix">
          <div className="card">
            <div className="header">
                <h2>Consultations 
                  <small>Patients à consulter</small>
                </h2>
            </div>
            <div className="body">
              <ul className="list-unstyled feeds_widget">
                <li>
                    <div className="feeds-left">
                      <i className="fa fa-thumbs-o-up"></i>
                    </div>
                    <div className="feeds-body">
                        <h4 className="title">Vide !<small className="float-right text-muted">!!</small></h4>
                        <small>Aucune Consultation trouvé</small>
                    </div>
                </li>
                <li>
                    <div className="feeds-left"><i className="fa fa-thumbs-o-up"></i></div>
                    <div className="feeds-body">
                        <h4 className="title">Vide !<small className="float-right text-muted">!!</small></h4>
                        <small>Aucune Consultation trouvé</small>
                    </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    )
    //loading widget 
    return (
        <LoadingWidget />
        )
    
}

export default DoctorActivityProfileData;