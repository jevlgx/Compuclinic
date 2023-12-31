import { wServer, wapp } from "../Data/Consts";

export const UPDATE_EMAIL = "loginReducer/UPDATE_EMAIL";
export const UPDATE_PASSWORD = "loginReducer/UPDATE_PASSWORD";
export const ON_LOGGEDIN = "loginReducer/ON_LOGGEDIN";

export const updateEmail = (val) => (disptch) => {
  disptch({
    type: UPDATE_EMAIL,
    payload: val,
  });
};

export const updatePassword = (val) => (disptch) => {
  disptch({
    type: UPDATE_PASSWORD,
    payload: val,
  });
};

export const onLoggedin = (val) => (disptch) => {
  disptch({
    type: ON_LOGGEDIN,
    payload: val,
  });
};

export const checkLoginStatus = () => {
  // Check if user is already logged in
  console.log(window.location.pathname)
  if (window.localStorage.getItem('_compuclinicToken') && window.localStorage.getItem('_compuclinicToken')!==null){
    if(window.location.pathname === '/' || window.location.pathname === '/login') window.location.assign('/dashboard')
  } else if(window.location.pathname !== '/login') window.location.assign('/login')
}
export const checkCredentials = (cred) => {
  let formQuery = new FormData();
  formQuery.append('username', cred.username);
  formQuery.append('password', cred.password);

  fetch(wServer.LOGIN, {
    method: 'post',
    body: formQuery, //cred
  }).then(response => {
    if (response.status === 200) { return response.json() }
    else {
      document.getElementById('loginError').classList.toggle("d-none")
    }
  }).then(result => {
    //v1 was the user access token and refresh token as json obj
    //v2 is an object with sheme
    // {
    //   "status": 200,
    //   "message": "success",
    //   "data": {
    //       "token": "string",
    //       "user": {
    //           "username": "string",
    //           "password": "hash string",
    //           "email": "string",
    //           "first_name": "string",
    //           "last_name": "string"
    //       }
    //   }
    // }
    storeToken(result.data.token)

    //set loggedin user
    //

    //reach the dashboard
    window.location.assign(wapp.DASHBOARD)
  })
}

export const storeToken = (uat) =>{
 //uat = user access token
//  localStorage.setItem('_compuclinicToken', uat.access);
 localStorage.setItem('_compuclinicToken', uat);
 console.log(uat)
//  localStorage.setItem('_compuclinicToken', JSON.stringify(uat));
}

export const logOut = () => {
  //free up sessionStorage field _compuclinicToken
  localStorage.setItem('_compuclinicToken', null);
}


