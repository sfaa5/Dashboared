
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faEnvelope, faUser, faUserPen } from '@fortawesome/free-solid-svg-icons';
import Alert from "../Alertt.js";
import { useGlobalContext } from "../context/globalContext.js";


export default function ShowVolunteers(){
 

    const [ users , setUsers ] = useState([]);
    const[ runUserEffect , setRun ] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const[nameLeader,setLeader]=useState('');
    const [Singlee, setSingle] = useState([]);

    const {volu,setVolu,showVolunteer,remove}=useGlobalContext()
    console.log(volu)
   const volunteers= volu.volunteers



   

function deleteVolunteer(volunteer){

  let user ={

    nameLeader:false,
  }

  remove(volunteer._id,user)


  const updatedVolunteers = volunteers.filter((vo)=>vo._id!=volunteer._id)

   setVolu({ ...volu, volunteers: updatedVolunteers });

}




    const showUsers =volunteers.map((userr,index)=>(
        <tr key={index}>
          
            <td>{userr.name}</td>
            <td>{userr.email}</td>
       
            <td style={{}}>


         <div style={{display:"flex", justifyContent:"center" , width:"" , gap:"18px", marginLeft:"110p"}}>       


            <FontAwesomeIcon onClick={()=>deleteVolunteer(userr)}  style={{marginRight:"-110px"}} className="awesome  delete"  icon={faCircleXmark} />
            </div>
            </td>

        </tr>
    ));

   

   

    return(
        <div className="rSide">





<div className="card">

  <div className="leader-header">
    <div className="leader-title">Leader</div>

    <svg width="100" height="100">
  <circle cx="40" cy="50" r="1.5" stroke="black" stroke-width="1" fill="black" />
  <circle cx="50" cy="50" r="1.5" stroke="black" stroke-width="1" fill="black" />
  <circle cx="60" cy="50" r="1.5" stroke="black" stroke-width="1" fill="black" />

</svg>

  </div>

  <div className="leader-content">


  <img
                        alt="Avatar"
                        aria-hidden="true"
                        height="40"
                        src={`http://localhost:5555/Images/${volu.image}`}
              
                        className="image-leader"
                        width="40"
                      />

    <div className="leader-details">
      <h2 className="leader-name">{volu.name}</h2>
      <p className="leader-role">Head of Operations</p>
    </div>

    <div className="leader-performance">
      <h2 className="performance-title">Performance</h2>
        <p className="performance-item">Support</p>
      
    </div>

  </div>

</div>





<p style={{ fontSize:"1.2rem",   marginTop: "80px"}}  >volunteers</p>





        <div  className="tablee">
        <table>
            <thead>
                <tr>
            
                <th>
                    User
                </th>
                <th>
                    email
                </th>
                <th>
                   
                </th>
                </tr>
            </thead>
            <tbody>
              {showUsers}
            </tbody>
        </table>
        {showModal && (
    <Alert book={Singlee}  onClose={() => setShowModal(false)} />
  )}
 
    </div>
    </div>
    );
} 