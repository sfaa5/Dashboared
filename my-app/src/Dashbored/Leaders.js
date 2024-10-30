import { faCircleXmark, faHandshakeAngle, faUser, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../Alertt.js";
import dashbored from "../css/dashbored.css";
import { useGlobalContext } from "../context/globalContext.js";

export default function Leaders(){

    const {showVolunteer,leaders,getLeaders,deleteLeaders}=useGlobalContext()

    console.log(leaders)
   
    const[ runUserEffect , setRun ] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [Singlee, setSingle] = useState([]);

    useEffect(()=>{
        getLeaders()
    },[]);

    const showUsers =leaders.map((userr,index)=>(
        <tr   onClick={()=>  deletehh(userr)} style={{}}  key={index}>
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
            <td style={{textAlign:"center"}} >{userr.volunteers.length}</td>
            <td style={{}}>
     <div style={{display:"flex" , width:"" , gap:"18px", marginLeft:"85px",alignItems:"center" ,flexDirection:"row"}}>

     <Link to ={`${"show/"+userr._id}`}>   <FontAwesomeIcon className="awesome view" onClick={()=> showVolunteer(userr) } icon={faUser} /> </Link>

            <Link  style={{color:"black"}}  to ={`${userr._id}`}>    <FontAwesomeIcon className="awesome update" onClick={()=>showVolunteer(userr)}  icon={faUserPen} /></Link>


 
             <FontAwesomeIcon className="awesome delete" onClick={()=> deleteLeaders(userr._id)} icon={faCircleXmark} />


            </div>
            </td>
{console.log("leaders")}
        </tr>
    ));

    // async function deleteh(id){
    //     try{  const res = await axios.delete(`http://localhost:5555/leaders/${id}`);
        
    //       if(res.status===200){
    //           setRun((prev)=>prev+1);
            
    //       }
    //   }catch{
    //       console.log("none");
    //   }
  
    //   }
  
  
  function deletehh (u){
     setShowModal(true);
     console.log(555);
  
     setSingle(u);
  }



return(
    <div className="rSide">
        <Link to={`${"addUser"}`}  > <button type="button" class="add_ ">Add Leader</button> </Link>
   <div className="tablee">
            <table>
                <thead>
                    <tr>
                 <th></th>
                    <th>
                        User
                    </th>
                    <th>
                        Email
                    </th>
                    <th className="th-volunteer">
                        Volunteers
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