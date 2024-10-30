import { faCircleXmark, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";



export default function Row ( {id,name,email,i,deleteUser} ){



    return(
      
    
        
            <tr key={i}>
                <td>{i+1}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td style={{}}>
         <div style={{display:"flex", justifyContent:"center" , width:"" , gap:"18px", marginLeft:"110p"}}>
    
                {/* <FontAwesomeIcon  onClick={()=>  deletehh(userr)} icon={faUser} /> */}
    
                <Link to ={`${id}`}>    <FontAwesomeIcon icon={faUserPen} /></Link>
     
                 <FontAwesomeIcon onClick={()=>  deleteUser(id)} icon={faCircleXmark} />
    
                    {/* <Link to ={`${userr.id}`}>< button class="fa-solid fa-pen-to-square" style={{color:"#74afb9", fontSize:"20px" , paddingRight:"4px"}}>update</button></Link>
                <button style={{color:"red" , fontSize:"20px",cursor:"pointer"}} onClick={()=> deleteh(userr._id)}>delete</button> */}
                </div>
                </td>
    
               
                { console.log("render") }
                      </tr>
                    
     
    );
}