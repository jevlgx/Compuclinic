import React, { useEffect, useState } from "react";
import { wServer } from "../Data/Consts";
import ContactCard from "../components/ContactCard";

//datas

export const DoctorsData = () => {

  const [datas, setDatas] = useState([]);
  
  useEffect(()=> {
      const loadDatas = async () => {
          
          fetch(`${wServer.GET.DOCTORS}`, {
              method: 'GET',
              redirect: 'follow',
              headers: {'Authorization': `Token ${localStorage.getItem("_compuclinicToken")}`}
          })
          .then((response) => {
            if (response.status === 200) return response.json();
          })
          .then((result) => {
              // console.log(result);
              setDatas(result);
          })
          .catch(error => console.log('error', error)); 
      }

      //exec
      loadDatas();
  }, [])
  
  return datas
}

//check datas

function GrhDatas() {

    const [loading, setLoading] = useState(false)
    const [datas, setDatas] = useState([]);
    
    useEffect(()=> {
        const loadDatas = async () => {
            
            setLoading(true);
            
            fetch(`${wServer.GET.EMPLOYEE}`, {
                method: 'GET',
                redirect: 'follow',
                headers: {'Authorization': `Token ${localStorage.getItem("_compuclinicToken")}`}
            })
            .then((response) => {
              if (response.status === 200) return response.json();
            })
            .then((result) => {
                setDatas(result);
                setTimeout(setLoading(false), 1500);
            })
            .catch(error => console.log('error', error)); 
        }

        //exec
        loadDatas();
    }, [])
    
    if(datas) return (
      <> 
      {datas.map((data, i) => {
        return (
          <ContactCard
            key={"udhfguhfudhg" + i}
            keys={data.nom + i}
            Image={data.image?data.image:null}
            Name={data.nom}
            AddressFirst={data.email}
            AddressSecund={data.telephone}
          />
        );
      })}
      </>
    )
    //loading widget 
    return (
        <div className="col">
        <div className="card">
          <div className="body d-flex items-center content-center">
            <div className="chart easy-pie-chart-1" data-percent="75">
              {/* Loading Widget */}
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
              {" "}
              <canvas height="100" width="100"></canvas>
            </div>            
          </div>
        </div>
      </div>
            
        )
}

export default GrhDatas;