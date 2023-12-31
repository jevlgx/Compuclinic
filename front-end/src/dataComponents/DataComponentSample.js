import React, { useEffect, useState } from "react";
import { wServer } from "../Data/Consts";


//check datas

function DataComponentSample() {

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
                console.log(result);
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
      Components Data to render sample
      {datas.length > 1 && datas?.map((data, i) => {
                  return (
                    <div
                      key={"udhfguhfudhg" + i}
                      keys={data.name + i}
                      Image={data.image}
                      Name={data.name}
                      AddressFirst={data.addressFirst}
                      AddressSecund={data.adressSecund}
                    >Div from list</div>
                  );
                })}
      </>
    )
    //Loading widget
    return (
        <div className="col">
        <div className="card">
          <div className="body d-flex items-center content-center">
            <div className="chart easy-pie-chart-1" data-percent="75">
              {/* Loading Widget */}
              {/* <span>
                <i id="loading-widget" className="fa fa-spinner w-100"></i>
              </span> */}
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

export default DataComponentSample;