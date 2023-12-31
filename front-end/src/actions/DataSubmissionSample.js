import { wServer, wapp } from "../Data/Consts";

export const DataValidation = (input) => {
    let formQuery = new FormData();
    formQuery.append('field1', input.username);
    formQuery.append('field2', input.password);

    if (true) { 
        fetch(wServer.CREATE.PERSONNEL, {
            method: 'post',
            body: formQuery, //input
          }).then(response => {
            if (response.status === 200) { return response.json() }
            else {
              document.getElementById('loginError').classList.toggle("d-none")
            }
          }).then(result => {
            //clear form by reloading page
            window.location.assign(wapp.CURRENT_PAGE)
          })
     }
      else {
        document.getElementById('loginError').classList.toggle("d-none")
      }
}

export const DataSubmissionSample = (cred) => {
    let formQuery = new FormData();
    formQuery.append('username', cred.username);
    formQuery.append('password', cred.password);
  
    
  }