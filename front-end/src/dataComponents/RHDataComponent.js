import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { wServer, wapp } from "../Data/Consts";
import { LoadingWidget } from "./utils";
import { RessourceHumainAction } from "../screens/Departments/ResourceHumain";


//check datas

export const MedecinTableData = () => {

    const [loading, setLoading] = useState(false)
    const [datas, setDatas] = useState([]);
    
    useEffect(()=> {
        const loadDatas = async () => {
            
            setLoading(true);
            
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
                setTimeout(setLoading(false), 1500);
            })
            .catch(error => console.log('error', error)); 
        }

        //exec
        loadDatas();
    }, [])
    
    if(datas) return (
      <>
        <div className="body table-responsive pb-5">
        {/* <table className="table table-hover">
        </table> */}
          <table className="table table-hover pb-5">
            <thead>
              <tr>
                <th>#</th>
                <th>Medicine</th>
                <th>Matricule</th>
                <th>Specialirte</th>
                <th>Poste</th>
                <th>Domicile</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody> 
            {datas.length > 0 && datas?.map((data, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i+1}</th>
                    <td>{data.prenom}</td>
                    <td>{data.nom}</td>
                    <td>{data.matricule}</td>
                    <td></td>
                    <td></td>
                    {/* <td><RessourceHumainAction /></td> */}
                    <td>
                      <a href={wapp.PATIENT.PROFILE(data.id)}>
                        <i className="icon-eye"></i>
                      </a>
                      {" | "}
                      <a href={wapp.PATIENT.PROFILE(data.id)}
                        onClick={(e)=>{
                          e.preventDefault();
                          document.getElementById("editPatientModal").classList.toggle("show");
                        }}>
                        <i className="fa fa-pencil-square-o"></i> 
                      </a>
                      {" | "}
                      <a href={wapp.PATIENT.PROFILE(data.id)}
                        className="text-danger"
                        onClick={(e)=>{
                          e.preventDefault();
                          document.getElementById("validationModal").classList.toggle("show");
                        }}>
                        <i className="fa fa-trash-o"></i> 
                      </a>
                  </td>
                  </tr>   
                );
              })}
          </tbody>
          </table>
        </div>
      </>
    )
    //Loading widget
    return (
      <LoadingWidget />
          
      )
}

export const SecretaireTableData = () => {

  const [loading, setLoading] = useState(false)
  const [datas, setDatas] = useState([]);
  
  useEffect(()=> {
      const loadDatas = async () => {
          
          setLoading(true);
          
          fetch(`${wServer.GET.SECRETARIES}`, {
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
              setTimeout(setLoading(false), 1500);
          })
          .catch(error => console.log('error', error)); 
      }

      //exec
      loadDatas();
  }, [])
  
  if(datas) return (
    <>
      <div className="body table-responsive pb-5">
        <table className="table table-hover pb-5">
          <thead>
            <tr>
              <th>#</th>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>USERNAME</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody> 
          {datas.length > 0 && datas?.map((data, i) => {
              return (
                <tr key={i}>
                  <th scope="row">1</th>
                  <td>{data.prenom}</td>
                  <td>{data.nom}</td>
                  <td>{data.matricule}</td>
                  <td>
                    <a href={wapp.PATIENT.PROFILE + data.id}>
                      <i className="icon-eye"></i>
                    </a>
                    {" | "}
                    <a href={wapp.PATIENT.PROFILE}
                      onClick={(e)=>{
                        e.preventDefault();
                        document.getElementById("editPatientModal").classList.toggle("show");
                      }}>
                      <i className="fa fa-pencil-square-o"></i> 
                    </a>
                    {" | "}
                    <a href={wapp.PATIENT.PROFILE}
                      className="text-danger"
                      onClick={(e)=>{
                        e.preventDefault();
                        document.getElementById("validationModal").classList.toggle("show");
                      }}>
                      <i className="fa fa-trash-o"></i> 
                    </a>
                </td>
                </tr>   
              );
            })}
        </tbody>
        </table>
      </div>
    </>
  )
  //Loading widget
  return (
    <LoadingWidget />
        
    )
}

export const CaissierTableData = () => {

  const [loading, setLoading] = useState(false)
  const [datas, setDatas] = useState([]);
  
  useEffect(()=> {
      const loadDatas = async () => {
          
          setLoading(true);
          
          fetch(`${wServer.GET.CAISHIERS}`, {
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
              setTimeout(setLoading(false), 1500);
          })
          .catch(error => console.log('error', error)); 
      }

      //exec
      loadDatas();
  }, [])
  
  if(datas) return (
    <>
      <div className="body table-responsive pb-5">
        <table className="table table-hover pb-5">
          <thead>
            <tr>
              <th>#</th>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>USERNAME</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody> 
          {datas.length > 0 && datas?.map((data, i) => {
              return (
                <tr key={i}>
                  <th scope="row">1</th>
                  <td>{data.prenom}</td>
                  <td>{data.nom}</td>
                  <td>{data.matricule}</td>
                  <td>
                    <a href={wapp.PATIENT.PROFILE + data.id}>
                      <i className="icon-eye"></i>
                    </a>
                    {" | "}
                    <a href={wapp.PATIENT.PROFILE}
                      onClick={(e)=>{
                        e.preventDefault();
                        document.getElementById("editPatientModal").classList.toggle("show");
                      }}>
                      <i className="fa fa-pencil-square-o"></i> 
                    </a>
                    {" | "}
                    <a href={wapp.PATIENT.PROFILE}
                      className="text-danger"
                      onClick={(e)=>{
                        e.preventDefault();
                        document.getElementById("validationModal").classList.toggle("show");
                      }}>
                      <i className="fa fa-trash-o"></i> 
                    </a>
                </td>
                </tr>   
              );
            })}
        </tbody>
        </table>
      </div>
    </>
  )
  //Loading widget
  return (
    <LoadingWidget />
        
    )
}

