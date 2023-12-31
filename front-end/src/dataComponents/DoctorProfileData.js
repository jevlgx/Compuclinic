import React, { useEffect, useState } from "react";
import { wServer } from "../Data/Consts";
import ProfileHeaderCard from "../components/Pages/ProfileHeaderCard";
import ProfileInfoCard from "../components/Pages/ProfileInfoCard";
import { useParams } from "react-router-dom";
import { LoadingWidget } from "./utils";


//check datas

function DoctorProfileData( {location} ) {

    const [loading, setLoading] = useState(false)
    const [datas, setDatas] = useState();

    const route_params = useParams()
    
    useEffect(()=> {
        const loadDatas = async () => {
            
            setLoading(true);

            //get doctor id
            //const query_id = new URLSearchParams(location.search).get("doc_id") 
            //console.log(route_params?.doc_id) //1003bd5f-771b-462d-805e-292eb6ee3fa4
            
            fetch(`${wServer.GET.DOCTOR_PROFILE(route_params?.doc_id)}`, {
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
        <ProfileHeaderCard 
          firstname = {datas.prenom}
          lastname = {datas.nom}
          email = {datas.email}
        />
        <ProfileInfoCard 
          address = {datas.domicile}
          email = {datas.email}
          phone = {datas.telephone}
          birth_date = {datas.date_naissance}
          social_facebook = 'twitter.com/'
          social_twitter = 'facebook.com/'
        />
      </>
    )
    //display template if there is nothing to fetch
    if(!route_params?.doc_id) return (
      <> 
        <ProfileHeaderCard 
          firstname = {"datas.prenom"}
          lastname = {"datas.nom"}
          email = {"datas.email"}
        />
        <ProfileInfoCard 
          address = {"datas.domicile"}
          email = {"datas.email"}
          phone = {"datas.telephone"}
          birth_date = {"datas.date_naissance"}
          social_facebook = 'twitter.com/'
          social_twitter = 'facebook.com/'
        />
      </>
    )
    //loading widget 
    return (
      <LoadingWidget />
      )
    
}

export default DoctorProfileData;