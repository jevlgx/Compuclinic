import React, { useEffect, useState } from "react";
import { wServer } from "../Data/Consts";
import { Toast } from "react-bootstrap";


//check datas

export function DataPostComponentSample() {

    const [loading, setLoading] = useState(false)
    const [datas, setDatas] = useState([]);
    
    useEffect(()=> {
        const sendDatas = async (dataToPost={action:'post'}) => {
            
            setLoading(true);
            
            fetch(`${wServer.CREATE.SANDBOX}`, {
                method: 'POST',
                redirect: 'follow',
                headers: {'Authorization': `Token ${localStorage.getItem("_compuclinicToken")}`},
                body:{...dataToPost},
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
        sendDatas();
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
          <div className="body d-flex align-items-center justify-content-center">
            <div className="chart easy-pie-chart-1" data-percent="75">
              {/* Loading Widget */}
              <div className="d-flex align-items-center justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
              {" "}
              <canvas height="10" width="10"></canvas>
            </div>            
          </div>
        </div>
     </div>
            
        )
}

export class DataPostClassComponentSample extends React.Component {
  
  constructor() {
    super();

    this.state = {
      loading: false,
      toast : true
    }
  }
  render() {
    const onSubmit = (event) => {
      event.preventDefault()
      this.setState({loading:false})
      var formContent = new FormData(document.getElementById("addDoctorForm"));

      fetch(`${wServer.CREATE.DOCTOR}`, {
        method: 'POST',
        redirect: 'follow',
        headers: {'Authorization': `Token ${localStorage.getItem("_compuclinicToken")}`},
        body:{...formContent},
      })
      .then((response) => {
        if (response.status === 200) return response.json();
      })
      .then((result) => {
          console.log(result);
          setTimeout(this.setState({loading:false}), 1500);
      })
      .catch(error => console.log('error', error)); 
    }
    return (
      
      <div>
          {this.state.toast ? (
          <Toast
            id="toast-container"
            show={this.state.toast}
            onClose={() => {
              this.setState({toast:false});
            }}
            className="toast-info toast-bottom-right"
            autohide={true}
            delay={5000}
          >
            <Toast.Header className="toast-success mb-0">
              success!
            </Toast.Header>
          </Toast>
        ) : null}

          <h6>Data Form Information</h6>
          <form id="addDoctorForm" onSubmit={onSubmit}>
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12">
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="First Name"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </form>
      </div>
      
    );
  }
}
