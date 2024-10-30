import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";
import { useGlobalContext } from "../context/globalContext";

    const ItemDonation = memo(({request,setCdonations,book})=>{
        const{deleteDonation,   Donation,clothing,electronics,HomeEssential,books,toys}=useGlobalContext()
  
let cat=request.category;


        const handleDelete = (id) => {
            deleteDonation(id).then(() => {

switch (cat){
    case"Clothing":
    setCdonations(clothing);
    break;
    case"Electronics":
    setCdonations(electronics)
    break;
    case"Toys":
    setCdonations(toys)
    break;
    case"Books":
    setCdonations(books)
    break;
    case"Home Essentials":
    setCdonations(HomeEssential)
    break;


    default:
        setCdonations(Donation);
                
           
        }});
          };

return(
 
        <tr key={request._id}>
       <td  > <img style={{height:"3rem",width:"5rem",borderRadius:"9px"}} src={`http://localhost:5555/Images/${request.image}`} alt={request.name} /></td>
            <td>{request.name}</td>
         
            <td>{request.dsc}</td>
            <td>{request.donar.name}</td>
            <td>{request.volunteer ? request.volunteer.name : ""}</td>
            
            <td style={{}}>
     <div style={{display:"flex", justifyContent:"flex-end" , width:"" , gap:"18px", marginLeft:"110p"}}>

            {/* <FontAwesomeIcon  onClick={()=>  deletehh(don)} icon={faUser} /> */}
             <FontAwesomeIcon onClick={()=> handleDelete(request._id)} icon={faCircleXmark} />

                {/* <Link to ={`${userr.id}`}>< button class="fa-solid fa-pen-to-square" style={{color:"#74afb9", fontSize:"20px" , paddingRight:"4px"}}>update</button></Link>
            <button style={{color:"red" , fontSize:"20px",cursor:"pointer"}} onClick={()=> deleteh(userr._id)}>delete</button> */}
            </div>
            </td>
            { console.log("render") }
        </tr>
  
);
    
})

export default ItemDonation