
import { faCheck, faCircleXmark, faListCheck, faUser, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../Alertt.js";
import Prompt from "./Prompt.js";
import ItemDonation from "../component/ItemDonation.js";
import { useGlobalContext } from "../context/globalContext.js";

export default function Volunteers(){

    const [ users , setUsers ] = useState([]);
    const [ Cdonations , setCdonations ] = useState([]);
    const [ specificD , setSpecificD ] = useState([]);
    const[ runUserEffect , setRun ] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [Singlee, setSingle] = useState([]);

   

const{getDonation,    getClothing,
    getElectronics,
    getToys,
    getBooks,
    HomeEssentials,  Donation,clothing,electronics,HomeEssential,books,toys}=useGlobalContext()

// const getAllDonations =()=>{

//     axios.get('http://localhost:5555/Cdonation')
//     .then((data)=>{
//         console.log(data) 
//         setCdonations(data.data.data)})
        
// } 

// const specificDonation=(category)=>{



//     axios.get(`http://localhost:5555/Cdonation/getCategory/${category}`)
//     .then((data)=>{
//         console.log(data)
//         setCdonations(data.data.data)})

// }



    useEffect(()=>{

        getDonation();
        getClothing()
        getElectronics()
        getToys()
        getBooks()
        HomeEssentials()
          
        // specificDonation();
       

    },[]);




   

    async function deleteh(id,cat){
        try{  const res = await axios.delete(`http://localhost:5555/Cdonation/${id}`);
        
          if(res.status===200){
             
            // getAllDonations();
            // specificDonation(cat);
          
          }
      }catch{
          console.log("none");
      }
  
      }
  
  
//   function deletehh (u,id){
//      setShowModal(true);
//      console.log(555);
  
//      setSingle(id);
//      console.log(id);
  //}


    return(
        <div className="rSide">
            {/* <Link to={`${"addUser"}`}  > <button type="button" class="add_ ">Add Donations</button> </Link> */}

            <button type="button" class="add_ " onClick={()=>{setCdonations(Donation)}}>All Donations</button>
            <button onClick={()=>{setCdonations(HomeEssential)}} type="button" class="add_ ">Home Essentials</button>  
            <button onClick={()=>setCdonations(electronics) } type="button" class="add_ ">Electronics</button>  
            <button onClick={()=>{setCdonations(toys)} } type="button" class="add_ ">Toys</button> 
            <button type="button" onClick={()=>{setCdonations(books)} } class="add_ ">Books</button>
            <button onClick={()=>{setCdonations(clothing)}} type="button" class="add_ ">Clothing</button>  


        <div className="tablee">
            <table>
                <thead>
                    <tr>
                    <th>
                        Img
                    </th>
                    <th>
                        Item
                    </th>
                    <th>
                        Dsc
                    </th>
                    <th>
                        Donar
                    </th>
                    <th>
                        Volunteer
                    </th>
                    <th>
                        Action
                    </th>
                    </tr>
                </thead>
                <tbody>
                {Cdonations.map((don,index)=>(

                    <ItemDonation setCdonations={setCdonations}   request={don}/>
                ))}
                </tbody>
            </table>
            {showModal && (
        <Prompt id={Singlee}  onClose={() => setShowModal(false)} />
      )}
     
        </div>



        </div>
    );
}