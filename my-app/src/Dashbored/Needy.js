
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faEnvelope, faUser, faUserPen } from '@fortawesome/free-solid-svg-icons';
import Alert from "../Alertt.js";
import { useGlobalContext } from "../context/globalContext.js";
export default function (){


    const {needy,getNeedy,deleteNeedy}=useGlobalContext()

    console.log(needy)
    
        // const [ users , setUsers ] = useState([]);
       
        const [showModal, setShowModal] = useState(false);
        const [Singlee, setSingle] = useState([]);
    
    
       // const context = useContext(User);
        // const token = context.auth.token;
        useEffect(()=>{
            getNeedy()
            console.log("useEffect")
        },[]);
    
        function Delete (ee,event){
            event.stopPropagation();
              deleteNeedy(ee)
        }

        function deletehh (u){
            setShowModal(true);
            console.log(555);
         setSingle(u);
         
         }


    const showUsers =needy.map((userr,index)=>(
        
        <tr  style={{height:"90px"}} onClick={()=>  deletehh(userr)} key={index}>
            <td>{userr.name}</td>
            <td>{userr.email}</td>
            <td>{userr.points}</td>
            <td style={{}}>
     <div style={{display:"flex" , width:"" , gap:"18px", marginLeft:"60px",alignItems:"center" ,flexDirection:"column"}}>

          

            <Link style={{color:"black"}} to ={`${userr._id}`}>    <FontAwesomeIcon className="awesome" icon={faUserPen} /></Link>
 
             <FontAwesomeIcon   className="awesome" onClick={(event)=>Delete(userr._id,event)} icon={faCircleXmark} />

                {/* <Link to ={`${userr.id}`}>< button class="fa-solid fa-pen-to-square" style={{color:"#74afb9", fontSize:"20px" , paddingRight:"4px"}}>update</button></Link>
            <button style={{color:"red" , fontSize:"20px",cursor:"pointer"}} onClick={()=> deleteh(userr._id)}>delete</button> */}
            </div>
            </td>

           
            { console.log("render") }
                  </tr>
                
    ));







    return(

       
        <div className="rSide">
           
        <Link to={`${"addUser"}`}  > <button type="button" class="add_ ">Add User</button> </Link>
           <div className="tablee">
               <table>
                   <thead>
                       <tr>
                 
                       <th>
                           User
                       </th>
                       <th>
                           Email
                       </th>
                       <th>
                           Points
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