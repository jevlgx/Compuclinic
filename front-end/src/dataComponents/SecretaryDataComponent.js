import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { wServer, wapp } from "../Data/Consts";
import { LoadingWidget } from "./utils";
//import { redirectTo } from "./utils";

//datas

export const PatientData = () => {

  const [datas, setDatas] = useState([]);
  
  useEffect(()=> {
      const loadDatas = async () => {
          
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
          })
          .catch(error => console.log('error', error)); 
      }

      //exec
      loadDatas();
  }, [])
  
  return datas
}

//datas with render

export const PatientTableData = () => {

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
                    <th scope="row">{i+1}</th>
                    <td>{data.prenom}</td>
                    <td>{data.nom}</td>
                    <td>{data.matricule}</td>
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

export const InternedPatientTableData = () => {

  const [loading, setLoading] = useState(false)
  const [datas, setDatas] = useState([]);
  
  useEffect(()=> {
      const loadDatas = async () => {
          
          setLoading(true);
          
          fetch(`${wServer.GET.PATIENT.INTERNED}`, {
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
                      <i className="icon-eye"></i> View
                    </a>
                    <a href={wapp.PATIENT.PROFILE}
                      onClick={(e)=>{
                        e.preventDefault();
                        document.getElementById("editPatientModal").classList.toggle("show");
                      }}>
                      <i className="icon-user"></i> Edit
                    </a>
                    
                  <Dropdown>
                  <Dropdown.Toggle
                    // variant="none"
                    // as="a"
                    id="dropdown-basic"
                    // className="user-name"
                  >
                    <span>Action</span>
                  </Dropdown.Toggle>
  
                  <Dropdown.Menu className="dropdown-menu-right account">
                    <Dropdown.Item href={wapp.PATIENT.PROFILE + data.id}>
                      
                    </Dropdown.Item>
                    <Dropdown.Item href={"#"}
                      onClick={(e)=>{
                        e.preventDefault();
                        document.getElementById("editPatientModal").classList.toggle("show");
                      }}
                    >
                      
                    </Dropdown.Item>
                    <Dropdown.Item href={"#"}>
                      {" "}
                      <i className="icon-envelope-open"></i> Interner
                    </Dropdown.Item>
                    
                  </Dropdown.Menu>
                  </Dropdown>
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

export const PresentPatientTableData = () => {

  const [loading, setLoading] = useState(false)
  const [datas, setDatas] = useState([]);
  
  useEffect(()=> {
      const loadDatas = async () => {
          
          setLoading(true);
          
          fetch(`${wServer.GET.PATIENT.EXTERNED}`, {
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
                  <Dropdown>
                  <Dropdown.Toggle
                    // variant="none"
                    // as="a"
                    id="dropdown-basic"
                    // className="user-name"
                  >
                    <span>Action</span>
                  </Dropdown.Toggle>
  
                  <Dropdown.Menu className="dropdown-menu-right account">
                    <Dropdown.Item href={wapp.PATIENT.PROFILE + data.id}>
                      <i className="icon-eye"></i> View
                    </Dropdown.Item>
                    <Dropdown.Item href={"#"}>
                      <i className="icon-user"></i> Edit
                    </Dropdown.Item>
                    <Dropdown.Item href={"#"}>
                      {" "}
                      <i className="icon-envelope-open"></i> Interner
                    </Dropdown.Item>
                    
                  </Dropdown.Menu>
                  </Dropdown>
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
