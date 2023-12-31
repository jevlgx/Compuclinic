import { wServer, wapp } from "../Data/Consts";

export const DataValidation = (input) => {
    let formQuery = new FormData();
    formQuery.append('username', input.username);
    formQuery.append('password', input.password);

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

export const SubmitMedecin = (input) => {
    let formQuery = new FormData();
    formQuery.append('username', input.username);
    formQuery.append('password', input.password);
  
    
}