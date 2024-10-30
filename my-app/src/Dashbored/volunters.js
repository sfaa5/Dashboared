
import { faCircleXmark, faListCheck, faUser, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../Alertt.js";
import { useGlobalContext } from "../context/globalContext.js";

export default function Volunteers(){

    const {volunteers,getvolunteers,deleteVolunteer}=useGlobalContext()

   console.log(volunteers)
   
    const [showModal, setShowModal] = useState(false);
    const [Singlee, setSingle] = useState([]);

    useEffect(()=>{
        getvolunteers()
    },[]);

    const showUsers =volunteers.map((userr,index)=>(
        <tr key={index} onClick={()=>{setShowModal(userr)}} >
           
            <td>{userr.name}</td>
            <td>{userr.email}</td>
            <td>{userr.leader?userr.leader.name:""}</td>
            <td style={{paddingLeft:"40px"}}>{userr.donations.length}</td>
            <td style={{}}>
     <div style={{display:"flex", justifyContent:"end" , width:"" , gap:"18px", marginLeft:"110p"}}>

           <Link to ={`${"showTasks/"+userr._id}`}> <FontAwesomeIcon  className="view" icon={faUser} /></Link> 

            <Link to ={`${userr._id}`}>    <FontAwesomeIcon className="update"  icon={faUserPen} /></Link>

          
 
             <FontAwesomeIcon className="awesome delete" onClick={()=>  deleteVolunteer(userr._id)} icon={faCircleXmark} />

            </div>
            </td>
            { console.log("render") }
        </tr>
    ));

   
  function deletehh (u){
     setShowModal(true);
     console.log(555);
  
     setSingle(u);
  }


    return(
        <div className="rSide">
            <Link to={`${"addUser"}`}  > <button type="button" class="add_ ">Add Volunteer</button> </Link>
        <div className="tablee">
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
                        leader
                    </th>
                    <th>
                        No.Tasks
                    </th>
                    <th style={{paddingRight:"48px"}} >
                        Action
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