export const InfirmierTableData = () => {

  const [loading, setLoading] = useState(false)
  const [datas, setDatas] = useState([]);
  
  useEffect(()=> {
      const loadDatas = async () => {
          
          setLoading(true);
          
          fetch(`${wServer.GET.NURSES}`, {
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
              setTimeout(setLoading(false), 1500);
          })
          .catch(error => console.log('error', error)); 
      }

      //exec
      loadDatas();
  }, [])
  
  if(datas) return (
    <>
      <div className="body table-responsive pb-5">
        <table className="table table-hover pb-5">
          <thead>
            <tr>
              <th>#</th>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>USERNAME</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody> 
          {datas.length > 0 && datas?.map((data, i) => {
              return (
                <tr key={i}>
                  <th scope="row">1</th>
                  <td>{data.prenom}</td>
                  <td>{data.nom}</td>
                  <td>{data.matricule}</td>
                  <td>
                    <a href={wapp.PATIENT.PROFILE + data.id}>
                      <i className="icon-eye"></i>
                    </a>
                    {" | "}
                    <a href={wapp.PATIENT.PROFILE}
                      onClick={(e)=>{
                        e.preventDefault();
                        document.getElementById("editPatientModal").classList.toggle("show");
                      }}>
                      <i className="fa fa-pencil-square-o"></i> 
                    </a>
                    {" | "}
                    <a href={wapp.PATIENT.PROFILE}
                      className="text-danger"
                      onClick={(e)=>{
                        e.preventDefault();
                        document.getElementById("validationModal").classList.toggle("show");
                      }}>
                      <i className="fa fa-trash-o"></i> 
                    </a>
                </td>
                </tr>   
              );
            })}
        </tbody>
        </table>
      </div>
    </>
  )
  //Loading widget
  return (
    <LoadingWidget />
        
    )
}

export const LaborantinTableData = () => {

  const [loading, setLoading] = useState(false)
  const [datas, setDatas] = useState([]);
  
  useEffect(()=> {
      const loadDatas = async () => {
          
          setLoading(true);
          
          fetch(`${wServer.GET.LABORATORIES}`, {
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
              setTimeout(setLoading(false), 1500);
          })
          .catch(error => console.log('error', error)); 
      }

      //exec
      loadDatas();
  }, [])
  
  if(datas) return (
    <>
      <div className="body table-responsive pb-5">
        <table className="table table-hover pb-5">
          <thead>
            <tr>
              <th>#</th>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>USERNAME</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody> 
          {datas.length > 0 && datas?.map((data, i) => {
              return (
                <tr key={i}>
                  <th scope="row">1</th>
                  <td>{data.prenom}</td>
                  <td>{data.nom}</td>
                  <td>{data.matricule}</td>
                  <td>
                    <a href={wapp.PATIENT.PROFILE + data.id}>
                      <i className="icon-eye"></i>
                    </a>
                    {" | "}
                    <a href={wapp.PATIENT.PROFILE}
                      onClick={(e)=>{
                        e.preventDefault();
                        document.getElementById("editPatientModal").classList.toggle("show");
                      }}>
                      <i className="fa fa-pencil-square-o"></i> 
                    </a>
                    {" | "}
                    <a href={wapp.PATIENT.PROFILE}
                      className="text-danger"
                      onClick={(e)=>{
                        e.preventDefault();
                        document.getElementById("validationModal").classList.toggle("show");
                      }}>
                      <i className="fa fa-trash-o"></i> 
                    </a>
                </td>
                </tr>   
              );
            })}
        </tbody>
        </table>
      </div>
    </>
  )
  //Loading widget
  return (
    <LoadingWidget />
        
    )
}

export const PlateauTableData = () => {

  const [loading, setLoading] = useState(false)
  const [datas, setDatas] = useState([]);
  
  useEffect(()=> {
      const loadDatas = async () => {
          
          setLoading(true);
          
          fetch(`${wServer.GET.PATIENT.ALL}`, {
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
              setTimeout(setLoading(false), 1500);
          })
          .catch(error => console.log('error', error)); 
      }

      //exec
      loadDatas();
  }, [])
  
  if(datas) return (
    <>
      <div className="body table-responsive pb-5">
        <table className="table table-hover pb-5">
          <thead>
            <tr>
              <th>#</th>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>USERNAME</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody> 
          {datas.length > 0 && datas?.map((data, i) => {
              return (
                <tr key={i}>
                  <th scope="row">1</th>
                  <td>{data.prenom}</td>
                  <td>{data.nom}</td>
                  <td>{data.matricule}</td>
                  <td>
                    <a href={wapp.PATIENT.PROFILE + data.id}>
                      <i className="icon-eye"></i>
                    </a>
                    {" | "}
                    <a href={wapp.PATIENT.PROFILE}
                      onClick={(e)=>{
                        e.preventDefault();
                        document.getElementById("editPatientModal").classList.toggle("show");
                      }}>
                      <i className="fa fa-pencil-square-o"></i> 
                    </a>
                    {" | "}
                    <a href={wapp.PATIENT.PROFILE}
                      className="text-danger"
                      onClick={(e)=>{
                        e.preventDefault();
                        document.getElementById("validationModal").classList.toggle("show");
                      }}>
                      <i className="fa fa-trash-o"></i> 
                    </a>
                </td>
                </tr>   
              );
            })}
        </tbody>
        </table>
      </div>
    </>
  )
  //Loading widget
  return (
    <LoadingWidget />
        
    )
}

