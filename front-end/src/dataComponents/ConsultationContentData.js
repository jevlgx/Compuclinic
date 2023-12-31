import React, { useEffect, useState } from "react";
import { wServer } from "../Data/Consts";
import ProfileHeaderCard from "../components/Pages/ProfileHeaderCard";
import ProfileInfoCard from "../components/Pages/ProfileInfoCard";
import { useParams } from "react-router-dom";
import ProfileIconCard from "../components/Pages/ProfileIconCard";
import ProfileSliderCard from "../components/Pages/ProfileSliderCard";
import { ProfileSliderData } from "../Data/Charts";
import ProfileTabs from "../components/Pages/ProfileTabs";
import PatientProfileInfoCard from "./PatientProfileInfoCard";
import { LoadingWidget, SummerNoteEditor } from "./utils";
import { Card } from "react-bootstrap";


//check datas

function ConsultationContentData( {location} ) {

    const [loading, setLoading] = useState(false)
    const [datas, setDatas] = useState({
      // id:"",
      // patient:{},
      // medecin:{},
      // schedule:{},
      // medecin_note:"",
      // remarque:"",
      // prescriptions:""
    });

    const route_params = useParams()
    
    useEffect(()=> {
        const loadDatas = async () => {
            
            setLoading(true);

            //get doctor id
            //const query_id = new URLSearchParams(location.search).get("consult_id") 
            // console.log(route_params?.consultation_id) //1003bd5f-771b-462d-805e-292eb6ee3fa4
            
            fetch(`${wServer.GET.CONSULTATION_SINGLE(route_params?.consultation_id)}`, {
                method: 'GET',
                redirect: 'follow',
                headers: {'Authorization': `Token ${localStorage.getItem("_compuclinicToken")}`}
            })
            .then((response) => {
              if (response.status === 200) return response.json();
            })
            .then((result) => {
              //if(typeof(result) === typeof(Array)) setDatas(undefined);
              if(result && !result[0]) {
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

    //put consultation
    const putOrdonance = (event) => {
      
      event.preventDefault()
            
      setLoading(true);
      fetch(`${wServer.GET.CONSULTATION_SINGLE(route_params?.consultation_id)}`, {
          method: 'PUT',
          redirect: 'follow',
          headers: {
            'Authorization': `Token ${localStorage.getItem("_compuclinicToken")}`,
            'Content-Type': 'application/json',
          },
          body:JSON.stringify({
            medecin_note: document.getElementById('ordonnance').value
          })
      })
      .then((response) => {
        if (response.status === 200) return response.json();
      })
      .then((result) => {
        //if(typeof(result) === typeof(Array)) setDatas(undefined);
        if(result && !result[0]) {
          //console.log(typeof(result));
            //console.log(result);
            setDatas(result);
            setTimeout(setLoading(false), 1500);
          }
      })
      .catch(error => console.log('error', error)); 
    }
    
    if(datas) return (
      <>
        <div className="col-lg-4 col-md-12">
          <ProfileHeaderCard 
            firstname = {datas.patient?.prenom}
            lastname = {datas.patient?.nom}
            email = {datas.patient?.email}
          />
          <PatientProfileInfoCard 
            id = {datas.patient?.id}
            address = {datas.patient?.domicile}
            email = {datas.patient?.email}
            phone = {datas.patient?.telephone}
            birth_date = {datas.patient?.date_naissance}
            statut = {datas.patient?.statut}
            social_twitter = 'facebook.com/'
          />
        </div>
        <div className="col-lg-8 col-md-12">
          <ProfileIconCard
            gender={datas.patient?.sexe}
            blood={datas.patient?.group_sanguin}
            weight={datas.patient?.weight?datas.patient?.weight:undefined}
            height={datas.patient?.height?datas.patient?.height:undefined}
          />
          <div className="row clearfix text-center">
            <ProfileSliderCard
                key={"i00"}
                color={"rgb(33, 150, 243)"}
                qte={datas.patient?.temperature}
                data={{
                  name: "Temperature",
                  type: "pie",
                  clockWise: 1,
                  startAngle: 90,
                  radius: [35, 38],
                  itemStyle: {
                    normal: {
                      label: { show: false },
                      labelLine: { show: false },
                    },
                  },
                  label: {
                    show: false,
                    position: "center",
                  },
                  emphasis: {
                    label: {
                      show: true,
                      fontSize: "30",
                      fontWeight: "bold",
                    },
                  },
                  labelLine: {
                    show: false,
                  },
                  data: [{ value: datas.patient?.temperature?datas.patient?.temperature:35 },
                         { value: datas.patient?.temperature?datas.patient?.temperature:15 }],
                }}
                headerText= "Température"
                subTitle= ""
              />
          </div>
          {/* <ProfileTabs patient={datas.patient} /> */}
          {/* <SummerNoteEditor /> */}
          <div>
            <Card>
              <div className="body">
                <form onSubmit={putOrdonance}>
                  <div className="">
                    <label>Ordonance Médicale</label>
                    <textarea id="ordonnance" className="" rows={30}  style={{
                        border:'solid 1px',
                        borderRadius: '8px',
                        borderColor: "#ebeae8",
                        width: '100%',
                        padding: 8
                      }}
                      placeholder="Ex: 1 efferalgant 1 fois par jour pendant 3 jours"
                      defaultValue={datas.medecin_note}
                      name="" 
                    />
                  </div>
                  <div className="form-group py-2">
                    <button className="btn btn-block btn-primary" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </>
    )
    //loading widget 
    return (
      <LoadingWidget />
            
        )
    
}

export default ConsultationContentData;