/**
 * Render the user account widget.
 *
 * @returns {JSX.Element} The user account widget.
 */

import React, { useEffect, useState } from "react";
import { wServer, wapp } from "../Data/Consts";
import { Dropdown } from "react-bootstrap";
import UserImage from "../assets/images/user.png";

export function UserAccounWidget() {
    
    const [loading, setLoading] = useState(false)
    const [datas, setDatas] = useState({
        id:"00af074c-3d15-488d-adba-90305913a44e",
        username:"username",
        email:"email@mail.com",
        first_name: "",
        last_name: "",
    });

    useEffect(()=> {
        const loadDatas = async () => {
            
            setLoading(true);
            
            fetch(`${wServer.GET.LOGGED_IN}`, {
                method: 'GET',
                redirect: 'follow',
                headers: {'Authorization': `Token ${localStorage.getItem("_compuclinicToken")}`}
            })
            .then((response) => {
              if (response.status === 200) return response.json();
            })
            .then((result) => {
                //console.log(result);
                setDatas(result.data);
                setTimeout(setLoading(false), 1500);
            })
            .catch(error => console.log('error', error)); 
        }

        //exec
        loadDatas();
    }, [])

    if(datas)     return (
        <>
          {/* User profile picture */}
          <img
            src={UserImage}
            className="rounded-circle user-photo"
            alt="User Profile Picture"
          />
    
          {/* Dropdown menu */}
          <Dropdown>
            <span>Welcome,</span>
            <Dropdown.Toggle
              variant="none"
              as="a"
              id="dropdown-basic"
              className="user-name"
            >
              <strong> {datas.first_name} {datas.last_name} </strong>
            </Dropdown.Toggle>
    
            {/* Dropdown menu items */}
            <Dropdown.Menu className="dropdown-menu-right account">
              {/* default : /profilev2page */}
              <Dropdown.Item href={'/profile/'+datas.id}>
                <i className="icon-user"></i>My Profile
              </Dropdown.Item>
              {/* <Dropdown.Item href="/appinbox">
                {" "}
                <i className="icon-envelope-open"></i>Messages
              </Dropdown.Item> */}
              <Dropdown.Item>
                {" "}
                <i className="icon-settings"></i>Settings
              </Dropdown.Item>
              <li className="divider"></li>
              <Dropdown.Item href={wapp.USER.LOGOUT}>
                {" "}
                <i className="icon-power"></i>Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
    
          {/* Horizontal line */}
          <hr />
    
        </>
      );

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
  

export default UserAccounWidget;