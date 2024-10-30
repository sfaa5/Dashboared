
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faEnvelope, faUser, faUserPen } from '@fortawesome/free-solid-svg-icons';
import Alert from "../Alertt.js";


export default function ShowVolunteers(){

    const [ users , setUsers ] = useState([]);
    const[ runUserEffect , setRun ] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [Singlee, setSingle] = useState([]);

    const id = window.location.pathname.split("/").slice(-1)[0];


    useEffect(()=>{
        axios.get(`http://localhost:5555/volunteers/${id}`)
        .then((data)=>{
            console.log(data.data.data)
            setUsers(data.data.data.donations)})
    },[runUserEffect]);





    const showUsers =users.map((userr,index)=>(
        <tr key={index}>
            <td>{index+1}</td>
            <td>{userr.name}</td>
            <td>{userr.quantity}</td>
       
            <td style={{}}>


         <div style={{display:"flex", justifyContent:"center" , width:"" , gap:"18px", marginLeft:"110p"}}>       

             {/* <Link to ={`${userr.id}`}>< button class="fa-solid fa-pen-to-square" style={{color:"#74afb9", fontSize:"20px" , paddingRight:"4px"}}>update</button></Link>
            <button style={{color:"red" , fontSize:"20px",cursor:"pointer"}} onClick={()=> deleteh(userr._id)}>delete</button> */}
            
            </div>
            </td>

        </tr>
    ));

   

   

    return(
        <div className="rSide">
        <div className="tablee">
        <table>
            <thead>
                <tr>
                <th>
                    id
                </th>
                <th>
                    User
                </th>
                <th>
                    email
                </th>
                <th>
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