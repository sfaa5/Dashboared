import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faEnvelope, faUser, faUserPen } from '@fortawesome/free-solid-svg-icons';
import Alert from "../Alertt.js";
import { useGlobalContext } from "../context/globalContext.js";
// import "../assets\wp3429906.png/"

export default function Users (){


const {users,getUsers,deleteUser}=useGlobalContext()

console.log(users)

    // const [ users , setUsers ] = useState([]);
   
    const [showModal, setShowModal] = useState(false);
    const [Singlee, setSingle] = useState([]);


   // const context = useContext(User);
    // const token = context.auth.token;
    useEffect(()=>{
        getUsers()
        console.log("useEffect")
    },[]);

    function Delete (ee,event){
        event.stopPropagation();
          deleteUser(ee)
    }

    const showUsers =users.map((userr,index)=>(
        
        <tr   onClick={()=>  deletehh(userr)} key={index}>
            <td>  <img
                        alt="Avatar"
                        aria-hidden="true"
                        // className="rounded-full overflow-hidden border border-gray-200 w-10 h-10 object-cover group-hover:scale-110 transition-transform dark:border-gray-800"
                        height="40"
                        src={`http://localhost:5555/Images/${userr.image}`}
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width="40"
                      /></td>
            <td>{userr.name}</td>
            <td>{userr.email}</td>
            <td >
     <div style={{display:"flex" , gap:"15px", marginLeft:"", justifyContent:"flex-end" }}>

          

            <Link style={{color:""}} to ={`${userr._id}`}>    <FontAwesomeIcon className="awesome update" icon={faUserPen} /></Link>
 
             <FontAwesomeIcon   className="awesome delete" onClick={(event)=>Delete(userr._id,event)} icon={faCircleXmark} />


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
           
     <Link to={`${"addUser"}`}  > <button type="button" class="add_ ">Add User</button> </Link>
        <div className="tablee">
            <table>
                <thead>
                    <tr>
                    <th>
                    
                    </th>
                    <th>
                        User
                    </th>
                    <th>
                        Email
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