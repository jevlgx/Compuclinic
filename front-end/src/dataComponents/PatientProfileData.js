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
import { LoadingWidget } from "./utils";


//check datas

function PatientProfileData( {location} ) {

    const [loading, setLoading] = useState(false)
    const [datas, setDatas] = useState();

    const route_params = useParams()
    
    useEffect(()=> {
        const loadDatas = async () => {
            
            setLoading(true);

            //get doctor id
            //const query_id = new URLSearchParams(location.search).get("doc_id") 
            //console.log(route_params?.doc_id) //1003bd5f-771b-462d-805e-292eb6ee3fa4
            
            fetch(`${wServer.GET.PATIENT.PROFILE(route_params?.patient_id)}`, {
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
    
    if(datas) return (
      <>
        <div className="col-lg-4 col-md-12">
          <ProfileHeaderCard 
            firstname = {datas.prenom}
            lastname = {datas.nom}
            email = {datas.email}
          />
          <PatientProfileInfoCard 
            address = {datas.domicile}
            email = {datas.email}
            phone = {datas.telephone}
            birth_date = {datas.date_naissance}
            statut = {datas.statut}
            social_twitter = 'facebook.com/'
          />
        </div>
        <div className="col-lg-8 col-md-12">
          <ProfileIconCard
            gender={datas.sexe}
            blood={datas.group_sanguin}
            weight={datas.weight?datas.weight:undefined}
            height={datas.height?datas.height:undefined}
          />
          <div className="row clearfix text-center">
            <ProfileSliderCard
                key={"i00"}
                color={"rgb(33, 150, 243)"}
                qte={datas.temperature}
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
                  data: [{ value: datas.temperature?datas.temperature:35 },
                         { value: datas.temperature?datas.temperature:15 }],
                }}
                headerText= "Température"
                subTitle= ""
              />
          </div>
          <ProfileTabs patient={datas} />
        </div>
      </>
    )
    //loading widget 
    return (
      <LoadingWidget />
            
        )
    
}

export default PatientProfileData;