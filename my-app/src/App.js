


import {Routes,Route} from "react-router-dom";
import Dashbored from "./Dashbored/Dashbored";
import dashbored from "./css/dashbored.css";
import Users from "./Dashbored/Users";
import { UpdateUser } from "./Dashbored/UpdateUser";
import Leaders from "./Dashbored/Leaders"


import Volunteers from "./Dashbored/volunters";

import AddMe from "./Dashbored/AddMe.js";

import ShowVolunteers from "./Dashbored/ShowVolunteers.js";
import ShowTasks from "./Dashbored/showTasks.js";
import RDonations from "./Dashbored/Donations.js"
import AddDonation from "./Dashbored/AddDonation.js"

import Requests from "./Dashbored/Requests.js";
import Form from "./Dashbored/Form.js";
import Details from "./Dashbored/Details.js";
import Needy from "./Dashbored/Needy.js";


import Books from "./Dashbored/Books.js";

export default function App() {

  const id = "books";
  const idd ="leaders"
  const iddd="volunteers"



  return(
    <div>
     
      <Routes>
     

     


       
        {/* protected routes  */}
       
        <Route path="/Dashbored" element={<Dashbored/>}>
        <Route path="Books" element={<Books/>}/>
          <Route path="Users" element={<Users/>}/>
          <Route path="Users/:id" element={<UpdateUser path={id} />}/>
          <Route path="Users/addUser" element={<AddMe  path="user" />}/>
          <Route path="leader" element={<Leaders/>}/>
          <Route path="leader/:id" element={<UpdateUser path={idd}/>}/>
          <Route path="leader/addUser" element={<AddMe path="leader" />}/>
          <Route path="leader/show/:id" element={<ShowVolunteers/>} />
          <Route path="volunteers" element={<Volunteers/>}/>
          <Route path="volunteers/:id" element={<UpdateUser path={iddd}/>}/>
          <Route path="volunteers/addUser" element={<AddMe path="volunteer"/>}/>
          <Route path="volunteers/showTasks/:id" element={<ShowTasks/>} />

          <Route path="donations" element={<RDonations/>}/>
          <Route path="donations/addUser" element={<AddDonation/>}/>

          <Route path="request" element={<Requests/>} />
          <Route path="request/addUser" element={<Form/>}/>
          <Route path="request/details" element={<Details/>}/>


          <Route path="needy" element={<Needy/>} />
           <Route path="needy/addUser" element={<AddMe path="needy"/>} />
           <Route path="needy/:id" element={<UpdateUser path="needy"/>} /> 
         {/*  <Route path="needy/show/:id" element={<showNeedy/>} />  */}


        </Route>
       
      </Routes>
    </div>
  );
}


